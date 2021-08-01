import HiddenArea from "../hiddenArea"

type ChatPiece = (arg: { tick: string, position: number, hiddenArea?: string }) => JSX.Element;

const ChatPiece: ChatPiece = ({ tick, position, hiddenArea }) => (
    <>
        {
            typeof hiddenArea === "string"
                ? <HiddenArea id={hiddenArea} />
                : null
        }
        <g transform={`translate(29, ${position})`}>
            <text className="tick" x={0} y={-10}>
                {tick}
            </text>
            <line opacity="0.11" x1={0} y1={0} x2="340" y2={0} className="line" />
        </g>
    </>
)

export default ChatPiece;
import { HiddenArea } from "../hiddenArea/HiddenArea"

const ChatPiece = ({ tick, position, hiddenArea }) => (
    <>
        <HiddenArea id={hiddenArea} />
        <g transform={`translate(29, ${position})`}>
            <text className="tick" x={0} y={-10}>
                {tick}
            </text>
            <line opacity="0.11" x1={0} y1={0} x2="340" y2={0} className="line" />
        </g>
    </>
)

export default ChatPiece;
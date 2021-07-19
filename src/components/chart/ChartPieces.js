import { BOTTOM_TO_TOP, TOP_TO_BOTTOM } from "./constants"
import { HiddenArea } from "./HiddenArea"

export const Initial = ({ textPosition, tick, linePosition, dynamycLinePosition, dynamycTextPosition, initialTick }) => (
    <>
        <g transform={`translate(29, ${dynamycLinePosition})`} className={"test"}>
            <text className="tick" x={0} y={-10}>
                {tick}
            </text>
            <line opacity="0.11" x1={0} y1={0} x2="381" y2={0} className="line" />
        </g>
        <HiddenArea id={TOP_TO_BOTTOM} />
        <line opacity="0.11" x1="30" y1={linePosition} x2="381" y2={linePosition} className="line" />
        <text className="tick" x="29" y={textPosition}>
            {initialTick}
        </text>
    </>
)

export const Final = ({ textPosition, finalTick, linePosition }) => (
    <>
        <HiddenArea id={BOTTOM_TO_TOP} />
        <g transform={`translate(29, ${linePosition})`}>
            <text className="tick" x={0} y={-10} data-prefix={finalTick}>
                {finalTick}
            </text>
            <line opacity="0.11" x1={0} y1={0} x2="381" y2={0} className="line" />
        </g>
    </>
)
export const Middle = ({ tick, dynamycLinePosition, dynamycTextPosition }) => (
    <>
        <g transform={`translate(29, ${dynamycLinePosition})`} className={"test"}>
            <text className="tick" x={0} y={-10} lengthAdjust="spacingAndGlyphs">
                {tick}
            </text>
            <line opacity="0.11" x1={0} y1={0} x2="381" y2={0} className="line" />
        </g>
    </>
)
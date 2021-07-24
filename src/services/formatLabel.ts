import {
    tickFormat,
    round
} from "src/utils";

type FormatLabel = (tick: number) => string;

export const formatLabel: FormatLabel = (tick) => tickFormat(round(tick));

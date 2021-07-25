import {
    valueFormat,
    round
} from "src/utils";

type FormatLabel = (tick: number) => string;

export const formatLabel: FormatLabel = (tick) => valueFormat(round(tick));

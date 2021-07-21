import { round } from "./round";

export const tickFormat = (tick) => (`${tick}X`);

export const convertToPercents = value => `${value}%`;

export const formatLabel = (tick) => tickFormat(round(tick));

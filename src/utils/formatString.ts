type TickFormat = (tick: string) => string

type ConvertToPercents = (value: number) => string

export const tickFormat: TickFormat = (tick) => (`${tick}X`);

export const convertToPercents: ConvertToPercents = (value: number) => `${value}%`;
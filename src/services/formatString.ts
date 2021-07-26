type ValueFormat = (value: string) => string

type ConvertToPercents = (value: number) => string

export const valueFormat: ValueFormat = (value) => (`${value}X`);

export const convertToPercents: ConvertToPercents = (value: number) => `${value}%`;
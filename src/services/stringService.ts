import {round} from './numberService';

type ValueFormat = (value: string) => string;

type ConvertToPercents = (value: number) => string;

type FormatLabel = (tick: number) => string;

export const formatLabel: FormatLabel = (tick) => valueFormat(round(tick));

export const valueFormat: ValueFormat = (value) => (`${value}X`);

export const convertToPercents: ConvertToPercents = (value: number) => `${value}%`;
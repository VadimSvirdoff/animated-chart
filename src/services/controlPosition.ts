import { DIFF } from "../components/chart/constants";

type ControlPosition = (arg: {
    position: number, 
    linearCoef: number
}) => number

export const controlPosition: ControlPosition = ({position, linearCoef}) => {
    const coef = DIFF * linearCoef;
    return position + coef;
}

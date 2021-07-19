import { tickFormat } from 'src/utils/formatString';

export const round = (value) => {
    let roundedValue;
    if (value === 1) {
        return value.toFixed()
    } else if (value < 2.7) {
        roundedValue = value.toFixed(2)
    } else if (value < 10) {
        roundedValue = value.toFixed(1)
    }
    else {
        roundedValue = value.toFixed()
    }

    return roundedValue;
}

export const roundLiniarValue = value => +value.toFixed(2)

export const roundPoint = (value) => {
    let roundedValue;
    if (value < 2.7) {
        roundedValue = tickFormat(value.toFixed(2)) 
    } else if (value < 10) {
        roundedValue = tickFormat(value.toFixed(1)) 
    }
    else {
        roundedValue = tickFormat(value.toFixed()) 
    }

    return roundedValue;
}
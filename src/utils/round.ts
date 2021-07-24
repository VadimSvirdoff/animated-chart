type Round = (value: number) => string;

export const round: Round = (value) => {
    
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
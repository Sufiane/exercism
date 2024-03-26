const Thousands = {
    1: 'M',
    5: '',
}
const Hundreds = {
    1: 'C',
    5: 'D',
    superior: Thousands,
}
const Tens = {
    1: 'X',
    5: 'L',
    superior: Hundreds,
}
const Ones = {
    1: 'I',
    5: 'V',
    superior: Tens,
}

const translate = (value: number, unit: {
    1: string,
    5: string,
    superior?: Record<number, string>
}): string => {
    if (value === 4) {
        return `${unit['1']}${unit['5']}`
    } else if (value === 9 && unit.superior !== undefined) {
        return unit['1'] + unit.superior['1']
    } else if (value === 5) {
        return unit['5']
    } else if (value > 5) {
        return unit['5'] + unit['1'].repeat(value - 5)
    } else {
        return unit['1'].repeat(value)
    }
}


export const toRoman = (nb: number): string => {
    const [ones, tens, hundreds, thousands] = nb.toString()
        .split('')
        .reverse()
        .map(v => parseInt(v))

    return translate(thousands, Thousands)
        + translate(hundreds, Hundreds)
        + translate(tens, Tens)
        + translate(ones, Ones)
}

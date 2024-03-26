//
// This is only a SKELETON file for the 'Pop Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue: number): number => {
    const binaryValue = displayValue.toString(2)

    return binaryValue.split('')
        .filter(value => value === '1')
        .length
}

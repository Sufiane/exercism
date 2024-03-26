export function classify(value: number): string {
    if (value < 1) {
        throw new Error('Classification is only possible for natural numbers.')
    }

    let counter = 0
    const aliquotNumbers: number[] = []

    do {
        if (value % counter === 0) {
            aliquotNumbers.push(counter)
        }
        counter++
    } while (counter < value)

    const sumResult = aliquotNumbers.reduce((acc, alNumber) => {
        acc += alNumber

        return acc
    }, 0)

    return value === sumResult
        ? 'perfect'
        : value < sumResult
            ? 'abundant'
            : 'deficient'
}

const calculateBigInt = (numbers: string[], size: number): bigint => {
    return numbers.reduce((acc, value) => {
        acc += BigInt(value) ** BigInt(size)

        return acc
    }, BigInt(0))
}

const calculateNumber = (numbers: string[], size: number): number => {
    return numbers.reduce((acc, value) => {
        acc += Math.pow(Number.parseInt(value), size)

        return acc
    }, 0)
}

export function isArmstrongNumber(number: number | bigint): boolean {
    const numbers = number.toString()
        .split('')

    const size = numbers.length

    const result = typeof number === 'bigint'
        ? calculateBigInt(numbers, size)
        : calculateNumber(numbers, size)

    return number === result
}

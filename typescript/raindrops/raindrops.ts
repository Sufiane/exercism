function isDivisibleBy(value: number, divider: number): boolean {
    return value % divider === 0
}

export function convert(value: number): string {
    const isDivisibleBy3 = isDivisibleBy(value, 3)
    const isDivisibleBy5 = isDivisibleBy(value, 5)
    const isDivisibleBy7 = isDivisibleBy(value, 7)

    if (!isDivisibleBy3 && !isDivisibleBy5 && !isDivisibleBy7) {
        return `${value}`
    }

    let result = ''

    if (isDivisibleBy3) {
        result += 'Pling'
    }

    if (isDivisibleBy5) {
        result += 'Plang'
    }

    if (isDivisibleBy7) {
        result += 'Plong'
    }

    return result
}

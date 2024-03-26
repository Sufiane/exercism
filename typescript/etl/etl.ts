export function transform(data: Record<number, string[]>): Record<string, number> {
    return Object.entries(data)
        .reduce<Record<string, number>>((acc, [key, values]) => {
            values.forEach(value => {
                acc[value.toLowerCase()] = parseInt(key)
            })

            return acc
        }, {})
}

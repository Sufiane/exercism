export function encode(encodedValue: string): string {
    const store: { key: string, value: number }[] = []

    ;(encodedValue.split(''))
        .forEach(value => {
            const lastEntry = store.at(-1)

            if (lastEntry && lastEntry.key === value) {
                lastEntry.value += 1
            } else {
                store.push({
                    key: value,
                    value: 1,
                })
            }
        })

    return store.reduce((acc, { key, value }) => {
        return acc + `${value > 1 ? value : ''}${key}`
    }, '')

}

export function decode(valueToDecode: string): string {

    return valueToDecode
}

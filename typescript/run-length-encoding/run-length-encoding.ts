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
    if (valueToDecode === '') {
        return ''
    }

    const result = valueToDecode.match(/\d*[A-Za-z\s]/g)

    if (!result) {
        throw new Error('value to decode do not match format.')
    }

    return result.reduce((acc, match) => {
        const [_, number, letter] = match.match(/(\d*)([A-Za-z\s]+)/)!

        acc += `${letter.repeat(parseInt(number || '1'))}`

        return acc
    }, '')
}


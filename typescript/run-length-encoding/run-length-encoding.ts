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

const isNumber = (value: string) => /[0-9]/.test(value)


export function decode(valueToDecode: string): string {
    return valueToDecode.split('')
        .reduce<{ repeat: number, value: string }[]>((acc, value) => {
            const lastEntry = acc.at(-1)

            if (lastEntry) {
                if (isNumber(value)) {
                    if (lastEntry.value !== '') {
                        acc.push({
                            repeat: parseInt(value),
                            value: '',
                        })
                    } else {
                        lastEntry.repeat = lastEntry.repeat * 10 + parseInt(value)
                    }
                } else {
                    if (lastEntry.value === '') {
                        lastEntry.value = value
                    } else {
                        acc.push({
                            repeat: 1,
                            value,
                        })
                    }
                }
            } else {
                if (isNumber(value)) {
                    acc.push({
                        repeat: parseInt(value),
                        value: '',
                    })
                } else {
                    acc.push({
                        repeat: 1,
                        value,
                    })
                }
            }

            return acc
        }, [])
        .reduce((acc, entry) => {
            return acc + entry.value.repeat(entry.repeat)
        }, '')
}

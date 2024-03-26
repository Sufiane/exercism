type LetterCount = Map<string, number>

export class Anagram {
    private readonly word: string
    private letterCount: LetterCount

    constructor(input: string) {
        this.word = input
        this.letterCount = this.getLetterCount(input)
    }

    private compareLetterCount(letterCount1: LetterCount, letterCount2: LetterCount): boolean {
        let isEqual = true

        letterCount1.forEach((value, key) => {
            if (letterCount2.get(key) !== value) {
                isEqual = false
            }
        })

        return isEqual
    }

    private getLetterCount(word: string): LetterCount {
        return word.toLowerCase()
            .split('')
            .reduce((acc, letter) => {
                const letterCount = acc.get(letter) ?? 0

                acc.set(letter, letterCount + 1)

                return acc
            }, new Map<string, number>())
    }

    public matches(...potentials: string[]): string [] {
        return potentials.filter((value) => {
            const letterCount = this.getLetterCount(value)

            return this.word.toLowerCase() !== value.toLowerCase()
                && this.word.length === value.length
                && this.compareLetterCount(this.letterCount, letterCount)
        })
    }
}

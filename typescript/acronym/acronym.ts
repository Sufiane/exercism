const punctuationToRemoveRegex = /[.,/#!$%^&*;:{}=_`~()]/g

const removePunctuations = (phrase: string): string => {
    return phrase.replace(punctuationToRemoveRegex, '')
}

const getUpperCasedLetter = (word: string): string => {
    if (word === word.toUpperCase()) {
        return word[0]
    }

    // todo need to handle the first letter and then the rest
    const stringToReturn = word[0].toUpperCase()

    return word.substring(1).split('')
        .reduce((acc, letter) => {
            if (letter === letter.toUpperCase()) {
                acc += letter
            }

            return acc
        }, stringToReturn);
}

export function parse(phrase: string): string {
    const cleanedPhrase = removePunctuations(phrase)

    return cleanedPhrase.replace('-', ' ')
        .split(' ')
        .reduce((acc, word) => {
            acc += getUpperCasedLetter(word)

            return acc
        }, '')
}

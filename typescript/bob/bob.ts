const isQuestion = (punctuation: string): boolean => punctuation === '?'
const isYelledAt = (phrase: string): boolean => phrase !== '' && phrase === phrase.toUpperCase()

const isSilence = (phrase: string): boolean => phrase.trim() === ''

const cleanPhrase = (phrase: string): string => phrase.replaceAll(/[\W\d]/g, '')

export function hey(message: string): string {
    const cleanRegex = /^(?<message>[a-zA-Z]*)(?<messagePt2>.*?)(?<punctuation>[.?!]?)$/
    const trimmedMessage = message.trim()
    const regexResult = trimmedMessage.match(cleanRegex)

    const phraseIsSilence = isSilence(trimmedMessage)

    if (regexResult === null) {
        if (phraseIsSilence) {
            return 'Fine. Be that way!'
        }

        return 'Whatever.'
    } else {
        const [, messageMatch, messagePart2, punctuation] = regexResult

        const cleanedMessage2 = cleanPhrase(messagePart2)
        const isAScream = isYelledAt(messageMatch || cleanedMessage2)

        if (isQuestion(punctuation)) {
            if (isAScream) {
                return 'Calm down, I know what I\'m doing!'
            }

            return 'Sure.'
        } else {
            if (isAScream) {
                return 'Whoa, chill out!'
            }

            if (phraseIsSilence) {
                return 'Fine. Be that way!'
            }

            return 'Whatever.'
        }
    }

}

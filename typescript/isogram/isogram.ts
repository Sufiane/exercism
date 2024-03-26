function cleanWord(word: string): string {
    return word
        .toLowerCase()
        .replaceAll(/[-\s]/g, '')
}

export function isIsogram(word: string): boolean {
    const cleanedWord = cleanWord(word)

    const set = new Set(
        cleanedWord
            .split(''),
    )

    return cleanedWord.length === set.size
}

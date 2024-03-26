export function isPangram(sentence: string): boolean {
    const letters = new Set(
        sentence.toLowerCase()
            .replaceAll(/[."_\s0-9]/g, '')
            .split(''),
    )

    return letters.size === 26
}

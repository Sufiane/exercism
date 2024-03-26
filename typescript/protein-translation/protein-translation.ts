enum ProteinMapping {
    Methionine = 'Methionine',
    Phenylalanine = 'Phenylalanine',
    Leucine = 'Leucine',
    Serine = 'Serine',
    Tyrosine = 'Tyrosine',
    Cysteine = 'Cysteine',
    Tryptophan = 'Tryptophan',
    STOP = 'STOP'
}

type Protein = Omit<ProteinMapping, ProteinMapping.STOP>

function getProtein(codon: string): ProteinMapping {
    switch (codon) {
        case 'AUG':
            return ProteinMapping.Methionine;
        case 'UUU':
        case 'UUC':
            return ProteinMapping.Phenylalanine;
        case 'UUA':
        case 'UUG':
            return ProteinMapping.Leucine;
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
            return ProteinMapping.Serine
        case 'UAU':
        case 'UAC':
            return ProteinMapping.Tyrosine
        case 'UGU':
        case 'UGC':
            return ProteinMapping.Cysteine
        case 'UGG':
            return ProteinMapping.Tryptophan
        case 'UAA':
        case 'UAG':
        case 'UGA':
            return ProteinMapping.STOP
        default:
            throw new Error('Invalid codon')
    }
}

function getCodons(sequence: string): string[] {
    const codonsList: string[] = []

    for (let i = 0; i < sequence.length; i += 3) {
        codonsList.push(sequence.slice(i, i + 3))
    }

    return codonsList
}

export function translate(sequence: string): Protein[] {
    const result: Protein[] = []
    const codonsList = getCodons(sequence)

    for (const codon of codonsList) {
        const protein = getProtein(codon)

        if (protein === ProteinMapping.STOP) {
            break;
        }

        result.push(protein)
    }

    return result
}

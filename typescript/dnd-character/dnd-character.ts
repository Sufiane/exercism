import { randomInt } from 'crypto';

export class DnDCharacter {
    public constitution: number
    public strength: number
    public dexterity: number
    public intelligence: number
    public wisdom: number
    public charisma: number
    public hitpoints: number

    constructor() {
        this.constitution = DnDCharacter.generateAbilityScore()
        this.strength = DnDCharacter.generateAbilityScore()
        this.dexterity = DnDCharacter.generateAbilityScore()
        this.intelligence = DnDCharacter.generateAbilityScore()
        this.wisdom = DnDCharacter.generateAbilityScore()
        this.charisma = DnDCharacter.generateAbilityScore()
        this.hitpoints = DnDCharacter.getModifierFor(this.constitution) + 10
    }

    public static generateAbilityScore(): number {
        return randomInt(3, 18)
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2)
    }
}

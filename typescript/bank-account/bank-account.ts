//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ValueError extends Error {

    constructor() {
        super('Bank account error')
    }
}

export class BankAccount {
    private balanceValue = 0
    private isOpen = false

    constructor() {
    }

    open(): void {
        if (this.isOpen) {
            throw new ValueError()
        }

        this.isOpen = true
    }

    close(): void {
        if (!this.isOpen) {
            throw new ValueError()
        }

        this.isOpen = false
        this.balanceValue = 0
    }

    deposit(value: number): void {
        if (!this.isOpen || value < 0) {
            throw new ValueError()
        }

        this.balanceValue += value
    }

    withdraw(value: number): void {
        if (!this.isOpen || value < 0 || value > this.balanceValue) {
            throw new ValueError()
        }

        this.balanceValue -= value
    }

    get balance(): number {
        if (!this.isOpen) {
            throw new ValueError()
        }

        return this.balanceValue
    }
}

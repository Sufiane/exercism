export class Squares {
    private readonly _squareOfSum: number
    private readonly _sumOfSquares: number

    constructor(count: number) {
        this._squareOfSum = this.setSquareOfSum(count)
        this._sumOfSquares = this.setSumOfSquares(count)
    }

    private setSumOfSquares(count: number): number {
        let acc = 0

        for (let i = 0; i <= count; i++) {
            acc += Math.pow(i, 2)
        }

        return acc
    }

    get sumOfSquares(): number {
        return this._sumOfSquares
    }

    setSquareOfSum(count: number) {
        let acc = 0

        for (let i = 0; i <= count; i++) {
            acc += i
        }

        return Math.pow(acc, 2)
    }

    get squareOfSum(): number {
        return this._squareOfSum
    }

    get difference(): number {
        return Math.abs(this._sumOfSquares - this._squareOfSum)
    }
}

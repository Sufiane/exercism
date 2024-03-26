export class Gigasecond {
    private readonly startingDate: Date
    private readonly ONE_GIGA_SECOND = 1_000_000_000

    constructor(date: Date) {
        this.startingDate = date
    }

    public date(): Date {
        const futureDate = new Date()
        futureDate.setTime(this.startingDate.getTime() + (this.ONE_GIGA_SECOND * 1000))

        return futureDate
    }
}

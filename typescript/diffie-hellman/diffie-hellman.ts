const isPrime = (n: number): boolean => {
    if (n <= 1) {
        return false;
    }

    if (n <= 3) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

export class DiffieHellman {
    private readonly p: number
    private readonly g: number

    constructor(p: number, g: number) {
        if (!isPrime(p) || !isPrime(g)) {
            throw new Error('Given numbers must be prime numbers.')
        }

        this.p = p
        this.g = g
    }

    public getPublicKey(privateKey: number): number {
        if (privateKey <= 1 || privateKey >= this.p) {
            throw new Error(`private key must be a number lower than ${this.p} and greater than 1.`)
        }

        return (Math.pow(this.g, privateKey) % this.p)
    }

    public getSecret(theirPublicKey: number, myPrivateKey: number): number {
        return Math.pow(theirPublicKey, myPrivateKey) % this.p
    }
}

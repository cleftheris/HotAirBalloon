
export interface IGame {
    start: number;
    target: number;
    amount?: number;
    reset(): void;
}

export class Game implements IGame {
    start: number;
    target: number;
    amount?: number;

    constructor() {
        this.reset();
    }

    reset() {
        const s = this.getRandomIntInclusive(0, 80);
        const t = this.getRandomIntInclusive(s + 1, 99);
        this.start = s;
        this.target = t;
        this.amount = undefined;
    }
    getRandomIntInclusive(min: number, max: number) {
        const minInt = Math.ceil(min);
        const maxInt = Math.floor(max);
        return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt; // The maximum is inclusive and the minimum is inclusive 
    }
}

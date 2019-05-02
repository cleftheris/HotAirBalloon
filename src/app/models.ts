
export interface IGame {
    start: number;
    target: number;
    amount?: number;
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

    up() {
        if (isNaN(this.amount)) {
            this.amount = 0;
        }
        const delta = this.target - this.start - this.amount;
        const tens = Math.floor(this.target / 10) - Math.floor((this.start + this.amount) / 10);
        if (tens > 0) {
            this.amount += 10;
        } else if (delta !== 0) {
            this.amount += (delta > 0 ? 1 : -1);
        }
    }

    down() {
        if (isNaN(this.amount)) {
            this.amount = 0;
        }
        const tens = Math.floor((this.start + this.amount) / 10) - Math.floor(this.start / 10);
        const delta = this.amount - (tens * 10);
        if (delta !== 0) {
            this.amount += (delta > 0 ? -1 : 1);
        } else if (tens > 0) {
            this.amount -= 10;
        }
    }

    getRandomIntInclusive(min: number, max: number) {
        const minInt = Math.ceil(min);
        const maxInt = Math.floor(max);
        return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt; // The maximum is inclusive and the minimum is inclusive
    }
}

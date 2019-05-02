
export interface IGame {
    start: number;
    target: number;
    amount?: number;
}

export class Game implements IGame {
    start: number;
    target: number;
    amount?: number;
    isSubtract: boolean;

    constructor() {
        this.isSubtract = false;
        this.reset();
    }

    get operator(): number {
        return this.isSubtract ? -1 : 1;
    }

    reset() {
        let s = 0;
        let t = 0;
        if (!this.isSubtract) {
            s = this.getRandomIntInclusive(0, 80);
            t = this.getRandomIntInclusive(s + 1, 99);
        } else {
            s = this.getRandomIntInclusive(21, 99);
            t = this.getRandomIntInclusive(0, s - 1);
        }
        this.start = s;
        this.target = t;
        this.amount = undefined;
    }

    up() {
        if (isNaN(this.amount)) {
            this.amount = 0;
        }
        const progress = this.start + this.operator * this.amount;
        const delta = this.operator * (this.target -  progress);
        const tens = this.operator * (Math.floor(this.target / 10) - Math.floor(progress / 10));
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
        const progress = this.start + this.operator * this.amount;
        const tens = this.operator * (Math.floor(progress / 10) - Math.floor(this.start / 10));
        const delta = this.amount - tens * 10;
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

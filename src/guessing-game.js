class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor((this.min + this.max) / 2);
    }

    lower() {
        this.max = ((Math.floor((this.min + this.max) / 2) + 1));
    }

    greater() {
        this.min = ((Math.floor((this.min + this.max) / 2)));
    }
}

module.exports = GuessingGame;

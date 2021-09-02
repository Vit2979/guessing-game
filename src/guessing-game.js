class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.minimum = min;
        this.maximum = max;
    }

    guess() {
        this.found = Math.round((this.maximum - this.minimum) / 2) + this.minimum
        return this.found;
    }

    lower() {
        this.maximum = this.found;
    }

    greater() {
        this.minimum = this.found;
    }
}

module.exports = GuessingGame;

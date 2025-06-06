class Room {
    #creditCardNumber;

    constructor(roomNumber, type) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.isAvailable = true;
        this.#creditCardNumber = null;
        this.bookedBy = null;
    }

    book(username) {
        this.isAvailable = false;
        this.bookedBy = username;
    }

    cancelBooking() {
        this.isAvailable = true;
        this.#creditCardNumber = null;
        this.bookedBy = null;
    }

    setCreditCardNumber(number) {
        if (typeof number === 'string' && number.length === 16 && /^\d+$/.test(number)) {
            this.#creditCardNumber = number;
            return true;
        }
        return false;
    }

    getMaskedCardNumber() {
        if (this.#creditCardNumber) {
            return `**** **** **** ${this.#creditCardNumber.slice(-4)}`;
        }
        return null;
    }

    toJSON() {
        return {
            roomNumber: this.roomNumber,
            type: this.type,
            isAvailable: this.isAvailable,
            creditCardNumber: this.#creditCardNumber,
            bookedBy: this.bookedBy
        };
    }
}

export default Room;

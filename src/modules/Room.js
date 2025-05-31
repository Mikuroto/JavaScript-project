class Room {
    constructor(roomNumber, type) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.isAvailable = true;
    }

    book() {
        this.isAvailable = false;
    }

    cancelBooking() {
        this.isAvailable = true;
    }
}

module.exports = Room;

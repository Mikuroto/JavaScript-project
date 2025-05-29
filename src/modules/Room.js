function Room(roomNumber, type) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.isAvailable = true;
}

Room.prototype.book = function() {
    this.isAvailable = false;
};

Room.prototype.cancelBooking = function() {
    this.isAvailable = true;
};

module.exports = Room;

function Hotel() {
    this.rooms = [];
}

Hotel.prototype.addRoom = function(room) {
    this.rooms.push(room);
};

Hotel.prototype.getAvailableRooms = function() {
    return this.rooms.filter(function(room) {
        return room.isAvailable;
    });
};

module.exports = Hotel;

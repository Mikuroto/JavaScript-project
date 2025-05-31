const Room = require('./Room');

class PremiumRoom extends Room {
    constructor(roomNumber, type, premiumService = "Free Spa") {
        super(roomNumber, type);
        this.premiumService = premiumService;
    }
}

module.exports = PremiumRoom;

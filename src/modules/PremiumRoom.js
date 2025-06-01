const Room = require('./Room');

class PremiumRoom extends Room {
    constructor(roomNumber, type, premiumService = "Free Spa") {
        super(roomNumber, type);
        this.premiumService = premiumService;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            premiumService: this.premiumService
        };
    }
}

module.exports = PremiumRoom;

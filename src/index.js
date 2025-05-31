const Hotel = require('./modules/Hotel');
const Room = require('./modules/Room');
const PremiumRoom = require('./modules/PremiumRoom');
const UI = require('./modules/UI');

document.addEventListener('DOMContentLoaded', function() {
    const hotel = new Hotel();
    const ui = new UI();

    const loadRooms = () => {
        const storedRooms = JSON.parse(localStorage.getItem('hotelRooms'));
        if (storedRooms && storedRooms.length > 0) {
            storedRooms.forEach(roomData => {
                let room;
                if (roomData.premiumService) {
                    const service = roomData.premiumService === 'Free Breakfast' ? 'Free Spa' : roomData.premiumService;
                    room = new PremiumRoom(roomData.roomNumber, roomData.type, service);
                } else {
                    room = new Room(roomData.roomNumber, roomData.type);
                }
                room.isAvailable = roomData.isAvailable;
                hotel.addRoom(room);
            });
        } else {
            hotel.addRoom(new Room('101', 'single'));
            hotel.addRoom(new Room('102', 'double'));
            hotel.addRoom(new PremiumRoom('103', 'suite', 'Free Spa'));
            hotel.addRoom(new Room('201', 'single'));
            saveRooms();
        }
    };

    const saveRooms = () => {
        localStorage.setItem('hotelRooms', JSON.stringify(hotel.rooms));
    };

    loadRooms();
    ui.init(hotel, saveRooms);
});

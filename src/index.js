const Hotel = require('./modules/Hotel');
const Room = require('./modules/Room');
const UI = require('./modules/UI');

document.addEventListener('DOMContentLoaded', function() {
    const hotel = new Hotel();

    hotel.addRoom(new Room('101', 'single'));
    hotel.addRoom(new Room('102', 'double'));
    hotel.addRoom(new Room('103', 'suite'));
    hotel.addRoom(new Room('201', 'single'));

    const ui = new UI();
    ui.init(hotel);
});

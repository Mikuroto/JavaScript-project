import Hotel from '../modules/Hotel.js';
import Room from '../modules/Room.js';

describe('Hotel class', () => {
  test('getAvailableRooms returns only available rooms', () => {
    const hotel = new Hotel();
    const room = new Room(101, 'standard');
    hotel.addRoom(room);
    room.book();
    const available = hotel.getAvailableRooms();
    expect(available.length).toBe(0);
  });
});

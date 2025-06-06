import Room from '../modules/Room.js';

describe('Room class', () => {
  test('booking a room sets isAvailable to false', () => {
    const room = new Room(101, 'standard');
    room.book();
    expect(room.isAvailable).toBe(false);
  });

  test('cancelBooking sets isAvailable to true', () => {
    const room = new Room(102, 'standard');
    room.book();
    room.cancelBooking();
    expect(room.isAvailable).toBe(true);
  });
});

import Hotel from '../modules/Hotel.js';
import Room from '../modules/Room.js';

describe('LocalStorage integration', () => {
  beforeEach(() => {
    global.localStorage = {
      data: {},
      getItem(key) {
        return this.data[key] || null;
      },
      setItem(key, value) {
        this.data[key] = value;
      },
      clear() {
        this.data = {};
      }
    };
  });

  test('saveToLocalStorage and loadFromLocalStorage persist rooms correctly', () => {
    const hotel1 = new Hotel();
    const room = new Room(301, 'suite');
    room.book('testUser');
    hotel1.addRoom(room);

    hotel1.saveToLocalStorage('testKey');

    const hotel2 = new Hotel();
    hotel2.loadFromLocalStorage('testKey');

    expect(hotel2.rooms).toHaveLength(1);
    const loaded = hotel2.rooms[0];
    expect(loaded.roomNumber).toBe(301);
    expect(loaded.type).toBe('suite');
    expect(loaded.isAvailable).toBe(false);
    expect(loaded.bookedBy).toBe('testUser');
  });
});

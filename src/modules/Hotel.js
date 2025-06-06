class Hotel {
    constructor() {
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    getAvailableRooms() {
        return this.rooms.filter(room => room.isAvailable);
    }

    saveToLocalStorage(key = 'hotelRooms') {
        const data = this.rooms.map(room =>
            typeof room.toJSON === 'function' ? room.toJSON() : room
        );
        localStorage.setItem(key, JSON.stringify(data));
    }

    loadFromLocalStorage(key = 'hotelRooms') {
        const stored = localStorage.getItem(key);
        if (stored) {
            try {
                const data = JSON.parse(stored);
                this.rooms = data;
            } catch {
                this.rooms = [];
            }
        }
    }
}

export default Hotel;

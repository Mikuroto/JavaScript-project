class UI {
    constructor() {
        this.saveRoomsCallback = null;
    }

    _configureButton(button, isAvailable) {
        button.textContent = isAvailable ? 'Book' : 'Cancel';
        button.dataset.action = isAvailable ? 'book' : 'cancel';
        button.classList.toggle('cancel', !isAvailable);
    }

    _updateStatusSpan(statusSpan, isAvailable) {
        if (statusSpan) {
            statusSpan.textContent = isAvailable ? 'Available' : 'Booked';
            statusSpan.className = isAvailable ? 'status-available' : 'status-booked';
        }
    }

    displayAvailableRooms(rooms) {
        const roomsContainer = document.getElementById('rooms-container');
        roomsContainer.innerHTML = '';
        rooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.classList.add('room-card');
            if (room.premiumService) {
                roomCard.classList.add('premium');
            }

            const roomInfoDiv = document.createElement('div');
            roomInfoDiv.classList.add('room-info');

            const typeSpan = document.createElement('span');
            typeSpan.classList.add('room-type');
            if (room.premiumService) {
                typeSpan.textContent = 'Room ' + room.roomNumber + ' (Deluxe ' + room.type + ')';
            } else {
                typeSpan.textContent = 'Room ' + room.roomNumber + ' (' + room.type + ')';
            }
            roomInfoDiv.appendChild(typeSpan);

            if (room.premiumService) {
                const premiumSpan = document.createElement('span');
                premiumSpan.classList.add('premium-service');
                premiumSpan.textContent = room.premiumService;
                roomInfoDiv.appendChild(premiumSpan);
            }

            const statusSpan = document.createElement('span');
            this._updateStatusSpan(statusSpan, room.isAvailable);
            roomInfoDiv.appendChild(statusSpan);
            
            roomCard.appendChild(roomInfoDiv);

            const button = document.createElement('button');
            button.dataset.roomNumber = room.roomNumber;
            this._configureButton(button, room.isAvailable); 

            roomCard.appendChild(button);
            roomsContainer.appendChild(roomCard);
        });
    }

    updateRoomStatus(roomNumber, isAvailable) {
        const roomsContainer = document.getElementById('rooms-container');
        const roomCard = Array.from(roomsContainer.children).find(card => {
            return card.querySelector('button').dataset.roomNumber === roomNumber;
        });

        if (roomCard) {
            const statusSpan = roomCard.querySelector('.room-info span[class^="status-"]'); 
            this._updateStatusSpan(statusSpan, isAvailable);
            
            const button = roomCard.querySelector('button');
            this._configureButton(button, isAvailable);
        }
    }

    init(hotel, saveRoomsCallback) {
        this.saveRoomsCallback = saveRoomsCallback; 
        this.displayAvailableRooms(hotel.rooms);

        const roomsContainer = document.getElementById('rooms-container');
        roomsContainer.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON') {
                const roomNumberStr = event.target.dataset.roomNumber;
                const action = event.target.dataset.action;
                const room = hotel.rooms.find(r => r.roomNumber === roomNumberStr);

                if (room) {
                    if (action === 'book' && room.isAvailable) {
                        room.book();
                        this.updateRoomStatus(roomNumberStr, false);
                    } else if (action === 'cancel' && !room.isAvailable) {
                        room.cancelBooking();
                        this.updateRoomStatus(roomNumberStr, true);
                    }
                    if (this.saveRoomsCallback) {
                        this.saveRoomsCallback(); 
                    }
                }
            }
        });
    }
}

module.exports = UI;

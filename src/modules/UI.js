function UI() {}

UI.prototype._configureButton = function(button, isAvailable) {
    button.textContent = isAvailable ? 'Book' : 'Cancel';
    button.dataset.action = isAvailable ? 'book' : 'cancel';
    button.classList.toggle('cancel', !isAvailable);
};

UI.prototype._updateStatusSpan = function(statusSpan, isAvailable) {
    if (statusSpan) {
        statusSpan.textContent = isAvailable ? 'Available' : 'Booked';
        statusSpan.className = isAvailable ? 'status-available' : 'status-booked';
    }
};

UI.prototype.displayAvailableRooms = function(rooms) {
    const roomsList = document.getElementById('rooms-list');
    roomsList.innerHTML = '';
    rooms.forEach(function(room) {
        const roomElement = document.createElement('li');
        
        const textGroup = document.createElement('div');

        const roomInfoText = document.createElement('span');
        roomInfoText.textContent = 'Room ' + room.roomNumber + ' (' + room.type + ') - ';
        textGroup.appendChild(roomInfoText);

        const statusSpan = document.createElement('span');
        this._updateStatusSpan(statusSpan, room.isAvailable);
        textGroup.appendChild(statusSpan);
        
        roomElement.appendChild(textGroup);

        const button = document.createElement('button');
        button.dataset.roomNumber = room.roomNumber;
        this._configureButton(button, room.isAvailable); 

        roomElement.appendChild(button);
        roomsList.appendChild(roomElement);
    }.bind(this));
};

UI.prototype.updateRoomStatus = function(roomNumber, isAvailable) {
    const roomsList = document.getElementById('rooms-list');
    const roomElement = Array.from(roomsList.children).find(function(child) {
        return child.querySelector('button').dataset.roomNumber === roomNumber;
    });

    if (roomElement) {
        const statusSpan = roomElement.querySelector('span[class^="status-"]'); 
        this._updateStatusSpan(statusSpan, isAvailable);
        
        const button = roomElement.querySelector('button');
        this._configureButton(button, isAvailable);
    }
};

UI.prototype.init = function(hotel) {
    this.displayAvailableRooms(hotel.rooms); 

    const roomsList = document.getElementById('rooms-list');
    roomsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const roomNumberStr = event.target.dataset.roomNumber;
            const action = event.target.dataset.action;
            const room = hotel.rooms.find(function(r) { return r.roomNumber === roomNumberStr; });

            if (room) {
                if (action === 'book' && room.isAvailable) {
                    room.book();
                    this.updateRoomStatus(roomNumberStr, false);
                } else if (action === 'cancel' && !room.isAvailable) {
                    room.cancelBooking();
                    this.updateRoomStatus(roomNumberStr, true);
                }
            }
        }
    }.bind(this));
};

module.exports = UI;

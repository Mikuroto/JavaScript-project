import HotelAPI from './HotelAPI.js';

class UI {
    constructor() {
        this.saveRoomsCallback = null;
        this.userManager = null;
    }

    _configureButton(button, isAvailable) {
        button.textContent = isAvailable ? 'Book' : 'Cancel';
        button.dataset.action = isAvailable ? 'book' : 'cancel';
        button.classList.toggle('cancel', !isAvailable);
        button.classList.remove('book-button', 'cancel-button');
        button.classList.add(isAvailable ? 'book-button' : 'cancel-button');
    }

    _updateStatusSpan(statusSpan, isAvailable, bookedBy = null) {
        if (statusSpan) {
            statusSpan.className = isAvailable ? 'status-available' : 'status-booked';
            statusSpan.textContent = isAvailable ? 'Available' : (bookedBy ? `Booked by ${bookedBy}` : 'Booked');
        }
    }

    _createRoomCardElement(room, currentUser) {
        const roomCard = document.createElement('div');
        roomCard.classList.add('room-card');
        if (room.premiumService) {
            roomCard.classList.add('premium');
        }
        if (!room.isAvailable) {
            roomCard.classList.add('booked');
        }

        const roomInfoDiv = document.createElement('div');
        roomInfoDiv.classList.add('room-info');

        const typeSpan = document.createElement('span');
        typeSpan.classList.add('room-type');
        let roomDisplayName = `Room ${room.roomNumber} (${room.type})`;
        if (room.premiumService) {
            roomDisplayName = `Room ${room.roomNumber} (Deluxe ${room.type})`;
        }
        typeSpan.textContent = roomDisplayName;
        roomInfoDiv.appendChild(typeSpan);

        if (room.premiumService) {
            const premiumSpan = document.createElement('span');
            premiumSpan.classList.add('premium-service');
            premiumSpan.textContent = room.premiumService;
            roomInfoDiv.appendChild(premiumSpan);
        }

        const statusSpan = document.createElement('span');
        this._updateStatusSpan(statusSpan, room.isAvailable, room.bookedBy);
        roomInfoDiv.appendChild(statusSpan);

        if (!room.isAvailable && room.getMaskedCardNumber()) {
            const cardInfoSpan = document.createElement('span');
            cardInfoSpan.classList.add('masked-card-info');
            cardInfoSpan.textContent = 'Card: ' + room.getMaskedCardNumber();
            roomInfoDiv.appendChild(cardInfoSpan);
        }
        
        roomCard.appendChild(roomInfoDiv);

        const bookingButton = document.createElement('button');
        bookingButton.dataset.roomNumber = room.roomNumber;
        this._configureButton(bookingButton, room.isAvailable); 
        if (!currentUser) {
            bookingButton.disabled = true;
        } else if (!room.isAvailable && room.bookedBy !== currentUser.username) {
            bookingButton.disabled = true;
        }
        roomCard.appendChild(bookingButton);

        const reviewsButton = document.createElement('button');
        reviewsButton.textContent = 'Load Reviews';
        reviewsButton.dataset.roomNumber = room.roomNumber;
        reviewsButton.classList.add('reviews-button');
        roomCard.appendChild(reviewsButton);

        const reviewsSection = document.createElement('div');
        reviewsSection.classList.add('reviews-section');
        reviewsSection.style.display = 'none';
        roomCard.appendChild(reviewsSection);

        return roomCard;
    }

    renderRooms(rooms, currentUser) { 
        const roomsContainer = document.getElementById('rooms-container');
        roomsContainer.innerHTML = '';
        rooms.forEach(room => {
            const roomCardElement = this._createRoomCardElement(room, currentUser);
            roomsContainer.appendChild(roomCardElement);
        });
    }

    updateRoomStatus(roomNumber, isAvailable, maskedCardNumber = null, bookedBy = null) {
        const roomCard = document.querySelector(`.room-card button[data-room-number="${roomNumber}"]`)?.closest('.room-card');

        if (roomCard) {
            roomCard.classList.toggle('booked', !isAvailable);
            const statusSpan = roomCard.querySelector('.room-info span[class^="status-"]'); 
            this._updateStatusSpan(statusSpan, isAvailable, bookedBy);
            
            const bookingButton = roomCard.querySelector('button[data-action]');
            this._configureButton(bookingButton, isAvailable);

            let cardInfoSpan = roomCard.querySelector('.masked-card-info');
            if (isAvailable || !maskedCardNumber) {
                if (cardInfoSpan) {
                    cardInfoSpan.remove();
                }
            } else {
                if (!cardInfoSpan) {
                    cardInfoSpan = document.createElement('span');
                    cardInfoSpan.classList.add('masked-card-info');
                    const roomInfoDiv = roomCard.querySelector('.room-info');
                    if (roomInfoDiv) {
                         roomInfoDiv.appendChild(cardInfoSpan);
                    }
                }
                cardInfoSpan.textContent = 'Card: ' + maskedCardNumber;
            }
        }
    }

    async _handleLoadReviews(roomNumber, reviewsButton) {
         const roomCard = reviewsButton.closest('.room-card');
         const reviewsSection = roomCard.querySelector('.reviews-section');

         if (reviewsSection.style.display === 'block' && reviewsSection.innerHTML !== '') {
             reviewsSection.style.display = 'none';
             reviewsSection.innerHTML = '';
             reviewsButton.textContent = 'Load Reviews';
             return;
         }

         reviewsButton.textContent = 'Loading...';
         reviewsButton.disabled = true;

         try {
            const reviews = await HotelAPI.fetchReviews();
            reviewsSection.innerHTML = '';
            const roomReviews = reviews.filter(r => r.roomNumber == roomNumber);
            const randomReviews = roomReviews.sort(() => 0.5 - Math.random()).slice(0, 3);

            if (randomReviews.length > 0) {
                randomReviews.forEach(review => {
                    const reviewElement = document.createElement('p');
                    reviewElement.textContent = `${review.email}: ${review.body}`;
                    reviewsSection.appendChild(reviewElement);
                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.addEventListener('click', () => editReview(review.id, parseInt(roomNumber, 10)));
                    reviewsSection.appendChild(editBtn);
                });
            } else {
                reviewsSection.textContent = 'No reviews for this room.';
            }
         } catch (error) {
             console.error("Error displaying reviews:", error);
             reviewsSection.textContent = 'Failed to load reviews.';
         }
         reviewsSection.style.display = 'block';
         reviewsButton.textContent = 'Hide Reviews';
         reviewsButton.disabled = false;
     }

    init(hotel, saveRoomsCallback, userManager) {
        this.saveRoomsCallback = saveRoomsCallback;
        this.userManager = userManager;
        this.renderRooms(hotel.rooms, this.userManager.currentUser);

        const roomsContainer = document.getElementById('rooms-container');
        roomsContainer.addEventListener('click', async event => {
            const target = event.target;
            if (target.tagName === 'BUTTON') {
                const roomNumberStr = target.dataset.roomNumber;
                const action = target.dataset.action;
                const room = hotel.rooms.find(r => r.roomNumber === roomNumberStr);

                if (target.classList.contains('reviews-button')) {
                    await this._handleLoadReviews(roomNumberStr, target);
                    return;
                }

                if (room) {
                    if (action === 'book' && room.isAvailable) {
                        if (!this.userManager.currentUser) {
                            alert('Please log in or register to book a room.');
                            return;
                        }
                        const cardNumber = prompt('Please enter your 16-digit credit card number:');
                        if (cardNumber && room.setCreditCardNumber(cardNumber)) {
                            room.book(this.userManager.currentUser.username);
                            this.updateRoomStatus(roomNumberStr, false, room.getMaskedCardNumber(), room.bookedBy);
                            alert(`Room booked by ${room.bookedBy}! Card: ${room.getMaskedCardNumber()}`);
                        } else {
                            alert('Invalid credit card number. Booking failed.');
                            return;
                        }
                    } else if (action === 'cancel' && !room.isAvailable) {
                        if (!this.userManager.currentUser || room.bookedBy !== this.userManager.currentUser.username) {
                            alert('You can only cancel your own bookings.');
                            return;
                        }
                        room.cancelBooking();
                        this.updateRoomStatus(roomNumberStr, true, null, null);
                        alert('Booking cancelled for room ' + roomNumberStr);
                    }
                    if (this.saveRoomsCallback) {
                        this.saveRoomsCallback(); 
                    }
                }
            }
        });
    }
}

export default UI;

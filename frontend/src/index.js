import './style.scss';
import Hotel from './modules/Hotel.js';
import Room from './modules/Room.js';
import PremiumRoom from './modules/PremiumRoom.js';
import UI from './services/UI.js';
import UserManager from './services/UserManager.js';

document.addEventListener('DOMContentLoaded', async function() {
     const hotel = new Hotel();
     const ui = new UI();
     const userManager = new UserManager();

    // Restore session (only username stored)
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            userManager.currentUser = { username: payload.username };
        } catch {
            sessionStorage.removeItem('token');
        }
    }

    const updateAuthUI = () => {
        const authStatus = document.getElementById('authStatus');
        const logoutButton = document.getElementById('logoutButton');
        const loginButton = document.getElementById('loginButton');
        const registerButton = document.getElementById('registerButton');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        if (userManager.currentUser) {
            authStatus.textContent = `Logged in as: ${userManager.currentUser.username}`;
            authStatus.style.color = 'green';
            logoutButton.style.display = 'inline';
            loginButton.style.display = 'none';
            registerButton.style.display = 'none';
            usernameInput.style.display = 'none';
            passwordInput.style.display = 'none';
        } else {
            authStatus.textContent = 'Not logged in.';
            authStatus.style.color = 'black';
            logoutButton.style.display = 'none';
            loginButton.style.display = 'inline';
            registerButton.style.display = 'inline';
            usernameInput.style.display = 'inline';
            passwordInput.style.display = 'inline';
            usernameInput.value = '';
            passwordInput.value = '';
        }
    };

    const loadRooms = () => {
        const storedRooms = JSON.parse(localStorage.getItem('hotelRooms'));
        if (storedRooms && storedRooms.length > 0) {
            storedRooms.forEach(roomData => {
                let room;
                if (roomData.premiumService) {
                    room = new PremiumRoom(roomData.roomNumber, roomData.type, roomData.premiumService);
                } else {
                    room = new Room(roomData.roomNumber, roomData.type);
                }
                room.isAvailable = roomData.isAvailable;
                if (roomData.creditCardNumber) {
                    room.setCreditCardNumber(roomData.creditCardNumber);
                }
                room.bookedBy = roomData.bookedBy || null;
                hotel.addRoom(room);
            });
        } else {
            hotel.addRoom(new Room('101', 'single'));
            hotel.addRoom(new Room('102', 'double'));
            hotel.addRoom(new PremiumRoom('103', 'suite'));
            hotel.addRoom(new Room('201', 'single'));
            saveRooms();
        }
    };

    const saveRooms = () => {
        localStorage.setItem('hotelRooms', JSON.stringify(hotel.rooms.map(room => room.toJSON())));
    };

    const handleRegister = async () => {
         const username = document.getElementById('username').value;
         const password = document.getElementById('password').value;
         try {
            await userManager.register(username, password);
             updateAuthUI();
             await loadReviewsWithRooms();
         } catch (error) {
             alert(error.message);
         }
     };

    const handleLogin = async () => {
         const username = document.getElementById('username').value;
         const password = document.getElementById('password').value;
         try {
            await userManager.login(username, password);
             updateAuthUI();
             await loadReviewsWithRooms();
         } catch (error) {
             alert(error.message);
         }
     };

    const handleLogout = async () => {
         userManager.logout();
         sessionStorage.removeItem('token');
         updateAuthUI();
         await loadReviewsWithRooms();
     };

    document.getElementById('registerButton').addEventListener('click', handleRegister);
    document.getElementById('loginButton').addEventListener('click', handleLogin);
    document.getElementById('logoutButton').addEventListener('click', handleLogout);

    globalThis.addReview = async function () {
        const email = document.getElementById('reviewEmail').value.trim();
        const roomNumberStr = document.getElementById('reviewRoom').value.trim();
        const body = document.getElementById('reviewBody').value.trim();
        const roomNumber = parseInt(roomNumberStr, 10);
        if (!email || !body || isNaN(roomNumber)) {
            alert('Invalid input');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ roomNumber, email, body })
            });
            if (!response.ok) {
                alert('Failed to add review.');
                return;
            }
            alert('Review added!');
            const loadBtn = document.querySelector(
                `button.reviews-button[data-room-number="${roomNumber}"]`
            );
            if (loadBtn) {
                await ui._handleLoadReviews(String(roomNumber), loadBtn);
            }
        } catch (error) {
            alert('Error adding review.');
        }
    };

    // Load all reviews and render rooms with review counts
    const loadReviewsWithRooms = async () => {
        try {
            const res = await fetch('http://localhost:3000/reviews');
            const reviews = res.ok ? await res.json() : [];
            ui.renderRooms(hotel.rooms, userManager.currentUser, reviews);
        } catch (err) {
            console.error('Error loading reviews for rooms:', err);
        }
    };

    globalThis.editReview = async function(id) {
        const email = prompt('Enter new email:').trim();
        const roomNumberStr = prompt('Enter new room number:').trim();
        const body = prompt('Enter new review text:').trim();
        const roomNumber = parseInt(roomNumberStr, 10);
        if (!email || !body || isNaN(roomNumber)) {
            alert('Invalid input');
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/reviews/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ roomNumber, email, body })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                console.error('Update failed:', response.status, errorData);
                alert('Failed to update review: ' + (errorData?.message || response.status));
                return;
            }
            alert('Review updated!');
            await loadReviewsWithRooms();
        } catch (error) {
            console.error('Error updating review:', error);
            alert('Error updating review.');
        }
    };

    globalThis.deleteReview = async function(id, roomNumber) {
        const confirmed = confirm('Are you sure?');
        if (!confirmed) return;
        try {
            const response = await fetch(`http://localhost:3000/reviews/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            });
             if (!response.ok) {
                 alert('Failed to delete review.');
                 return;
             }
             alert('Review deleted!');
            await loadReviewsWithRooms();
         } catch (error) {
             alert('Error deleting review.');
         }
    };

    loadRooms();
    updateAuthUI(); 
    ui.init(hotel, saveRooms, userManager);
    await loadReviewsWithRooms();
});

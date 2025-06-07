import './style.scss';
import Hotel from './modules/Hotel.js';
import Room from './modules/Room.js';
import PremiumRoom from './modules/PremiumRoom.js';
import UI from './services/UI.js';
import UserManager from './services/UserManager.js';

document.addEventListener('DOMContentLoaded', function() {
    const hotel = new Hotel();
    const ui = new UI();
    const userManager = new UserManager();

    const savedUser = sessionStorage.getItem('loggedInUser');
    if (savedUser) {
        try {
            const { username, password } = JSON.parse(savedUser);
            userManager.login(username, password);
        } catch {
            sessionStorage.removeItem('loggedInUser');
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

    const handleRegister = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
            userManager.register(username, password);
            sessionStorage.setItem('loggedInUser', JSON.stringify(userManager.currentUser));
            updateAuthUI();
            ui.renderRooms(hotel.rooms, userManager.currentUser);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogin = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
            userManager.login(username, password);
            sessionStorage.setItem('loggedInUser', JSON.stringify(userManager.currentUser));
            updateAuthUI();
            ui.renderRooms(hotel.rooms, userManager.currentUser);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogout = () => {
        userManager.logout();
        sessionStorage.removeItem('loggedInUser');
        updateAuthUI();
        ui.renderRooms(hotel.rooms, userManager.currentUser);
    };

    document.getElementById('registerButton').addEventListener('click', handleRegister);
    document.getElementById('loginButton').addEventListener('click', handleLogin);
    document.getElementById('logoutButton').addEventListener('click', handleLogout);

    globalThis.addReview = async function () {
        const email = document.getElementById("reviewEmail").value.trim();
        const roomNumber = parseInt(document.getElementById("reviewRoom").value.trim());
        const body = document.getElementById("reviewBody").value.trim();
        const response = await fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomNumber, email, body })
        });
        if (response.ok) {
            alert('Review added!');
            const loadBtn = document.querySelector(`button.reviews-button[data-room-number="${roomNumber}"]`);
            if (loadBtn) await new UI()._handleLoadReviews(roomNumber, loadBtn);
        } else {
            alert('Failed to add review.');
        }
    };

    loadRooms();
    updateAuthUI(); 
    ui.init(hotel, saveRooms, userManager);
});

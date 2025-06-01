import './style.scss';
const Hotel = require('./modules/Hotel');
const Room = require('./modules/Room');
const PremiumRoom = require('./modules/PremiumRoom');
const UI = require('./modules/UI');
const UserManager = require('./modules/UserManager');

document.addEventListener('DOMContentLoaded', function() {
    const hotel = new Hotel();
    const ui = new UI();
    const userManager = new UserManager();

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
            updateAuthUI();
            ui.renderRooms(hotel.rooms, userManager.currentUser);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogout = () => {
        userManager.logout();
        updateAuthUI();
        ui.renderRooms(hotel.rooms, userManager.currentUser);
    };

    document.getElementById('registerButton').addEventListener('click', handleRegister);
    document.getElementById('loginButton').addEventListener('click', handleLogin);
    document.getElementById('logoutButton').addEventListener('click', handleLogout);

    loadRooms();
    updateAuthUI(); 
    ui.init(hotel, saveRooms, userManager);
});

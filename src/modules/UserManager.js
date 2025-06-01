const User = require('./User');

class UserManager {
    constructor() {
        this.users = this.loadUsers();
        this.currentUser = null;
    }

    register(username, password) {
        if (this.users.find(user => user.username === username)) {
            throw new Error('User already exists.');
        }
        const user = new User(username, password);
        this.users.push(user);
        this.saveUsers();
        this.currentUser = user;
        return user;
    }

    login(username, password) {
        const user = this.users.find(user => user.username === username);
        if (user && user.validatePassword(password)) {
            this.currentUser = user;
            return user;
        }
        throw new Error('Invalid username or password.');
    }

    logout() {
        this.currentUser = null;
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users.map(user => user.toJSON())));
    }

    loadUsers() {
        const usersData = localStorage.getItem('users');
        if (usersData) {
            return JSON.parse(usersData).map(userData => {
                const user = new User(userData.username, '123456'); 
                user.setPassword(userData.password); 
                return user;
            });
        }
        return [];
    }
}

module.exports = UserManager;
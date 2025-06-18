class UserManager {
    constructor() {
        this.currentUser = null;
    }

    async register(username, password) {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Signup failed');
        this.currentUser = { username: data.username };
        return this.currentUser;
    }

    async login(username, password) {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed');
        this.currentUser = { username: data.username };
        return this.currentUser;
    }

    logout() {
        this.currentUser = null;
    }
}

export default UserManager;
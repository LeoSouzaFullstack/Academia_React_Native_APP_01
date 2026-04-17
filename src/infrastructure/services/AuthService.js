class AuthService {
    constructor() {
        this.user = null;
        this.token = null;
    }

    async login(email, password) {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            if (data.token) {
                this.token = data.token;
                this.user = data.user;
                localStorage.setItem('token', data.token);
                return data;
            }
        } catch (error) {
            throw new Error('Login failed: ' + error.message);
        }
    }

    async logout() {
        this.user = null;
        this.token = null;
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        return !!this.token || !!localStorage.getItem('token');
    }

    getUser() {
        return this.user;
    }
}

export default new AuthService();
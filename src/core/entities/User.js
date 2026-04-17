class User {
    constructor(id, name, email, password, phone, joinDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.joinDate = joinDate;
        this.isActive = true;
    }

    updateProfile(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    deactivate() {
        this.isActive = false;
    }

    activate() {
        this.isActive = true;
    }

    getInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            joinDate: this.joinDate,
            isActive: this.isActive
        };
    }
}

export default User;
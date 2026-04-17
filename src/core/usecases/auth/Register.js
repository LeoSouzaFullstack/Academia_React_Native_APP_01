class Register {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(email, password, name) {
        // Validate inputs
        if (!email || !password || !name) {
            throw new Error('Email, password, and name are required');
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters');
        }

        // Check if user already exists
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('User already registered');
        }

        // Create new user
        const user = {
            id: Date.now().toString(),
            email,
            password, // In production, hash the password
            name,
            createdAt: new Date(),
        };

        // Save user
        const savedUser = await this.userRepository.create(user);

        return {
            success: true,
            userId: savedUser.id,
            message: 'User registered successfully',
        };
    }
}

export default Register;
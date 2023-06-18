export const validateCredentials = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address!');
    }
    if (!email || !password) {
        throw new Error('Please fill in all fields!');
    }
    if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long!');
    }
};
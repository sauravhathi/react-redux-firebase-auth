export const loadUserFromLocalStorage = () => {
    try {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
    } catch (error) {
        console.error(error);
    }
    return null;
};

export const saveUserToLocalStorage = (user) => {
    try {
        localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.error(error);
    }
};

export const removeUserFromLocalStorage = () => {
    try {
        localStorage.removeItem('user');
    } catch (error) {
        console.error(error);
    }
};
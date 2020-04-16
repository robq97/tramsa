export const URL = 'http://apitramsa.azurewebsites.net/';

// Gets user data from session
export const getUser = () => {
    const user = sessionStorage.getItem('user');
    if (user) return JSON.parse(user);
    else return null;
}

// Gets the token
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// Removes token and user from session
export const logOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// Gets user info
export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('persist:store');
}

export default logout;

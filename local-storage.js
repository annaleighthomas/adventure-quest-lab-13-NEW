export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('user', stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem('user');
    const user = JSON.parse(stringyUser);
    return user;
}
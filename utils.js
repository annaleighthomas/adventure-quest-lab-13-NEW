export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}


export function isDead(user) {
    return user.hp <= 0;
}
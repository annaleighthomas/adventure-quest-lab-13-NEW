import { getUser } from './local-storage.js';
import { isDead } from './utils.js';

export function loadProfile() {
    
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatars');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    
    const user = getUser();

    
    if (!user) {
        
        window.location = './';
    }

    
    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.race + '.png';
    gold.textContent = user.gold;

    
    if (isDead(user)) {
        hp.textContent = 'YOU DIED!!!';
    }
    else {
        hp.textContent = user.hp;
    }

}
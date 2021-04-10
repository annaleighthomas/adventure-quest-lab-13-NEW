import { setUser } from './local-storage.js';
import { makeUser } from './make-user.js';


const button = document.getElementById('user-sign-up');


button.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(button);
    const user = makeUser(formData);
    
    setUser(user);
    window.location = 'map';
});



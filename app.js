const button = document.getElementById('user-sign-up');

button.addEventListener('submit', (event) => {
    event.preventDefault();

    window.location = 'map';
});
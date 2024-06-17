let msg = document.getElementById("msg");
const scriptURL = 'https://script.google.com/macros/s/AKfycbx98TgDp7bpdLhJqE3FpFpqI12jobbd6-fKhMJwcA5dUhXqxrwr2jnPMwgCAW0OuLc2/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = `Thank You For Subscribing!`;
            setTimeout(function(){
                msg.innerHTML = ``;
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('message');

    
    if (password !== confirmPassword) {
        message.style.color = 'red';
        message.innerText = 'Passwords do not match!';
    } else {
        message.style.color = 'green';
        message.innerText = 'Sign Up Successful!';
    
    }
});

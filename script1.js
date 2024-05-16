// Login popup
const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closeLoginButton = document.querySelector('.close-login');
const loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', function() {
    openPopup(loginPopup);
});

closeLoginButton.addEventListener('click', function() {
    closePopup(loginPopup);
});

loginForm.addEventListener('submit', login);

// Sign up popup
const signUpButton = document.getElementById('signUpButton');
const signUpPopup = document.getElementById('signUpPopup');
const closeSignUpButton = document.querySelector('.close-signup');
const signUpForm = document.getElementById('sign-up-form');

signUpButton.addEventListener('click', function() {
    openPopup(signUpPopup);
});

closeSignUpButton.addEventListener('click', function() {
    closePopup(signUpPopup);
});

signUpForm.addEventListener('submit', signUp);

// Dummy users data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
];

// Function to open a popup
function openPopup(popup) {
    popup.style.display = 'block';
}

// Function to close a popup
function closePopup(popup) {
    popup.style.display = 'none';
}

// Function to handle login
function login(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const userFound = users.some(user => user.username === username && user.password === password);

    if (userFound) {
        alert('Login successful!');
        closePopup(loginPopup);
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Function to handle sign up
function signUp(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (!username.trim() || !password.trim()) {
        alert('Please fill out all fields.');
        return;
    }

    if (users.some(user => user.username === username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    users.push({ username, password });
    alert('Sign up successful! You can now log in.');
    closePopup(signUpPopup);
}
<script>

let users = [
    { username: 'ayoub', email: 'youyhia248@gmail.com', password: 'bobo' },
    { username: 'hicham', email: 'hicham@gmail.com', password: 'rita' }
];


function signUp(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    if (users.some(user => user.username === username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    if (users.some(user => user.email === email)) {
        alert('Email already exists. Please use a different one.');
        return;
    }

    
    users.push({ username, email, password });
    alert('Sign up successful! You can now log in.');
    
    window.location.href = 'login 2.html';
}


function login(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
       
        window.location.href = 'home3.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}


document.getElementById('signup-form').addEventListener('submit', signUp);
document.getElementById('login-form').addEventListener('submit', login);

</script>

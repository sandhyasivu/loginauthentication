// Initialize user data storage
let users = [];

// Register function
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    
    if (username && password) {
        users.push({ username: username, password: password });
        alert("Registration successful! Please log in.");
        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    } else {
        alert("Please fill in both fields.");
    }
}

// Login function
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        alert("Login successful!");
        document.getElementById("login-form").style.display = "none";
        document.getElementById("secured-page").style.display = "block";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Logout function
function logout() {
    document.getElementById("secured-page").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
}

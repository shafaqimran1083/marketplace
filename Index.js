const signupButton = document.getElementById('getStartedButton'); 
const loginButton = document.getElementById('loginButton'); 

signupButton.addEventListener('click', function() {
    window.location.href = 'cart.html';
});

loginButton.addEventListener('click', function() {
    window.location.href = 'signin.html';
});

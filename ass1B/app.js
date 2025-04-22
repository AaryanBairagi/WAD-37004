
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        name: name,
        email: email,
        password: password
    };


    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

 
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/register", true); 
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('User registered successfully');
        }
    };
    xhr.send(JSON.stringify(user));

    document.getElementById('registrationForm').reset();
});
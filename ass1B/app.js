document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;

    const user = {
        name: name,
        email: email,
        password: password,
        city: city
    };

    // Save to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // AJAX POST using XMLHttpRequest (simulate)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true); // dummy POST endpoint
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            alert("User registered successfully via AJAX!");
            document.getElementById('registrationForm').reset();
        }
    };
    xhr.send(JSON.stringify(user));
});


document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('userList');
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.city}</td> <!-- Adding City data -->
        `;
        userList.appendChild(row);
    });
});
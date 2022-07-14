function fetchUsers() {
    const tbody = document.querySelector('tbody');
    const divJSON = document.querySelector('#json');
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(usersResponse => usersResponse.json())
        .then(users => {
            divJSON.innerHTML = JSON.stringify(users);             
            users.forEach(user => {
                const trUser = createTableRow(user);
                tbody.appendChild(trUser);
            });
        })
};

function createTableRow(user) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<th scope="row">${user.id}</th><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td><td>${user.address.street}</td><td>${user.company.name}</td>`;
    return tr;
}

fetchUsers();
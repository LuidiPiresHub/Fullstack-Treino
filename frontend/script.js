const list = document.querySelector('.list');

const getUsers = async () => {
  const response = await fetch('http://localhost:3001/users');
  const data = await response.json();
  console.log(data);
  data.forEach((person) => {
    const li = document.createElement('li');
    li.innerText = person;
    list.appendChild(li);
  })
}

getUsers();
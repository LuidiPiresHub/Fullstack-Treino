import { useEffect, useState } from 'react';

export default function FetchUsers() {
  // Tudo que está acima do return é javascript
  const INITIAL_PLACE = 'Digite Seu Nome';
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const [usuarios, setUsuarios] = useState([]);
  const [name, setName] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  const [placeError, setPlaceError] = useState(INITIAL_PLACE);
  const [newUser, setNewUser] = useState({ id: '', userUpdated: '' });

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      const { message } = await response.json();
      if (!response.ok) throw new Error(message);
      setUsuarios(message);
    } catch ({ message }) {
      setUsuarios([]);
      setError(message);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const postUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const { message } = await response.json();
      if (!response.ok) throw new Error(message);
    } catch ({ message }) {
      setPlaceError(message);
      setTimeout(() => setPlaceError(INITIAL_PLACE), 3000);
    }
    setName('');
    fetchUsers();
  };

  const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
    const { message } = await response.json();
    console.log(message);
    fetchUsers();
  };

  const handleChange = ({ target }) => {
    setNewUser((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const updateUser = async (event) => {
    event.preventDefault();
    const { id, userUpdated } = newUser;
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: userUpdated }),
    });
    const message = await response.json();
    console.log(message);
    fetchUsers();
  };

  return (
    // Tudo que está dentro do return é html
    // Ao abrir um objeto dentro de uma tag é possivel usar javascript
    <section>
      <form onSubmit={postUser}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            placeholder={placeError}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <section>
        {!isFetching ? (
          <section>
            {!usuarios.length ? (
              <span>{error}</span>
            ) : (
              <section>
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Username</th>
                      <th>Remover</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map((person, index) => (
                      <tr key={index}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => deleteUser(person.id)}
                          >
                            Deletar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <form onSubmit={updateUser}>
                  <h2>Edite o usuario pelo Id</h2>
                  <select name='id' onChange={handleChange}>
                    <option value="">Selecione um Id</option>
                    {usuarios.map(({ id }, index) => (
                      <option key={index} value={id}>{id}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Usuario a ser editado"
                    name='userUpdated'
                    onChange={handleChange}
                  />
                  <button type="submit">Atualizar</button>
                </form>
              </section>
            )}
          </section>
        ) : (
          <span>Loading...</span>
        )}
      </section>
    </section>
  );
}

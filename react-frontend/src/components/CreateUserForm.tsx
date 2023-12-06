import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', {
        username,
        password,
      });
      console.log(response.data);
      setMessage('Utilisateur créé avec succès !');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Il y a eu une erreur lors de la création de l\'utilisateur', error);
      setMessage('Erreur lors de la création de l\'utilisateur.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nom d'utilisateur:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Créer Utilisateur</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CreateUserForm;

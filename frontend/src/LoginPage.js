import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login/', {
        username: username,
        password: password
      });
      // Handle successful login, e.g., redirect to home page
      console.log(response.data);
    } catch (error) {
      // Handle login error
      setError('Invalid username or password');
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <input type="submit" value="Login" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;

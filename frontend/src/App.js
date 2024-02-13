import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <Home
      isAuthenticated={isAuthenticated}
      username={username}
      handleLogout={handleLogout}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

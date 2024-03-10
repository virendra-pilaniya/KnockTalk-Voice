import React from 'react';

const Home = ({ isAuthenticated, username, handleLogout }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <h1>Home</h1>
      <form method="GET" action="/home">
        <input type="text" name="q" placeholder="Search Rooms..." />
      </form>
      {isAuthenticated ? (
        <div>
          <p>Hello {username}</p>
          <a href="/logout" onClick={handleLogout}> Logout </a>
        </div>
      ) : (
        <a href="/login"> Login </a>
      )}
      <hr />
    </div>
  );
};

export default Home;

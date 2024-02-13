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
          <a href="#" onClick={handleLogout}> Logout </a>
        </div>
      ) : (
        <a href="/login"> Login </a>
      )}
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f0f0f0' }}>
          {/* Include TopicComponent here */}
        </div>

        <div style={{ flex: 2, padding: '20px' }}>
          {/* Include FeedComponent here */}
        </div>

        <div style={{ flex: 0.75, padding: '20px' }}>
          {/* Include RecentActivity here */}
        </div>
      </div>
    </div>
  );
};

export default Home;

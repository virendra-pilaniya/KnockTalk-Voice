import React from 'react';

const Feed = ({ rooms }) => {
  return (
    <div>
      <h2>Rooms available</h2>
      <h2>
        <a href="/create-room" style={{ textDecoration: 'none', color: '#007bff' }}>create_room</a>
      </h2>
    </div>
  );
};

export default Feed;

import React from 'react';

const RoomListItem = ({ room }) => (
  <div className="roomListRoom">
    <div className="roomListRoom__header">
      <a href={`/user-profile/${room.host.id}`} className="roomListRoom__author">
        <div className="avatar avatar--small">
          <img src={room.host.avatar.url} alt={`${room.host.username}'s avatar`} />
        </div>
        <span>@{room.host.username}</span>
      </a>
      <div className="roomListRoom__actions">
        <span>{room.created} ago</span>
      </div>
    </div>
    <div className="roomListRoom__content">
      <a href={`/room/${room.id}`}>{room.name}</a>
    </div>
    <div className="roomListRoom__meta">
      <a href={`/room/${room.id}`} className="roomListRoom__joined">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <title>user-group</title>
        </svg>
        {room.participants.length} Joined
      </a>
      <p className="roomListRoom__topic">{room.topic.name}</p>
    </div>
  </div>
);

const RoomList = ({ rooms }) => (
  <div>
    {rooms.map(room => (
      <RoomListItem key={room.id} room={room} />
    ))}
  </div>
);

export default RoomList;

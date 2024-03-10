import React from 'react';

const FightRoom = ({ room, roomMessages, participants }) => {
  return (
    <main className="profile-page layout layout--2">
      <div className="container">
        <div className="room">
          <div className="room__top">
            <div className="room__topLeft">
              <a href="/home">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <title>arrow-left</title>
                  <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z"></path>
                </svg>
              </a>
              <h3>Fight Room</h3>
            </div>
            {room.host.id === request.user.id && (
              <div className="room__topRight">
                <a href={`/update-room/${room.id}`}>
                  <svg enable-background="new 0 0 24 24" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                    <title>edit</title>
                    <path d="m23.5 22h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h15c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
                  </svg>
                </a>
                <a href={`/delete-room/${room.id}`}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>remove</title>
                    <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
                  </svg>
                </a>
              </div>
            )}
          </div>
          <div className="room__box scroll">
            <div className="room__header scroll">
              <div className="room__info">
                <h3>{room.name}</h3>
                <span>{room.created} ago</span>
              </div>
              <div className="room__hosted">
                <p>Hosted By</p>
                <a href={`/user-profile/${room.host.id}`} className="room__author">
                  <div className="avatar avatar--small">
                    <img src={room.host.avatar.url} alt={`${room.host.username}'s avatar`} />
                  </div>
                  <span>@{room.host.username}</span>
                </a>
              </div>
              <span className="room__topics">{room.topic}</span>
            </div>

            <div className="room__conversation">
              <div className="threads scroll">
                {roomMessages.map(message => (
                  <div key={message.id} className="thread">
                    <div className="thread__top">
                      <div className="thread__author">
                        <a href={`/user-profile/${message.user.id}`} className="thread__authorInfo">
                          <div className="avatar avatar--small">
                            <img src={message.user.avatar.url} alt={`${message.user.username}'s avatar`} />
                          </div>
                          <span>@{message.user.username}</span>
                        </a>
                        <span className="thread__date">{message.created} ago</span>
                      </div>
                      {request.user.id === message.user.id && (
                        <a href={`/delete-message/${message.id}`}>
                          <div className="thread__delete">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                              <title>remove</title>
                              <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
                            </svg>
                          </div>
                        </a>
                      )}
                    </div>
                    <div className="thread__details">{message.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="room__message">
            <form action="" method="POST">
              <input name="body" placeholder="Write your message here..." />
            </form>
          </div>
        </div>
        <div className="participants">
          <h3 className="participants__top">Participants <span>({participants.length} Joined)</span></h3>
          <div className="participants__list scroll">
            {participants.map(user => (
              <a key={user.id} href={`/user-profile/${user.id}`} className="participant">
                <div className="avatar avatar--medium">
                  <img src={user.avatar.url} alt={`${user.username}'s avatar`} />
                </div>
                <p>
                  {user.name}
                  <span>@{user.username}</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FightRoom;

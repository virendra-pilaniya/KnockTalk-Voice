import React from 'react';

const RecentPunches = ({ roomMessages }) => {
  return (
    <main className="layout">
      <div className="container">
        <div className="layout__box">
          <div className="layout__boxHeader">
            <div className="layout__boxTitle">
              <a href="/home">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <title>arrow-left</title>
                  <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z"></path>
                </svg>
              </a>
              <h3>Recent Punches</h3>
            </div>
          </div>

          <div className="activities-page layout__body">
            {roomMessages.map(message => (
              <div key={message.id} className="activities__box">
                <div className="activities__boxHeader roomListRoom__header">
                  <a href={`/user-profile/${message.user.id}`} className="roomListRoom__author">
                    <div className="avatar avatar--small">
                      <img src={message.user.avatar.url} alt={`${message.user.username}'s avatar`} />
                    </div>
                    <p>
                      @{message.user.username}
                      <span>{message.created} ago</span>
                    </p>
                  </a>

                  {currentUser.id === message.user.id && (
                    <div className="roomListRoom__actions">
                      <a href={`/delete-message/${message.id}`}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                          <title>remove</title>
                          <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
                <div className="activities__boxContent">
                  <p>replied to post <a href={`/room/${message.room.id}`}>{message.room}</a></p>
                  <div className="activities__boxRoomContent">
                    {message.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecentPunches;

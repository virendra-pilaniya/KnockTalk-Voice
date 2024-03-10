import React from 'react';

const AuthForm = ({ page }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="auth layout">
      <div className="container">
        <div className="layout__box">
          <div className="layout__boxHeader">
            <div className="layout__boxTitle">
              <h3>{page === 'login' ? 'Login' : 'Register'}</h3>
            </div>
          </div>
          <div className="layout__body">
            <h2 className="auth__tagline">Enjoy Boxing with your friends</h2>

            <form className="form" onSubmit={handleSubmit}>
              <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
              
              {page === 'login' ? (
                <>
                  <div className="form__group">
                    <label htmlFor="username">Email</label>
                    <input id="username" name="email" type="email" placeholder="e.g. pilaniyavirendra@email.com" />
                  </div>
                  <div className="form__group">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="••••••••" />
                  </div>
                </>
              ) : (
                <>
                  <div className="form__group">
                       <label htmlFor="email">Email</label>
                       <input id="email" name="email" type="email" placeholder="Enter your email" />
                  </div>
                </>
              )}

              <button className="btn btn--main" type="submit">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <title>lock</title>
                </svg>
                {page === 'login' ? 'Login' : 'Register'}
              </button>
            </form>

            <div className="auth__action">
              <p>{page === 'login' ? "Haven't signed up yet?" : 'Already signed up yet?'}</p>
              <a href={page === 'login' ? '{% url "register" %}' : '{% url "login" %}'}
                 className="btn btn--link">
                {page === 'login' ? 'Sign Up' : 'Login'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthForm;

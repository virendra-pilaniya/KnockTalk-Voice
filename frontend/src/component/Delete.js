import React from 'react';

class DeleteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: '' 
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <main className="delete-item layout">
        <div className="container">
          <div className="layout__box">
            <div className="layout__boxHeader">
              <div className="layout__boxTitle">
                <a href={document.referrer}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>arrow-left</title>
                    <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z"></path>
                  </svg>
                </a>
                <h3>Back</h3>
              </div>
            </div>
            <div className="layout__body">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form__group">
                  <p>Are you sure you want to delete "{this.state.obj}"?</p>
                </div>

                <div className="form__group">
                  <input className="btn btn--main" type="submit" value="Confirm" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default DeleteItem;

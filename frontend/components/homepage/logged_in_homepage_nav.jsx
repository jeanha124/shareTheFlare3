import React from 'react';

class LoggedInHomePageNav extends React.Component {
  render(){
    if (this.props.navType === 'you'){
      return (
        <div className="profile-nav">
          <ul className="nav-ul">
              <li id="about" className="marg">About</li>
              <li id="photostream" className="marg">Photostream</li>
              <li id="albums" className="marg">Albums</li>
              <li id="faves" className="marg">Faves</li>
          </ul>
        </div>
      );
    }
  }
}

export default LoggedInHomePageNav;
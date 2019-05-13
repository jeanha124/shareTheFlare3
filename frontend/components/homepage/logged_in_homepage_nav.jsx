import React from 'react';

class LoggedInHomePageNav extends React.Component {
  render(){
    if (this.props.navType === 'you'){
      return (
        <div className="profile-nav">
          <ul className="nav-ul">
              <li className="about marg">About</li>
              <li className="photostream marg">Photostream</li>
              <li className="albums marg">Albums</li>
              <li className="faves marg">Faves</li>
          </ul>
        </div>
      );
    }
  }
}

export default LoggedInHomePageNav;
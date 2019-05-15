import React from 'react';

class LoggedInHomePageNav extends React.Component {
  render(){
    if (this.props.navType === 'you'){
      return (
          <ul className="profile-nav">
              <li>About</li>
              <li>Photostream</li>
              <li>Albums</li>
              <li>Faves</li>
          </ul>
      );
    }
  }
}

export default LoggedInHomePageNav;
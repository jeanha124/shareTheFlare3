import React from 'react';
import { Link } from 'react-router-dom';




const mainNav = ({ currentUser, logout, hide, openModal }) => {
  const navLinks = currentUser ? (
    <ul className="splitright">
      <div className="right">
          <input className="main-search" type="text" placeholder="Photos..." ></input>
          <Link to='/photos/upload'><i className="fas fa-cloud-upload-alt cloud"></i></Link>
          <div className="avatar-drop">
            <div className="avatar" onClick={hide}></div>
            <ul id="dropdown" className="profile-dropdown">
              <li><h1 id="hello-display">Hello, {currentUser.display_name}!</h1></li>
              <li><button className="nav-logout" onClick={logout}>Log Out</button></li>
            </ul>
          </div>
        </div>
    </ul>
  ) : (
    <ul className="splitright">
      <div className="right">
          <button className="login" onClick= {() => openModal('login') }>Log In</button>
          <button className="signup" onClick= {() => openModal('signup') }>Sign Up</button>
      </div>
    </ul>
  );

  const user = currentUser ? (<h2 className="userProf"><Link to={`/photos/~/${currentUser.display_name}`}>You</Link></h2>) : (null);

  let color = currentUser ? "color1" : "color2";

  return (
    <header className={color}>
      <nav className="navbar">
        <div className="personal">
          <h1 className="main-logo"><Link to='/'>Share The Flare</Link></h1>
          {user}
        </div>
        {navLinks}
      </nav>
    </header>
  );
}



export default mainNav;

// className = "header-btn"
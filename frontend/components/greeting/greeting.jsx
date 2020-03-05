import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="hero"> 
      <div className="login-signup">
        <div id="btn1"></div>
        <Link to="/login"><button type='button' className="toggle_btn">Login</button></Link>
        {/* &nbsp;or&nbsp; */}
        <Link to="/signup"><button type='button' className="toggle_btn">Sign up!</button></Link>
      </div>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

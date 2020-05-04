import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout,ownprops }) => {
  
  const sessionLinks = () => (
    <div className="hero"> 
      <div className="login-signup">  
        {/* <Link to="/newgroup" className="toggle_group">Create a group</Link> */}
        <Link to="/login" className="toggle_btnin">Log in</Link>
        <Link to="/signup" className="toggle_btnup" >Sign up</Link>
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

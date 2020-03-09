import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="hero"> 
      <div className="login-signup">  

        <Link to="/login" className="toggle_btn">Log in</Link>
        <Link to="/signup" className="toggle_btn" >Sign up</Link>
     
      {/* <img src="https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2020/01/lord_of_the_rings_gollum.jpg?itok=-ndMZJ1B" alt=""/> */}
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

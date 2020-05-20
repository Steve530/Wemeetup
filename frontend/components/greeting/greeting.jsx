import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import chevronDown from '@iconify/icons-mdi/chevron-down';
import accountCircleOutline from '@iconify/icons-mdi/account-circle-outline';

// const Greeting = ({ this.props.currentUser, logout,ownprops }) => 

class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          yesmenu: false,
      };
  
      this.yesmenu = this.yesmenu.bind(this);
      this.nomenu = this.nomenu.bind(this);
  }

  yesmenu(e) {
      e.preventDefault();

      this.setState({
          yesmenu: true,
      }, () => {
          document.addEventListener('click', this.nomenu);
      });
  }

  nomenu() {
      this.setState({ yesmenu: false }, () => {
          document.removeEventListener('click', this.nomenu);
      });
  }
  render() {
  const sessionLinks = () => (
    <div className="hero"> 
      <div className="login-signup">  
        <Link to="/login" className="toggle_btnin">Log in</Link>
        <Link to="/signup" className="toggle_btnup" >Sign up</Link>
      </div>
      <hr className="border-line"/>
    </div>
  );
  const personalGreeting = () => (
    <div>
       <hgroup className="header-group">
         <span className="header-icon"><Icon width="30" height="30"  icon={accountCircleOutline} /></span>
         {/* <div className="border-right"></div> */}
        <div className="dropdown">
          <i className="dropdown-arrow" onClick={this.yesmenu}><Icon icon={chevronDown} /></i>
        </div> 
        <hr className="border-line"/>
 
       </hgroup>
     
      {this.state.yesmenu ? (
          <div className="navbar-dropdown">
              <button className="navbar-button2" onClick={this.props.logout}>Log Out</button>
          </div>
      ) : (
              null
          )
      }
    </div>
  );

  return this.props.currentUser ? personalGreeting() : sessionLinks();
  }
};

export default Greeting;

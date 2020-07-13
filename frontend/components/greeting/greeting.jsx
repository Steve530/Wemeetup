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
   
      this.handlelogout = this.handlelogout.bind(this);
      this.seeyourgroups = this.seeyourgroups.bind(this);
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
  handlelogout() {
    this.props.logout();
    this.props.history.push("/")
  }
  seeyourgroups(){
    this.props.history.push("/afterlogin")
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
        <hr className="login-border"/>

      </div>
    </div>
  );  
  const personalGreeting = () => (
    <div className="hero">
       <hgroup className="header-group">
         <span className="header-icon"><Icon width="30" height="30"  icon={accountCircleOutline} /></span>
       
        <div className="dropdown">
          <i className="dropdown-arrow" onClick={this.yesmenu}><Icon icon={chevronDown} /></i>
        </div> 
 
       </hgroup>
     
      {this.state.yesmenu ? (
          <div className="navbar-dropdown">
            
              <ul className="dropdown_groups">{this.props.groups.slice(0,5).map((group)=> 
                <ul className="separate_groupname">
                  <Link to={`groups/${group.id}`} className="dropdown_groupnames">{group.group_name}</Link>
 
                </ul>
              )}</ul>
              <button className="see_your_groups" onClick={this.seeyourgroups}>See all your groups  > </button>
              <ul className="profile" >Profile</ul>
              <ul className="navbar-button2" onClick={this.handlelogout}>Log out</ul>
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

import React from 'react';
import AfterloginIndexItem from '../group/afterlogin_index_item';
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from '@iconify/react';
import bxSearch from '@iconify/icons-bx/bx-search';

class AfterloginIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      search: ''
    }; 
    this.yesmenu = this.yesmenu.bind(this);
    this.nomenu = this.nomenu.bind(this);
  }       
 componentDidMount() {
   this.props.fetchGroups();
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
 update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

 render() {
   
  return( 
    <div className='afterlogin-groupandpics'>

      <section id="member-home-header"> 
          <div id="member-home-bounds">
                <h2 className="heroPrimary">Find your next event</h2>
                  <p >  
                    <span className="heroSecondary">
                    174 events in your groups  . 1,295 events near you  
                    </span> 
                  </p> 
                 
          </div> 
      </section> 
      <div className="all-groups-images">
            
            <h2 id='afterlogin-urgroups'>YOUR GROUPS</h2>
            <div className='your_groups'>
                  <div className="search_container" >
                    <input id="search_input" type="text" value={this.state.search} onChange={this.update('search')} onClick={this.yesmenu}/>
                    <div id="search_caption"  > within  <a className="search_caption2" href=""> 5 miles</a> of  <a className="search_caption2" href="">  San Francisco, CA</a></div>
                  <div className="search_icon">
                    <Icon width="25" height="25" icon={bxSearch} />
                  </div> 
                 
                  </div>
                  <div className="dropdown_allgroups"> 
                     {this.state.yesmenu ? (
                        <div className="dropdown_allgroups2">All Groups </div>
                     ) : ( null )
                     }
            </div>
              { this.props.groups.filter(group => group.members.includes(this.props.currentUser_id) ).map(group=> 
              <AfterloginIndexItem type="yourgroups" key = {group.id} group={group}/>)}
            </div>
            <hr className="afterlogin-border"/>
         
            <div className="groupsbelow">
                <h4 id='text-suggestedgroup'>SUGGESTED GROUPS</h4>
                <div className='afterlogin_group_pic'>
                  { this.props.groups.map(group=> <AfterloginIndexItem type="allgroups"  key = {group.id} group={group}/>)}
                </div>  
            </div>
           
      </div>
       
    </div>  
  )} 
      
};




export default AfterloginIndex;
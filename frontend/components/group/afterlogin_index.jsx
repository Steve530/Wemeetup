import React from 'react';
import AfterloginIndexItem from '../group/afterlogin_index_item';
import { Link } from "react-router-dom";

class AfterloginIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
 componentDidMount() {
   this.props.fetchGroups();
 }
 render() {   
   
  return(
    <div className='groupandpics'>
      <section id="member-home-header">
          <div id="member-home-bounds">
                <h2 className="heroPrimary">Find your next event</h2>
                  <p >
                    <span className="heroSecondary">
                    174 events in your groups    .  1,295 events near you  
                    </span>
                  </p>
          </div>
      </section> 
      <div className="all-groups-images">
        <h2 id='afterlogin-urgroups'>YOUR GROUPS</h2>
        <div className='your_groups'>
          { this.props.groups.filter(group => group.members.includes(this.props.currentUser_id) ).map(group=> 
          <AfterloginIndexItem type="yourgroups" key = {group.id} group={group}/>)}
        </div>
      </div>


      <h2 id='groupsttt'>SUGGESTED GROUPS</h2>
      {/* <h4  id='under-groupsttt'>Find groups that get together to do the things they love.</h4> */}
      <div className='jimmy_group_pic'>
  
        { this.props.groups.map(group=> <AfterloginIndexItem type="allgroups"  key = {group.id} group={group}/>)}
      </div>
    </div>  
  )} 
    
};




export default AfterloginIndex;
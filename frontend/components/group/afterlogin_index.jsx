import React from 'react';
import AfterloginIndexItem from '../group/afterlogin_index_item';
import { Link } from "react-router-dom";

class AfterloginIndex extends React.Component {

 componentDidMount() {
   this.props.fetchGroups();
 }

 render() {   
  return(
    <div className='groupandpics'>
      <section id="member-home-header" class="stripe inverted">
          <div id="member-home-bounds">
              <a href="https://www.meetup.com/find/?events=true&amp;eventFilter=my" class="block align-center">
                <h2 class="heroPrimary">Find your next event</h2>
                  <p class="heroSecondary">
                    <span>
                    174 events in your groups
                    </span>
                    <span class="text--middotLeft">
                    1,295 events near you  
                    </span>
                  </p>
              </a>
          </div>
      </section>
      <h2 id='groupsttt'>Groups near you</h2>
      <h4  id='under-groupsttt'>Find groups that get together to do the things they love.</h4>
      <div className='jimmy_group_pic'>
   

        { this.props.groups.map(group=> <AfterloginIndexItem key = {group.id} group={group}/>)}
      </div>
    </div>  
  )} 
   
};




export default AfterloginIndex;
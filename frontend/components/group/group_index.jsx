import React from 'react';
import GroupIndexItem from '../group/group_index_item';

class GroupIndex extends React.Component {

 componentDidMount() {
   this.props.fetchGroups();
 }

 render() {
  //  debugger
  return(
    <div className='jimmy_group_pic'>
      { this.props.groups.map(group=> <GroupIndexItem key = {group.id} group={group}/>)}
    </div>
  )} 
   
};




export default GroupIndex;
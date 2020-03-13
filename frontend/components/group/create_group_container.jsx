import { connect } from 'react-redux';
import CreateGroup from './create_group'; 
import React from 'react';
import {createGroup} from '../../actions/group_actions';


const mstp = (state) => {
  // debugger
  
  // return group: state.groups
};

const mdtp = (dispatch) => {
  // debugger
  return {
    createGroup: (group) => dispatch(createGroup(group))
  }
};

export default connect(mstp, mdtp)(CreateGroup);
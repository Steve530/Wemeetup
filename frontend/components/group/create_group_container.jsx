import { connect } from 'react-redux';
import CreateGroup from './create_group'; 
import React from 'react';
import {createGroup} from '../../actions/group_actions';


const msp = (state) => {

  return null;
};

const mdp = (dispatch) => {
  // debugger
  return {
    createGroup: (group) => dispatch(createGroup(group))
  }
};

export default connect(null, mdp)(CreateGroup);
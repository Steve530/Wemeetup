import { connect } from "react-redux";
import AfterloginIndex from "./afterlogin_index";
import { fetchGroups } from "../../actions/group_actions";

const msp = (state) => {
  let groups = [];
  if (state.entities.groups) {
    groups =  Object.values(state.entities.groups)
  }
  
  return {
    currentUser_id: state.session.id,
    groups: groups
  }
}; 

const mdp = (dispatch) => {
  return {
    fetchGroups: () => dispatch(fetchGroups())
  }
}

export default connect(msp, mdp)(AfterloginIndex);
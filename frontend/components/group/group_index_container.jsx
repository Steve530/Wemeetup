import { connect } from "react-redux";
import GroupIndex from "./group_index";
import { fetchGroups } from "../../actions/group_actions";

const msp = (state) => {
  // debugger
  let groups = [];
  if (state.entities.groups) {
    groups =  Object.values(state.entities.groups)
  }
  return {
    groups: groups
  }
};

const mdp = (dispatch) => {
  return {
    fetchGroups: () => dispatch(fetchGroups())
  }
}

export default connect(msp, mdp)(GroupIndex);
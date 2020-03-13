import { connect } from "react-redux";
import {
  fetchGroup
} from "../../actions/group_actions";
import GroupShow from "./group_show";
    
// import { getCurrentUser } from "../../actions/session_actions.js";
// import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  
  return {
    ownProps: ownProps,
    group: state.entities.groups[ownProps.match.params.groupId],

    // group: selectGroup(state, ownProps.match.params.groupId),
    // currentUser: selectCurrentUser(state),
  }
  // isLoggedIn: selectIsLoggedIn(state),
};

const mdp = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  // getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  
});

export default connect(
  msp,
  mdp
)(GroupShow);

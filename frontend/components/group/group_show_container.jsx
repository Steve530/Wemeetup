import { connect } from "react-redux";
import {
  fetchGroup, 
  createMembership, 
  deleteMembership
} from "../../actions/group_actions";
import GroupShow from "./group_show";

const msp = (state, ownProps) => {
  return {
    ownProps: ownProps,
    group: state.entities.groups[ownProps.match.params.groupId],
    currentUser_id: state.session.id,
    organizer: state.entities.groups[ownProps.match.params.groupId.organizer],
  }
};

const mdp = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  
  joinGroup: id => dispatch(createMembership(id)),
  leaveGroup: id => dispatch(deleteMembership(id))  
});

export default connect(
  msp,
  mdp
)(GroupShow);

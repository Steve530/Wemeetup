import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session,entities: { groups }, entities: { users } },ownprops) => {
    groups = Object.values(groups).filter((group)=>{
     return  group.members.includes(session.id)
    })
  return {
    currentUser: users[session.id],
    groups: groups,
    ownprops: ownprops
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));

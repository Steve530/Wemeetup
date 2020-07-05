import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, entities: { users } },ownprops) => {
  
  return {
    currentUser: users[session.id],
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

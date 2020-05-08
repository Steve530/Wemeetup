import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import CreateGroupContainer from './group/create_group_container';
import GroupIndexContainer from './group/group_index_container';
import EditGroupFormContainer from './group/edit_group_form_container';
import GroupShowContainer from './group/group_show_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
//steve
import Splash from './splash/splash';
const App = () => (
  <div>
    <header>  
      <Link to="/" className="header-link">
        <h1 id='top_welcome'> </h1>
      </Link>
      <GreetingContainer /> 
    </header>
    <Switch>

      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/newgroup" component={CreateGroupContainer} />
      <ProtectedRoute path="/groups/:groupId/manage" component={EditGroupFormContainer} />
      <Route exact path="/groups/:groupId" component={GroupShowContainer} />
      <AuthRoute exact path="/groups" component={GroupIndexContainer} />
      <Route exact path="/" component={Splash} />
      <Redirect to='/'/>
    </Switch>
  </div>
);

export default App;

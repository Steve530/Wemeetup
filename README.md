# Wemeetup

Wemeetup is a web-app clone of http://www.meetup.com, a platform for users to discover, join, and create groups based on specific interests and hobbies.

<a href="https://myhobbits.herokuapp.com/#/" target="_blank">Link to my site!</a>

 <img src= "https://github.com/Steve530/Wemeetup/blob/master/app/assets/images/61.png"/> 

## Technologies Used
Wemeetup is developed with a Ruby on Rails backend, a PostgreSQL database and is hosted on Heroku. The backend provides RESTful API's and responds with JSON data. The front end is modeled with React and Redux and implements styling from CSS.

In addition, this website employed Jbuilder, NodeJs, JQuery to make AJAX requests, Node Package Manager (npm), webpack, React DOM, React Router, React History for browser history manipulation.

## Features
Users can create an account and log in securely (with bcrypt) with custom error handling. Once logged in, the user will be able to create groups and edit group. If a user is trying to create a group without logging in,the page will be redirected to the log in page.

 <img src= "https://github.com/Steve530/Wemeetup/blob/master/app/assets/images/show3.gif"/> 

## Code Snippets
Utilization of protected and authenticated routes with React Router.  This allows the developer to dictate user access depending on their login state.
```
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
```

Below displays how the developer can redirect users based on where they are on the webpage with the Redux history property.  In this example, the user is redirected to the group index page upon submission of a newly created group, thus allowing the user to see the new group they have created.

```
handleSubmit(e) {
    e.preventDefault();
        if (this.state.group_name.length >=31) alert('Group name less than 30 chars pls :)')
        else {const group = Object.assign({}, this.state);
          this.props.createGroup(group).then( (group) => this.props.history.push(`groups/${group.id}`)
    )}
  };

```
## Installation on UNIX
1. Follow the guide <a href="https://guides.rubygems.org/rubygems-basics/" target="_blank">here</a> to set up your ruby environment and install gem and bundler.
2. Clone the repository. git clone https://github.com/Steve530/Wemeetup.git
3. Run npm install to install the dependencies for the app.
4. Run npm start to start webpack and create the bundle.js file.

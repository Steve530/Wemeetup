# Wemeetup

Wemeetup is a web-app clone of http://www.meetup.com, a platform for users to discover, join, and create groups based on specific interests and hobbies.

<a href="https://myhobbits.herokuapp.com/#/" target="_blank">Link to my site!</a>

 <img src= "https://raw.githubusercontent.com/Steve530/Wemeetup/master/public/52.png"/> 
## Technologies Used
Wemeetup is developed with a Ruby on Rails backend, a PostgreSQL database and is hosted on Heroku. The backend provides RESTful API's and responds with JSON data. The front end is modeled with React and Redux and implements styling from CSS.

In addition, this website employed Jbuilder, NodeJs, JQuery to make AJAX requests, Node Package Manager (npm), webpack, React DOM, React Router, React History for browser history manipulation, and AWS for cloud hosting.
 <img src= "https://raw.githubusercontent.com/Steve530/Wemeetup/master/public/51.png"/> 

## Features
Users can create an account and log in securely (with bcrypt) with custom error handling. Once logged in, the user has access to a generalized index of created groups and can create a custom group for other users to view.
 <img src= "https://raw.githubusercontent.com/Steve530/Wemeetup/master/public/53.png"/> 
## Code Snippets
Utilization of protected and authenticated routes with React Router.  This allows the developer to dictate user access depending on their login state.
```
const App = () => (
    <div>
        <header>
            <NavbarContainer/>
            <AuthRoute path="/register" component={SignupFormContainer} />
            <Route exact path="/" component={Index} />
            <ProtectedRoute path="/meetup" component={Meetup} />
            <Route path="/meetup" component={GroupsContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route path="/create" component={CreateContainer} />
            <Route exact path='/groups/:groupId/' component={GroupShowContainer} />
            <FooterContainer/>
        </header>
    </div>
);
```

Below displays how the developer can redirect users based on where they are on the webpage with the Redux history property.  In this example, the user is redirected to the group index page upon submission of a newly created group, thus allowing the user to see the new group they have created.

```
handleSubmit(e) {
   e.preventDefault();
   this.props.createGroup(this.state)
  .then( () => this.props.history.push('/meetup'));
}

```
## Installation on UNIX
1. Follow the guide <a href="https://guides.rubygems.org/rubygems-basics/" target="_blank">here</a> to set up your ruby environment and install gem and bundler.
2. Clone the repository. git clone https://github.com/Steve530/Wemeetup.git
3. Run npm install to install the dependencies for the app.
4. Run npm start to start webpack and create the bundle.js file.

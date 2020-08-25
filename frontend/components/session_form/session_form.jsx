import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      username: '', 
      password: ''
    };        
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demouser = this.demouser.bind(this);
  }       
  componentWillUnmount() {
    this.props.clearSessionErrors();
  }       
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  demouser(e){   
    e.preventDefault(); 
    this.props.processForm({
      username: 'Steven',  
      password: '12345678'
    }).then(()=> this.props.history.push(`afterlogin`));
  }  
  handleSubmit(e) {    
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((user)=> this.props.history.push(`afterlogin`))  
  } 
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='naveenwrong' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="login-form-container">

        <div className="welcome-line"></div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/> 
          <div className='login_or_signup' >
            <h1 id="login-signup">{(this.props.formType === 'login') ? "Log in" : "Sign up"} </h1>
            <div id='Registered-with-us-yet'>Not registered with us yet?  {this.props.navLink}  </div>
            <hr id="border-above-email"/>
          </div>      
          <div id="errorspopup">{this.renderErrors()}</div>
          <div className="login-form">
            <br/> 
            <label><p id="username">Username:</p>  
            <br/>  
              <input type="text" 
                value={this.state.username}
                onChange={this.update('username')}
                className="username-input"  
              />     
            </label>
            <br/>
            <br/>  
            { (this.props.formType !== 'login') ? (<div>
              <label><p id="email">Email:</p>  
              <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="email-input"
                />  
              </label>
            </div>) : null
            }
            <br/> 
            <br/>
            <label><p id="password">Password:</p>
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="pass-input"
              />
            </label>              
            <br/>   
            <br/>                         
            <br/>             
            <input className="session-submit" type="submit" value={(this.props.formType === 'login') ? "Log in" : "Sign up"} />
   
            <div className={(this.props.formType === 'login') ? "footbox" : "no-footbox"}>
              <div className="login-body-or">OR</div>
              <button onClick={this.demouser} className="demo-submit"  value='login'>Demo User Login </button>
            </div>   
           </div>
        </form>   

      </div>   
    );  
  }
}  

export default SessionForm;

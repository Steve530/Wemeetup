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
    });
    // this.setState();
    // this.handleSubmit(e)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
            <h1>{this.props.formType}
            <img className="icon" src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif" alt="[lock icon]"></img>
            </h1>Registered with us yet?{this.props.navLink}
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label><p>Username:</p>  
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>  
            { (this.props.formType !== 'login') ? (<div>
              <label><p>Email:</p>  
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
            <label><p>Password:</p>
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
            <input className="session-submit" type="submit" value={this.props.formType} />
            <button onClick={this.demouser} className="demo-submit" type="submit" value='login'>Demo User</button>
           </div>
        </form>

      </div>
    );
  }
}

export default SessionForm;

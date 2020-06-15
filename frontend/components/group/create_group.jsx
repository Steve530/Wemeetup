import React from "react";
import { withRouter } from 'react-router-dom';


class CreateGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      group_name: "",
      description: "",
         
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.group_name.length >=31) alert('Group name less than 30 chars pls :)')
    if ((this.state.group_name.length < 1)||(this.state.description.length < 1)) alert('Group name or description can not be empty! :)')
    
    else {const group = Object.assign({}, this.state);
      this.props.createGroup(group).then( (group) => this.props.history.push(`groups/${group.id}`)
    )}
  };

  update (field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }
 

  render () {
    return (
      <div className="create-group-container">

        <div className="create-banner">
          <h1 className="create-title">Start a new Meetup?</h1>
          <span className="group-span">make it happen</span>
        </div>

        <div className="create-group-section">
        <form className="create-form" onSubmit={this.handleSubmit}>


            <div className='create-group-inputs-container'>

                <div className="create-group-input">
                  <img className="create-icon" src="https://secure.meetupstatic.com/s/img/322408653975454564695/start_v2/textBubbles.svg"/>
                    <span className="step-span">Step 1 of 3</span>
                  <label htmlFor='form-name'>What will your Meetup's name be?</label>
                      <input 
                        id="form-name-input"
                        type="text" 
                        value={this.state.group_name}
                        onChange={this.update('group_name')}/>
                </div>

                <div className="create-group-input">
                  <img className="create-icon" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
                      <span className="step-span">Step 2 of 3</span>
                    <label htmlFor='form-description'>Describe who should join, and what your Meetup <br/>
                      will do.</label>
                        <textarea 
                          id="form-description-input"
                          type="text" 
                          value={this.state.description}
                          onChange={this.update('description')}/>
                </div>

                <div className="create-group-input">
                <img className="create-icon" src="https://secure.meetupstatic.com/s/img/533695931247066883484/start_v2/people.svg"/>
                    <span className="step-span">Step 3 of 3</span>
                  <label htmlFor='form-name'>What it means to be a Meetup</label>
                      <ul>
                        <li>Real, in-person conversations</li>
                        <li>Open and honest intentions</li>
                        <li>Always safe and respectful</li>
                        <li>Put your members first</li>
                      </ul>
                    </div>
                  

            </div>
          <p className="create-disclaimer">We review all MeetSups based on our Community Guidelines</p>
          <input className="create-submit-button" type="submit" value="Agree & Continue"/>
        
         </form>
         </div>
      </div>
    )
  }
}

export default withRouter(CreateGroup);
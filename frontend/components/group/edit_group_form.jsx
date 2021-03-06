import React from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';

class EditGroupForm extends React.Component {
    constructor(props) {
         
        super(props);
        this.state = {
            ...this.props.group
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
  
componentDidMount(){
     
    this.props.fetchGroup(this.props.match.params.groupId).then(({group}) => {
        this.setState({...group});
    });
    this.props.fetchGroups()
}

componentDidUpdate(prevProps) {
     
    if (prevProps.group.id != this.props.match.params.groupId) {
        this.props.fetchGroup(this.props.match.params.groupId);
    }
}


handleSubmit(e) {
    e.preventDefault();
    if (this.state.group_name.length >=31) alert('Group name less than 30 chars pls :)')
    if ((this.state.group_name.length < 1)||(this.state.description.length < 1)) alert('Group name or description can not be empty! :)')
    
        let newgroup = {
            id: this.state.id,  
            group_name: this.state.group_name,
            description: this.state.description,
            organizer_id: this.state.organizer_id
        }
    this.props.action(newgroup).then(() => this.props.history.push(`/groups/${newgroup.id}`));

}

handleDelete(e) {
    e.preventDefault();
    this.props.deleteGroup(this.state.id).then(() => this.props.history.push(`/meetup`));
}
    
update(field) {
    
        return e => this.setState({
            [field]: e.target.value
        });
    }

render() {
     
    if (Object.values(this.props.group).length === 0) { return null; }


    return( 
        <div className='update-all'>
            <Route 
                path='/newgroup' 
                render={ () => {
                    if (!this.props.currentUser) {
                        return <Redirect to='/login' />
                    } else if (this.props.currentUser != this.props.group.organizer_id) {
                        return <Redirect to='/' />
                    }  
                }
            }   
            />
            <div className="edit-banner">
             {/*<h1 className='update-group-title'>{this.state.group_name}</h1> */}
             <h1 className="edit-title">Edit Your Group</h1>
            </div>

            <div className="edit-group-section"> 
             <form className="edit-form" onSubmit={this.handleSubmit}>
        
                <div className="edit-group4-input">
                    <img className="create-icon" src="https://secure.meetupstatic.com/s/img/322408653975454564695/start_v2/textBubbles.svg"/>

                    <h2 id="edit-group-name">Edit your group name</h2>
                    {/* <h4 className="italics">Choose a name that will give people a clear idea of what the group is about.</h4> */}
                    <input className="edit-input1" type='text' onChange={this.update('group_name')} value={this.state.group_name} />
                </div>
                <div className="edit-2">
                   <img className="create-icon" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>

    
                    <h2 id="edit-description" >Edit what your group is about</h2>
                     <textarea className='description2' onChange={this.update('description')} value={this.state.description} />
                    <div className="submit-div">
                        <input type="submit" className="edit-submit" value="Update group" />
                        {/* <img className="delete-trash" onClick={this.handleDelete} src="https://meetbrite-seeds.s3.amazonaws.com/delete.png" /> */}
                        <button className="deletebtn" onClick={this.handleDelete}>Delete group</button>
                    </div>
                </div>  
             </form>
            </div>

        </div>
    )
}

}
export default withRouter(EditGroupForm)
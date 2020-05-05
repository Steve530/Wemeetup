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
}

componentDidUpdate(prevProps) {
     
    if (prevProps.group.id != this.props.match.params.groupId) {
        this.props.fetchGroup(this.props.match.params.groupId);
    }
}


handleSubmit(e) {
    e.preventDefault();
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
            <div className="update-banner">
             <h1 className='update-group-title'>{this.state.group_name}</h1>
            </div>

            <form className="createform" onSubmit={this.handleSubmit}>
        
                <div className="create-1">
                    <h1>Edit your group name</h1>
                    <h4 className="italics">Choose a name that will give people a clear idea of what the group is about.</h4>
                    <input className="input-2" type='text' onChange={this.update('group_name')} value={this.state.group_name} />
                </div>
                <div className="create-2">
                    <h6 className="create-step"></h6>
                    <h1>Edit what your group is about</h1>
                    <h4 className="italics2">What is this group's purpose?  Who should join your group?  Why should they join your group?</h4>
                    <textarea className='text1' onChange={this.update('description')} value={this.state.description} />
                    <div className="submit-div">
                        <input type="submit" className="create-submit" value="Update group" />
                        {/* <img className="delete-trash" onClick={this.handleDelete} src="https://meetbrite-seeds.s3.amazonaws.com/delete.png" /> */}
                        <button className="deletebtn" onClick={this.handleDelete}>Delete group</button>
                    </div>
                    
                </div>
            </form>


        </div>
    )
}

}
export default withRouter(EditGroupForm)
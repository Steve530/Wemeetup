import React from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';

class EditGroupForm extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {
            ...this.props.group
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


componentDidMount(){
    debugger
    this.props.fetchGroup(this.props.match.params.groupId).then(({group}) => {
        this.setState({...group});
    });
}

componentDidUpdate(prevProps) {
    debugger
    if (prevProps.group.id != this.props.match.params.groupId) {
        this.props.fetchGroup(this.props.match.params.groupId);
    }
}


handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
debugger
    formData.append('group[id]', this.state.id)
    formData.append('group[group_name]', this.state.group_name)
    formData.append('group[description]', this.state.description)
    formData.append('group[organizer_id]', this.state.organizer_id)
debugger
    this.props.action(formData).then(() => this.props.history.push(`/groups/${formData.get('group[id]')}`));

}

handleDelete(e) {
    e.preventDefault();
    this.props.deleteGroup(this.state.id).then(() => this.props.history.push(`/meetup`));
}

    update(field) {
    debugger
        return e => this.setState({
            [field]: e.target.value
        });
    }

render() {
    debugger
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
                <div className="create-1">
                    <h6 className="create-step"></h6>
                    <h1>Edit what your group is about</h1>
                    <h4 className="italics">What is this group's purpose?  Who should join your group?  Why should they join your group?</h4>
                    <textarea type='text' onChange={this.update('description')} value={this.state.description} />
                    <div className="submit-div">
                        <input type="submit" className="create-submit" value="Update your group!" />
                        <img className="delete-trash" onClick={this.handleDelete} src="https://meetbrite-seeds.s3.amazonaws.com/delete.png" />
                    </div>
                </div>
            </form>



            
            {/* <form className='update-group-form' onSubmit={this.handleSubmit}>
                <h3 className='update-group-head'>About this MeetBrite Group</h3>

                <div className='update-group-name'>
                    <label>MeetBrite Group Name</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                </div>

                <div className='update-group-description'>
                    <label>MeetBrite Group Description</label>
                    <p>What is this group's purpose? Who should join? Why?</p>
                    <textarea value={this.state.description} onChange={this.handleChange('description')}/>
                </div>
                <h3 className='update-group-subh'>Where</h3>
                <div className='update-group-location'>
                    <div className='update-group-loc-vals'>
                        <div>
                            <label className='country'>Country</label>
                            <span>USA</span>
                        </div>
                        <div>
                            <label className='zip'>ZIP</label>
                            <input type="text" id="zip-val" defaultValue='10001' />
                        </div>
                    </div>
                    <p>Only city and town changes to your MeetBrite are permitted.</p>
                </div>

                <h3 className='update-group-subh'>Meetbrite group logo</h3>
            </form> */}

        </div>
    )
}

}
export default withRouter(EditGroupForm)
import React from "react";
import { Link } from "react-router-dom";
import { fetchGroup } from "../../actions/group_actions";
class GroupShow extends React.Component {
    constructor(props) {
      super(props);
      this.joinGroup = this.joinGroup.bind(this);
      this.leaveGroup = this.leaveGroup.bind(this);
    }
    componentDidMount(){
        // window.scrollTo(20, 20);
        this.props.fetchGroup(this.props.ownProps.match.params.groupId)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.group.id != this.props.group.id) {
    //         this.props.fetchGroup(this.props.match.params.groupId);
    //     }
    // }

    joinGroup(e) {
        e.preventDefault();
        this.props.joinGroup(this.props.group.id);
    }

    leaveGroup(e) {
        e.preventDefault();
        this.props.leaveGroup(this.props.group.id);
    }

    render(){
        if (!this.props.group) {
            return null;
        }
        
        let idd = this.props.ownProps.match.params.groupId % 31
        let showjoin;
        let showmanage;
        let avatar;
        const memberAvatars = this.props.group.members.map((avatar, idx) => <li key={idx}><img src="https://meetbrite-seeds.s3.amazonaws.com/avatar.png" className='avatar' /></li>);
        // debugger
        if (Object.values(this.props.group).length === 0) { return null; }
        else if (!this.props.currentUser_id) {
            showjoin = <Link className="link-join" to="/login">Join Group</Link>
        } 
        else if ((this.props.currentUser_id) && (!this.props.group.members.includes(this.props.currentUser_id))) {
            showjoin = <Link className="link-join" onClick={this.joinGroup}>Join Group</Link>
        } else {
            showjoin = <Link className="link-join" onClick={this.leaveGroup}>Leave Group</Link>
        }
        
        if (!this.props.currentUser_id) {
            showmanage = "nomanage"
        } else if (this.props.currentUser_id === this.props.group.organizer.id) {
            showmanage = "manage"
            avatar = <img src="https://meetbrite-seeds.s3.amazonaws.com/avatar.png" className="avatar" />
        } else {
            showmanage = "nomanage"
        }
        return(
            <div>
                <p id='group_page_name'>{this.props.group.group_name}</p>
                <div className="group-showpage">
                    <img src={`./${idd}.jpg`} />
                </div>
                <button className='join_group_btn'>{showjoin}</button>
                <h2 id='whatweabout'>What we're about</h2>
                <div className='aboutgroup'>
                    <p>{this.props.group.description}</p>
                </div>
                <div className='members_container'>
                    <h2>Members (2)</h2>
                    <div className='member1'>
                        <img src="https://image.flaticon.com/icons/png/128/149/149072.png"></img>
                        <p>You</p>
                    </div>
                    <div className='member2'>
                        <img src="https://image.flaticon.com/icons/png/128/149/149072.png"></img>
                        <p>Me</p>
                    </div>
                </div>
                <div className='right-box'>
                            <div className='right-org'>
                                <h3>Organized By</h3>
                                <div>
                                    {/* <div>{avatar}</div> */}
                                    <div>{this.props.group.organizer.username}</div>
                                </div>
                            </div>
                            <div className='right-members'>
                                <h3>Members</h3>
                                <div>
                                    <ul>{memberAvatars}</ul>
                                </div>
                            </div>
                </div>
            </div>
        )
    }



}

export default GroupShow;
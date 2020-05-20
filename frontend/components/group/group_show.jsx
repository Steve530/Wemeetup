import React from "react";
import { Link } from "react-router-dom";
import { fetchGroup } from "../../actions/group_actions";
import { Icon, InlineIcon } from '@iconify/react';
import mapzenIcon from '@iconify/icons-logos/mapzen';
import saguiIcon from '@iconify/icons-logos/sagui';
import mithrilIcon from '@iconify/icons-logos/mithril';

class GroupShow extends React.Component {
    constructor(props) {
      super(props);
      this.joinGroup = this.joinGroup.bind(this);
      this.leaveGroup = this.leaveGroup.bind(this);
    }
    componentDidMount(){
        this.props.fetchGroup(this.props.ownProps.match.params.groupId)
    }

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
        const memberAvatars = this.props.group.members_names.map((name, idx) => <li key={idx}><img src="https://image.flaticon.com/icons/png/128/149/149072.png" className='avatar' /><p>{name}</p></li>);
        if (Object.values(this.props.group).length === 0) { return null; }
        else if (!this.props.currentUser_id) {
            showjoin = <Link className="link-join" to="/login">Join Group</Link>
        } 
        else if ((this.props.currentUser_id) && (!this.props.group.members.includes(this.props.currentUser_id))) {
            showjoin = <Link className="link-join" to="" onClick={this.joinGroup}>Join Group</Link>
        } else {
            showjoin = <Link className="link-join"  to=""  onClick={this.leaveGroup}>Leave Group</Link>
        }
        
        if (!this.props.currentUser_id) {
            showmanage = "nomanage"
        } else if (this.props.currentUser_id === this.props.group.organizer.id) {
            showmanage = "manage"
        } else {
            showmanage = "nomanage"
        }
        return(
            <div>
                <hr className="groupshow-border"/>
                <p id='group_page_name'>{this.props.group.group_name}</p>
                <div>
                    <div className='icon1map'><Icon icon={mapzenIcon} /></div>
                    <label className="show-city">San Francisco, SF</label>
                   
                    <div className='icon2member'><Icon icon={mithrilIcon} /></div>
                    <div className='show-members'>Member ( {this.props.group.membersarray} ) </div>
                   
                    <div className='icon3organizer'><Icon icon={saguiIcon} /></div>
                    <div className='right-org'>
                                <h3 id='organizedby'>Organized By:</h3>
                                <div>
                                    <div id='organizer-name'>{this.props.group.organizer.username}</div>
                                </div>  
                            </div>

                    <button className={showmanage}> <Link className="link-join22" to={`/groups/${this.props.group.id}/manage`}>Manage Group</Link></button>
                    <button className='join_group_btn'>{showjoin}</button>

                </div>
                <div className="group-showpage">
                    <img src={`./${idd}.jpg`} />
                </div>
                <hr className="groupshow-border2"/>

                <h2 id='whatweabout'>What we're about</h2>
                <div className='aboutgroup'>
                    <p>{this.props.group.description}</p>
                </div>
               
                <div className='right-box'>
                            
                            <div className='right-members'>
                                <h1 id='memberfont'>Members</h1>
                                <div className='memberAvatars'>
                                        <ul>{memberAvatars}</ul>

                                </div>
                            </div>
                </div>
            </div>  
        )
    }



}

export default GroupShow;
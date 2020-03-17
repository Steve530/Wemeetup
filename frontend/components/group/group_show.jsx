import React from "react";
import { Link } from "react-router-dom";
import { fetchGroup } from "../../actions/group_actions";
class GroupShow extends React.Component {
    constructor(props) {
      super(props);

    }
    componentDidMount(){
        // debugger
        this.props.fetchGroup(this.props.ownProps.match.params.groupId)
    }
    render(){
        // debugger
        if (!this.props.group) {
            return null;
        }
        
        let idd = this.props.ownProps.match.params.groupId % 27
        // debugger
        return(
            <div>
                <p id='group_page_name'>{this.props.group.group_name}</p>
                <div className="group-showpage">
                    <img src={`./${idd}.jpg`} />
                </div>
                {/* <p id='description'>{this.props.group.description}</p> */}
                <button className='join_group_btn'>Join Group</button>
                <h2 id='whatweabout'>What we're about</h2>
                <div className='aboutgroup'>
                    <p>We just program every day . It's kind of nerdy, but kinda cool.
                         If ( you are nerdy in a cool way,) => join our group. It will be fun !</p>
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
            </div>
        )
    }



}

export default GroupShow;
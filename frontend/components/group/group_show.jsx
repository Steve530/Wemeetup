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
        let picnum;
        let idd = this.props.ownProps.match.params.groupId
     if (idd%10 ===1) picnum = window.one
     else if (idd%10 ===2) picnum = window.two
     else if (idd%10 ===3) picnum = window.thr
     else if (idd%10 ===4) picnum = window.fou
     else if (idd%10 ===5) picnum = window.fiv
     else if (idd%10 ===6) picnum = window.six
     else if (idd%10 ===7) picnum = window.sev
     else if (idd%10 ===8) picnum = window.eig
     else if (idd%10 ===9) picnum = window.nin
     else if (idd%10 ===0) picnum = window.ten

        if (!this.props.group) {
            return null;
        }
        return(
            <div>
                <p id='group_page_name'>{this.props.group.group_name}</p>
                <div className="group-showpage">
                    <img src={picnum} />
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
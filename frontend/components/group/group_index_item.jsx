import React from 'react';
import {withRouter} from 'react-router-dom';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/groups/${this.props.group.id}`)
  }
   
  render() {
      let idd = this.props.group.id % 31;
    return (
    
      <div className="group-index-item"  onClick={this.handleClick}>
        <div className="group-info">
            <img src={`./${idd}.jpg`} />
          <div className="group-info_text">
            <h4 id="group-item-name">{(this.props.group.group_name.length <= 20 ) ? this.props.group.group_name : this.props.group.group_name.slice(0, 18)+"..." }</h4>
            <p id="num-members">{this.props.group.membersarray} {(this.props.group.membersarray === 1) ? "member" : "members"}</p>
          </div>
        </div>
      </div>
          )
  }
}

export default withRouter(GroupIndexItem);


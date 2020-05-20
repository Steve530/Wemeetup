import React from 'react';
import {withRouter} from 'react-router-dom';

class AfterloginIndexItem extends React.Component {

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
        <div className={this.props.type==="yourgroups" ? "group-info-yours" : "group-info"}>
            <img src={`./${idd}.jpg`} />
          <div className="group-info_text">
            <h4 id="group-item-name">{this.props.group.group_name}</h4>
          </div>
        </div>
      </div>
          )
  }
}

export default withRouter(AfterloginIndexItem);
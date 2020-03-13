import React from 'react';
import {withRouter} from 'react-router-dom';

class GroupIndexItem extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/groups/${this.props.group.id}`)
  }

  render() {
    // const urls = `url(./pics/${}.jpg)`
      let picnum;
     if (this.props.group.id%10 ===1) picnum = window.one
     else if (this.props.group.id%10 ===2) picnum = window.two
     else if (this.props.group.id%10 ===3) picnum = window.thr
     else if (this.props.group.id%10 ===4) picnum = window.fou
     else if (this.props.group.id%10 ===5) picnum = window.fiv
     else if (this.props.group.id%10 ===6) picnum = window.six
     else if (this.props.group.id%10 ===7) picnum = window.sev
     else if (this.props.group.id%10 ===8) picnum = window.eig
     else if (this.props.group.id%10 ===9) picnum = window.nin
     else if (this.props.group.id%10 ===0) picnum = window.ten
    return (
      // <li style={{backgroundImage: `urls()`}} onClick={this.handleClick}>

      <div className="group-index-item"  onClick={this.handleClick}>
        <div className="group-info">
          <img src={picnum} />
          <div className="group-info_text">
            <h4 id="group-item-name">{this.props.group.group_name}</h4>
          </div>
        </div>
      </div>
      
      // </li>
    )
  }
}

export default withRouter(GroupIndexItem);


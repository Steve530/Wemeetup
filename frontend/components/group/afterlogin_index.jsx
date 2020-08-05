import React from 'react';
import AfterloginIndexItem from '../group/afterlogin_index_item';
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from '@iconify/react';
import bxSearch from '@iconify/icons-bx/bx-search';

class AfterloginIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      search: '',
     search_or_not: true

    }; 
    this.yesmenu = this.yesmenu.bind(this);
    this.nomenu = this.nomenu.bind(this);
    this.handle_search = this.handle_search.bind(this);
  }       
 componentDidMount() {
   this.props.fetchGroups();
 }   

 handle_search(){
 
  this.setState({ 
    search_or_not: false
  
  })
 }

 yesmenu(e) {  
  e.preventDefault();
  
  this.setState({ 
      yesmenu: true,
  }, () => {
      document.addEventListener('click', this.nomenu);
  });
}
nomenu() {
  this.setState({ yesmenu: false }, () => {
      document.removeEventListener('click', this.nomenu);
  });
}
 update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

 render() {
 
  return (
    <div className='afterlogin-groupandpics'>
                <section id="member-home-header"> 
                    <div id="member-home-bounds">
                          <h2 className="heroPrimary">Find your next event</h2>
                            <p >  
                              <span className="heroSecondary">
                              174 events in your groups  . 1,295 events near you  
                              </span> 
                            </p> 
                    </div> 
                </section> 
        <div className="all-groups-images">
           
             <div className='your_groups'>
                              <div className="search_container" > 
                                  <input id="search_input" type="text" value={this.state.search} onChange={this.update('search')} onClick={this.yesmenu}/>
                                    <div id="search_caption"  > Find groups that you're interested in!
                                    {/* <div id="search_caption"  > within<a className="search_caption2" href=""> 5 miles</a> of<a className="search_caption2" href="">  San Francisco, CA</a> */}
                                    </div>
                                            <div className="search_icon">
                                              <Icon width="25" height="25" icon={bxSearch} onClick={this.handle_search} />
                                            </div> 
                              </div>    
                    <div className="dropdown_allgroups"> 
                       {this.state.yesmenu ? (  
                              <div className="dropdown_allgroups2">
                                      <div>
                                          <ul className="dropdown_part1">{this.props.groups.slice(0,6).map((group)=> 
                                                <ul className="separate_groupname3">
                                                  <Link to={`/groups/${group.id}`} className="dropdown_groupnames">{group.group_name}</Link>
                                                </ul>
                                            )}</ul>
                                      </div>    
                                      <div>
                                          <ul className="dropdown_part2">{this.props.groups.slice(7,14).map((group)=> 
                                                <ul className="separate_groupname3">
                                                  <Link to={`/groups/${group.id}`} className="dropdown_groupnames">{group.group_name}</Link>
                                                </ul>
                                            )}</ul>   
                                      </div>         
                                      <div>            
                                          <ul className="dropdown_part3">{this.props.groups.slice(15,22).map((group)=> 
                                              <ul className="separate_groupname3">
                                                <Link to={`/groups/${group.id}`} className="dropdown_groupnames">{group.group_name}</Link>
                                              </ul>     
                                          )}</ul> 
                                      </div>
                                      <div> 
                                        <ul className="dropdown_part4">{this.props.groups.slice(23,28).map((group)=> 
                                            <ul className="separate_groupname3">
                                              <Link to={`/groups/${group.id}`} className="dropdown_groupnames">{group.group_name}</Link>
                                            </ul>
                                        )}</ul>    
                                      </div>  
                              </div>     
                          ) : ( null )
                        }
                    </div>
                   
            </div> 
            { this.state.search_or_not ?  (
                  <div >
                          <div className='your_groups_second_edit'>
                             
                              { this.props.groups.filter(group => group.members.includes(this.props.currentUser_id) ).map(group=> 
                              <AfterloginIndexItem type="yourgroups" key = {group.id} group={group}/>)}
                             <h2 id='afterlogin-urgroups'>YOUR GROUPS</h2>
                          </div>  

                             <hr className="afterlogin-border"/>
                            <div className="groupsbelow">
                                <h4 id='text-suggestedgroup'>SUGGESTED GROUPS</h4>
                                <div className='afterlogin_group_pic'>
                                  { this.props.groups.map(group=> <AfterloginIndexItem type="allgroups"  key = {group.id} group={group}/>)}
                                </div>  
                          </div>   
                  </div>  
            ) : (
              <div>
                    <h4 id='Search_Result'>Search Result:</h4>
                      <div className='afterlogin_search_pic'>
                        {this.props.groups.filter(group => group.group_name.toLowerCase().includes(this.state.search)||group.description.toLowerCase().includes(this.state.search)).map(
                          group => <AfterloginIndexItem type="allgroups"  key = {group.id} group={group}/>
                        )}
                        
                      </div> 
              </div>
            )} 
        </div>
       
     </div>  
    )
       
   }
};




export default AfterloginIndex;
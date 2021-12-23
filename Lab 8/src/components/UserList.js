import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import ButtonClick from "./ButtonClick";
import Preloader from "./Preloader";
import BestFriendsList from "./BestFriendsList";

class UsersList extends React.Component {
  state = {
    userInfo: undefined
  };

  async gettingUsers(){
    this.setState({preloader: true});
    const api_url = await fetch("https://randomuser.me/api/?results=10");
    const data = await api_url.json();
    this.setState({userInfo: data.results, button: true});
    this.setState({preloader: false});
    
  };

   

  render() {
      if (this.state.preloader){
      return <Preloader />;
    }
      
    return (
        
      <div className="users">
        <ButtonClick onClick={this.gettingUsers.bind(this)} />
        {this.state.userInfo &&
          this.state.userInfo.map((u) => <UserCard user={u} /> )}
        <BestFriendsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps)(UsersList);
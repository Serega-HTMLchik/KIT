import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendCard from "./BestFriendsCard";

class BestFriendsList extends Component {
  render() {
    return (
      <div className="friends" style={{marginLeft: 'auto',marginRight: 'auto', width:'90%', padding:'10px'}}>
       <h3 style={{textAlign:'center', marginTop:'0'}}>Друзья</h3>
        {this.props.friends.map((user) => (
          <BestFriendCard friend={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(BestFriendsList);
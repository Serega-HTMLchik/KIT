import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromFriends } from "./../r/actions";
import Button from "./Button";
import UserAvatar from "./UserAvatar";

const BestFriendCard = (props) => {
  return (
    <div style={{marginLeft:'auto', marginRight:'auto', width:'200px', border:'1px dotted #0000ff', padding:'10px', marginBottom:'10px'}}>
      <div>
        <UserAvatar src={props.friend.photo} width={100} height={100} />
        <div>
          <h5 style={{textAlign:'center'}}>
            {props.friend.name} {props.friend.name.last}
          </h5>
          <p>
            <span>From:</span> {props.friend.from}
          </p>
          <p>
            <span>Phone:</span> {props.friend.phone}
          </p>
          <Button
            label="Remove from friends"
            onClick={() => props.deleteFromFriends(props.friend)}
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteFromFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
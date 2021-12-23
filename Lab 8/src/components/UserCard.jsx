import React from "react";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToFriends } from "./../r/actions";

const UserCard = (props) => {
  return (
    <div style={{marginLeft: 'auto',marginRight: 'auto', width:'200px', border:'1px dotted  #000', marginBottom:'20px', padding:'10px'}}>
      <div  >
        <UserAvatar src={props.user.picture.large} width={100} height={100} />
        <div>
          <h5 style={{textAlign:'center'}}>
            {props.user.name.first} {props.user.name.last}
          </h5>
          <p>
            <span>From:</span> {props.user.location.city}
          </p>
          <p>
            <span>Phone:</span> {props.user.phone}
          </p>
          <Button
            label="Add to friends"
            onClick={() => props.addToFriends(props.user)}
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
  return bindActionCreators({ addToFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
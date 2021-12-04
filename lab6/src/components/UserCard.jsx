import React from 'react';
import UserAvatar from "./UserAvatar";

const UserCard = function(props){    
    console.log(props);
    return(
        <div className="UserCard-cantainer">
            <UserAvatar src={props.user.picture}/>
            <h5>Gender: {props.user.gender}</h5>
            <h5>{props.user.name.title} {props.user.name.first} {props.user.name.last}</h5>
            <p>Country: {props.user.location.country} City: {props.user.location.city}</p>
            <p>City: {props.user.location.city}</p>
            <p>email: {props.user.email}</p>
            <p>phone: {props.user.phone}</p>
            
            
        </div>
    )
}

export default UserCard;
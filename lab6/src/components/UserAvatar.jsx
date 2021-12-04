import React from 'react';
const UserAvatar = function(props){    
    console.log(props);
    return(
        <div>
            <img src={props.src.large} />
        </div>
        
    )
}

export default UserAvatar;
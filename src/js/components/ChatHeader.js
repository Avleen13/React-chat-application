import React from 'react';
import pic from "../../images/pic.jpg";



const ChatHeader = () => {
    return (
<div className="chat-header clearfix">
          <img src={pic} alt="avatar" />
          
          <div className="chat-about">
            <div className="chat-with">Avleen</div>
            <div className="chat-num-messages">Online</div>
          </div>
          <i className="fa fa-star"></i>
        </div> 

)
}

export default ChatHeader;        
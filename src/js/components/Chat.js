import React from 'react';
import MessageSend from 'components/MessageSend';
import pic from "../../images/pic.jpg";
import ChatHeader from 'components/ChatHeader';



const Chat = () => {
    return (
        <div className="chat">
        <ChatHeader/>
        <div className="chat-history" id="chat-window">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:10 AM, Today</span>
                
                
              </div>
              <div className="message other-message float-right">
                How are you?
              </div>
            </li>
            
            <li>
              <div className="message-data">
               
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message">
                just got free. u tell?
              </div>
            </li>
            
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                
                
              </div>
              <div className="message other-message float-right">
               lets meet today.
              </div>
            </li>
            
            <li>
              <div className="message-data">
                
                <span className="message-data-time">10:20 AM, Today</span>
              </div>
              <div className="message my-message">
                yes, i was thinking abt meeting u today. see u soon then
              </div>
            </li>
            
            <li>
              <div className="message-data">
               
                <span className="message-data-time">10:31 AM, Today</span>
              </div>
              <i className="fa fa-circle online"></i>
              <i className="fa fa-circle online" ></i>
              <i className="fa fa-circle online" ></i>
            </li>
            
          </ul>
          
        </div> 
        
        <MessageSend />
        
      </div> 
    )
  }
  
  

export default Chat;

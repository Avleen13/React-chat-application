import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from 'components/Greeting';
import 'css/styles.css';
import chat from "./images/chat.jpg";
import pic from "./images/pic.jpg";



const ContactsList = () => {
  
    return (
        <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <ul className="list">
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Abhinav </div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Gurleen</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 7 mins ago
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Mommy </div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Harman</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Papa</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Sukh</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 30 mins ago
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Vanita</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 10 hours ago
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Prabh</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
          
          <li className="clearfix">
            <img src={chat} alt="avatar" />
            <div className="about">
              <div className="name">Mohit</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> offline since Oct 28
              </div>
            </div>
          </li>
          
         
        </ul>
      </div>
    )
  }

  const Chats = () => {
    return (
        <div className="chat">
        <div className="chat-header clearfix">
          <img src={pic} alt="avatar" />
          
          <div className="chat-about">
            <div className="chat-with">Avleen</div>
            <div className="chat-num-messages">Online</div>
          </div>
          <i className="fa fa-star"></i>
        </div> 
        
        <div className="chat-history">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:10 AM, Today</span>
                
                
              </div>
              <div className="message other-message float-right">
                Hi babe, how are you? What's going on?
              </div>
            </li>
            
            <li>
              <div className="message-data">
               
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message">
                Nothing much..just got free from my assignments. u tell?
              </div>
            </li>
            
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                
                
              </div>
              <div className="message other-message float-right">
                I am also doing my assignments. lets meet today.
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
        
        <div className="chat-message clearfix">
          <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                  
          <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
          <i className="fa fa-file-image-o"></i>
          
          <button>Send</button>
  
        </div> 
        
      </div> 
    )
  }

const App = () => {
	return (
		<div className="container clearfix">
				<ContactsList />
                <Chats />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));



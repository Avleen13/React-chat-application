import React from 'react';
import chat from "../../images/chat.jpg";
import 'css/styles.css';


const contacts = ["Abhinav", "Gurleen", "Mommy", "Harman", "Papa", "Sukh", "Prabh", "Vanita", "Mohit"];
const check = ["Online", "Offline", "Online", "Online", "Offline", "Online", "Offline", "Online", "Offline"];


let chat1 = (event) => {

  document.getElementById("chat-window").innerHTML = `
<ul>
    <li class="clearfix">
      <div class="message-data align-right">
        <span class="message-data-time" >10:10 AM, Today</span>        
      </div>
      <div class="message other-message float-right">
        Hi babe, how are you? What's going on?
      </div>
    </li>
    <li>
    <div class="message-data">
     
      <span class="message-data-time">10:12 AM, Today</span>
    </div>
    <div class="message my-message">
      Nothing much..just got free from my assignments. u tell?
    </div>
  </li>
  
  <li class="clearfix">
    <div class="message-data align-right">
      <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
      
      
    </div>
    <div class="message other-message float-right">
      I am also doing my assignments. lets meet today.
    </div>
  </li>
  <li>
  <div class="message-data">
   
    <span class="message-data-time">09:12 AM, Yesterday</span>
  </div>
  <div class="message my-message">
   Me good. u tell?
  </div>
</li>

<li class="clearfix">
  <div class="message-data align-right">
    <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
    
  </div>
  <div class="message other-message float-right">
     Lets meet today.
  </div>
</li>
    <li>
      <div class="message-data">
       
        <span class="message-data-time">10:31 AM, Today</span>
      </div>
      <i class="fa fa-circle online"></i>
      <i class="fa fa-circle online" ></i>
      <i class="fa fa-circle online" ></i>
    </li>

    
  </ul>
   `

}

let chat2 = (event) => {

  document.getElementById("chat-window").innerHTML = `
  <ul>
    <li class="clearfix">
      <div class="message-data align-right">
        <span class="message-data-time" >09:10 AM, Yesterday</span>
        
        
      </div>
      <div class="message other-message float-right">
        How are you?
      </div>
    </li>
    <li>
              <div class="message-data">
               
                <span class="message-data-time">09:12 AM, Yesterday</span>
              </div>
              <div class="message my-message">
               Me good. u tell?
              </div>
            </li>
            
            <li class="clearfix">
              <div class="message-data align-right">
                <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                
              </div>
              <div class="message other-message float-right">
                 Lets meet today.
              </div>
            </li>
    
    <li>
    <div class="message-data">
     
      <span class="message-data-time">09:12 AM, Yesterday</span>
    </div>
    <div class="message my-message">
     Me good. u tell?
    </div>
  </li>
  
  <li class="clearfix">
    <div class="message-data align-right">
      <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
      
    </div>
    <div class="message other-message float-right">
       Lets meet today.
    </div>
  </li>
  <li>
      <div class="message-data">
       
        <span class="message-data-time">10:31 AM, Today</span>
      </div>
      <i class="fa fa-circle online"></i>
      <i class="fa fa-circle online" ></i>
      <i class="fa fa-circle online" ></i>
    </li>
    
  </ul>
   `

}

const ContactList = () => {
  return (
    <div className="people-list" id="people-list">
      <div className="search">
        <input type="text" placeholder="search" />
        <i className="fa fa-search"></i>
      </div>
      <ul className="list">
        <li className="clearfix" onClick={chat1}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name"> {contacts[0]}</div>
            <div className="status">
              <i className="fa fa-circle online"></i>{check[0]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat2}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[1]}</div>
            <div className="status">
              <i className="fa fa-circle offline"></i> {check[1]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat1}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[2]} </div>
            <div className="status">
              <i className="fa fa-circle online"></i>{check[2]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat2}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[3]}</div>
            <div className="status">
              <i className="fa fa-circle online"></i>{check[3]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat1}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[4]}</div>
            <div className="status">
              <i className="fa fa-circle offline"></i> {check[4]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat2}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[5]}</div>
            <div className="status">
              <i className="fa fa-circle online"></i> {check[5]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat1}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[6]}</div>
            <div className="status">
              <i className="fa fa-circle offline"></i> {check[6]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat2}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[7]}</div>
            <div className="status">
              <i className="fa fa-circle online"></i> {check[7]}
            </div>
          </div>
        </li>

        <li className="clearfix" onClick={chat1}>
          <img src={chat} alt="avatar" />
          <div className="about">
            <div className="name">{contacts[8]}</div>
            <div className="status">
              <i className="fa fa-circle offline"></i> {check[8]}
            </div>
          </div>
        </li>


      </ul>
    </div>
  )
}

export default ContactList;
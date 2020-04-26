import React from 'react';
import chat from "../../images/chat.jpg";

const ContactList=()=>{
    return(
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

export default ContactList;
import "./reply.css";
import React from 'react';
import mainAvatar from "../../assets/avatars/image-juliusomo.png";

const Reply = ({placeholder, action}) => {
  return (
    <div className="userReplyContainer" style={ action === "REPLY" ? {marginTop: "-10px"} : {}}>
      <div>
        <img src={mainAvatar} alt="mainAvatar" className="avatar"/>
      </div>

      <textarea className="replyArea" placeholder={placeholder}></textarea>
      
      <div>
        <button className="sendBtn">{action}</button>
      </div>
    </div>
  )
}

export default Reply
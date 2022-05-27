import "./reply.css";
import React from 'react';
import mainAvatar from "../../assets/avatars/image-juliusomo.png";

const Reply = ({placeholder, action}) => {
  return (
    <div className="userReplyContainer" style={ action === "REPLY" ? {marginTop: "-10px"} : {}}>
      <textarea className="replyArea" placeholder={placeholder}></textarea>
      <img src={mainAvatar} alt="mainAvatar" className="avatar"/>
      <button className="sendBtn">{action}</button>
    </div>
  )
}

export default Reply
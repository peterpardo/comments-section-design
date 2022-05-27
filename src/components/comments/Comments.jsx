import "./comments.css";
import React from 'react'
import Comment from "../comment/Comment";

const Comments = () => {
  return (
    <>
      <div className="commentsContainer">
        <Comment user="amyrobson"/>

        <div className="replyContainer">
          <Comment user="amyrobson"/>
          <Comment user="juliusomo"/>
        </div>
      </div>
    </>
  )
}

export default Comments
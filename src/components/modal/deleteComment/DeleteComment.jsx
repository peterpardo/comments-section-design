import "./deleteComment.css";
import React from 'react';

const DeleteComment = ({ openDeleteModal }) => {
  return (
    <div className="deleteModalContainer">
      <div className="dmWrapper">
        <h1 className="dmTitle">Delete Comment</h1>
        <p className="dmDesc">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className="dmBtnContainer">
          <button className="btn cancelBtn">NO, CANCEL</button>
          <button className="btn confirmBtn">YES, DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteComment
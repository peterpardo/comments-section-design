import "./deleteComment.css";
import React from 'react';

const DeleteComment = ({ openDeleteModal, setOpenDeleteModal }) => {
  return (
    <div className="deleteModalContainer">
      <div className="dmWrapper">
        <h1 className="dmTitle">Delete Comment</h1>
        <p className="dmDesc">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className="dmBtnContainer">
          <button className="cancelBtn" onClick={() => setOpenDeleteModal(!openDeleteModal)}>NO, CANCEL</button>
          <button className="confirmBtn" onClick={() => setOpenDeleteModal(!openDeleteModal)}>YES, DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteComment
import React from 'react';
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  CreateComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./actionRealtime";

import './comment.css'


import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {comment$} from '../../redux/selector'


  const Comments = ({  idBlog,currentUserId}) => {


  const dispatch = useDispatch()
  const comments = useSelector(comment$)


  const [backendComments, setBackendComments] = useState([]);

  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId ==='null'
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

      


  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      dispatch(actions.createComments.createCommentsRequest(comment))
      setActiveComment(null);
    },[dispatch]);
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId  
        );
          
        setBackendComments(updatedBackendComments);
      });
    }
  };


  useEffect(() => {
    dispatch(actions.getComments.getCommentsRequest())
    setBackendComments(comments)

  },[dispatch]);


  return (
    <div className="comments">
      <div className="comments-container">
        {rootComments.map((rootComment) => {

          console.log('[idddddd]',rootComment.blogId)

          if(rootComment.blogId==idBlog){

            return(
              <Comment    
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUserId}
            />
            )
          }
         
      })}
      </div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />

    </div>
  );
};

export default Comments;

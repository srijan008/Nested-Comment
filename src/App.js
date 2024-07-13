import React, { useState } from 'react';
import Comments from './Comment/comment';
import { commentData } from './Data/CommentData';
import useCommentFunctions from './UseFunction';

const App = () => {
  const [comments, setComments] = useState(commentData);
  const { addComments, deleteComments } = useCommentFunctions();

  const handleAddComment = (commentId, newComment) => {
    const updatedComments = addComments(comments, commentId, newComment);
    setComments({ ...updatedComments });
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = deleteComments(commentId, comments);
    setComments({ ...updatedComments });
  };

  return (
    <div>
      <Comments 
        key={comments.id} 
        comment={comments} 
        deleteComment={handleDeleteComment} 
        addComment={handleAddComment} 
      />
    </div>
  );
};

export default App;

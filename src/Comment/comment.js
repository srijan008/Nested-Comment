import { useState } from "react";
import "./comment.css";

const Comments = ({ comment, addComment, deleteComment }) => {
  const [input, setInput] = useState("");
  const [showBox, setShowBox] = useState(false);
  //const[replies, setReplies] = useState('');

  const addFinal = () => {
    const commentId = comment.id;
    const newComment = {
        id: Date.now(),
        text: input,
        replies: []
    }
    addComment(commentId, newComment)
    setShowBox(!showBox)
  }

  return (
    <div>
      <div className="comment-container">
        <h3>{comment.text}</h3>
        {showBox && (
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        )}
        {!showBox ? (
          <div>
            <button
              onClick={() => {
                setShowBox(!showBox);
              }}
            >
              Reply
            </button>
            <button onClick={() => (deleteComment(comment.id))}>Delete</button>
          </div>
        ) : (
          <div>
            <button onClick={addFinal}>Add</button>
            <button onClick={() => setShowBox(!showBox)}>Cancel</button>
          </div>
        )}
      </div>
      <div style={{ paddingLeft: 20 }}>
        {comment?.replies?.map((ele) => (
          <Comments key={ele.id} comment={ele} deleteComment = {deleteComment} addComment = {addComment}/>
        ))}
      </div>
    </div>
  );
};

export default Comments;

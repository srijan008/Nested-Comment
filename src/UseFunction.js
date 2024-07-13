const useCommentFunctions = () => {
    const addComments = (tree, commentId, newComment) => {
      if (tree.id === commentId) {
        tree.replies.unshift(newComment);
        return tree;
      }
  
      const updatedTree = tree.replies.map((ele) => addComments(ele, commentId, newComment));
      return { ...tree, replies: updatedTree };
    };
  
    const deleteComments = (deleteId, tree) => {
      const updatedReplies = tree.replies.filter((reply) => reply.id !== deleteId);
  
      const updatedTree = updatedReplies.map((ele) => deleteComments(deleteId, ele));
      
      return { ...tree, replies: updatedTree };
    };
  
    return { addComments, deleteComments };
  };
  
  export default useCommentFunctions;
  
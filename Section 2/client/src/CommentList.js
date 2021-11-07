import React from "react";

const CommentList = ({ comments }) => {
  comments = comments || [];
  // const [comments, setComments] = useState({});

  // const fetchCommentsByPostId = async () => {
  //   try {
  //     const resp = await axios.get(
  //       `http://localhost:${process.env.REACT_APP_PORT_COMMENT}/posts/${postId}/comments`
  //     );
  //     setComments(resp.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchCommentsByPostId();
  // }, []);

  const renderComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderComments}</ul>;
};

export default CommentList;

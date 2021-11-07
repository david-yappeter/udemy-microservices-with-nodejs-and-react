import React from "react";
import axios from "axios";
import useForm from "./utils/useForm";

const CommentCreate = ({ postId }) => {
  const initialState = {
    content: "",
  };

  const { input, onChange, onSubmit } = useForm(initialState, async () => {
    try {
      const resp = await axios.post(
        `http://localhost:${process.env.REACT_APP_PORT_COMMENT}/posts/${postId}/comments`,
        input
      );
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            name="content"
            onChange={onChange}
            value={input.content}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary"> Submit </button>
      </form>
    </>
  );
};

export default CommentCreate;

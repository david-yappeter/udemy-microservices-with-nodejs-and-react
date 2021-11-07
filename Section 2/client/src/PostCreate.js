import React from "react";
import useForm from "./utils/useForm";
import axios from "axios";

const PostCreate = () => {
  const initialState = {
    title: "",
  };

  const { input, onChange, onSubmit } = useForm(initialState, async () => {
    try {
      const result = await axios.post(
        `http://localhost:${process.env.REACT_APP_PORT_POST}/posts`,
        input
      );

      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={input.title}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary"> Submit </button>
      </form>
    </div>
  );
};

export default PostCreate;

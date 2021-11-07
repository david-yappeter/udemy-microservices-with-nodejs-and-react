import { useState } from "react";

const useForm = (initialState, callback) => {
  const [input, setInput] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    callback();
    setInput(initialState);
  };

  return { input, onChange, onSubmit };
};

export default useForm;

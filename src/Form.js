import React from "react";

const Form = ({ onSubmit, inputProps }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <label className="label">{inputProps.label1}</label>
      <input
        type={inputProps.type}
        name={inputProps.name}
        value={inputProps.value}
      />

      <label className="label">{inputProps.label2}</label>
      <input
        type={inputProps.type}
        name={inputProps.name}
        value={inputProps.value}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

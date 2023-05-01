import React from "react";
import Form from "./Form";

const Page2 = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Page 2</h1>
      <Form
        onSubmit={handleSubmit}
        inputProps={{
          label2: "email",
          label1: "query",
          type: "email",
          name: "input2",
          value: ""
        }}
      />
    </div>
  );
};

export default Page2;

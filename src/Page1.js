import React from "react";
import Form from "./Form";

const Page1 = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Page 1</h1>
      <Form
        onSubmit={handleSubmit}
        inputProps={{
          label2: "phone",
          label1: "name",
          type: "text",
          name: "input1",
          value: ""
        }}
      />
    </div>
  );
};

export default Page1;

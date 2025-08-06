import React from "react";

function ActionState() {
  const handleSubmit = async (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //    console.log("Form submitted", { name, password });

    if (name && password) {
      return { message: "Form submitted successfully", name, password };
    } else {
      return { error: "Failed to submit form, please try again", name, password };
    }
  };
  const [data, action, pending] = React.useActionState(handleSubmit, undefined);
  return (
    <div>
      <h2>useActionState Hook in React</h2>
      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name" /> <br /> <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
        />{" "}
        <br /> <br />
        <button disabled={pending}>Submit</button>
      </form>
      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
      {data?.message && <p style={{ color: "green" }}>{data.message}</p>}

      <h3>Name: {data?.name} </h3> 
      <h3>Password: {data?.password} </h3>
    </div>
  );
}

export default ActionState;

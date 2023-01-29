import React, { useContext, useState } from "react";
import { FormContext } from "../../context/form-context";
import Button from "../button/button.component";
import "./goal-input.styles.css";

const GoalInput = () => {
  const [valid, setValid] = useState(true);
  const [formInput, setFormInput] = useState("");

  const { setNewGoal, addNewGoals } = useContext(FormContext);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setFormInput(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formInput.trim()) {
      setValid(false);
      console.log("empty");
      return;
    }

    addNewGoals(formInput);
    setValid(true);
    setFormInput("");
  };

  return (
    <form className={`${!valid ? "invalid" : ""} form-control`} onSubmit={onSubmitHandler}>
      <label>Add Goal</label>
      <input type="text" onChange={onChangeHandler} value={formInput} />
      <Button>Add New</Button>
    </form>
  );
};

export default GoalInput;

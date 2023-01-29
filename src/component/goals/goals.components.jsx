import React, { useContext } from "react";
import { FormContext } from "../../context/form-context";
import "./goals.styles.css";

const Goals = ({ value }) => {
  const { id, text } = value;
  const { courseGoals, setCourseGoals } = useContext(FormContext);

  const onClickHandler = () => {
    const updated = [...courseGoals];
    const filtered = updated.filter((goal) => goal.id !== id);
    setCourseGoals(filtered);
  };

  return (
    <li className="goal-item " onClick={onClickHandler}>
      {text}
    </li>
  );
};

export default Goals;

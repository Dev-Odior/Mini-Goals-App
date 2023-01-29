import React, { useContext } from "react";
import { FormContext } from "../../context/form-context";
import Goals from "../goals/goals.components";
import "./goals-list.styles.css";

const GoalsList = () => {
  const { courseGoals } = useContext(FormContext);

  return (
    <ul className="goal-list">
      {courseGoals.map((goal) => {
        return <Goals key={goal.id} value={goal} />;
      })}
    </ul>
  );
};

export default GoalsList;

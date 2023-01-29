import { useContext } from "react";
import "./App.css";
import GoalInput from "./component/goal-input/goal-input.component";
import GoalsList from "./component/goals-list/goals-list.component";
import { FormContext } from "./context/form-context";

function App() {
  const { courseGoals } = useContext(FormContext);

  return (
    <>
      <section id="goal-form">
        <GoalInput />
      </section>
      <section className="goals">
        {courseGoals.length <= 0 ? (
          <p className="no-items">You dont have any goals. Do you want to add ?</p>
        ) : (
          <GoalsList />
        )}
      </section>
    </>
  );
}

export default App;

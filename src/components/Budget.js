import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const { currency } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value > 20000) {
      alert("Budget cannot exceed 20,000");
      return; // prevent updating the state
    }
    setNewBudget(event.target.value);
    dispatch({ type: "SET_BUDGET", payload: parseInt(event.target.value, 10) });
  };

  return (
    <div className="alert alert-secondary">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Budget: {currency} </span>
        </div>
        <input className="form-control" type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
      </div>
    </div>
  );
};
export default Budget;

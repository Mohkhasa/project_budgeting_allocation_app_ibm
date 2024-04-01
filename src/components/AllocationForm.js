import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds £" + remaining);
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }

    // Reset form fields after submission
    setName("");
    setCost("");
    setAction("");
  };

  return (
    <div className="allocation-form">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="departmentSelect">
                  Department
                </label>
              </div>
              <select className="form-control" id="departmentSelect" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="Marketing" name="marketing">
                  {" "}
                  Marketing
                </option>
                <option value="Sales" name="sales">
                  Sales
                </option>
                <option value="Finance" name="finance">
                  Finance
                </option>
                <option value="HR" name="hr">
                  HR
                </option>
                <option value="IT" name="it">
                  IT
                </option>
                <option value="Admin" name="admin">
                  Admin
                </option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="actionSelect">
                  Allocation
                </label>
              </div>
              <select className="form-control" id="actionSelect" onChange={(event) => setAction(event.target.value)}>
                <option defaultValue value="Add">
                  Add
                </option>
                <option value="Reduce">Reduce</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="input-group">
              <label className="input-group-text" htmlFor="costInput">
                {currency}
              </label>
              <input type="number" className="form-control" id="costInput" value={cost} required onChange={(event) => setCost(event.target.value)} />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={submitEvent}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;

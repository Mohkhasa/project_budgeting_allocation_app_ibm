import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { IoAddCircle, IoCloseCircle } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td>
        <IoAddCircle className="text-success pointer" size="1.5em" onClick={(event) => increaseAllocation(props.name)} />
      </td>
      <td>
        <IoMdRemoveCircle className="text-danger pointer" size="1.5em" onClick={(event) => decreaseAllocation(props.name)} />
      </td>
      <td>
        <IoCloseCircle className="text-danger pointer" size="1.5em" onClick={handleDeleteExpense}></IoCloseCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;

import React from "react";
import "./Input.css";
import { useReducer } from "react";
const inputreduser = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isvalid: action.isvalid,
      };
    }
    default: {
      return state;
    }
  }
};

function Input(props) {
  const [maininput, dispatch] = useReducer(inputreduser, {
    value: "",
    isvalid: false,
  });

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      isvalid: true,
    });
  };
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          maininput.isvalid ? "success" : "error"
        }`}
        value={maininput.value}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${
          maininput.isvalid ? "success" : "error"
        }`}
        value={maininput.value}
        onChange={onChangeHandler}
      />
    );
  return <div>{element}</div>;
}

export default Input;

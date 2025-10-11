import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  age: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateField":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return initialState;
    default:
      state;
  }
}

const User = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value,
    });
    // ✅ Submit ke baad form reset karna
    dispatch({ type: "reset" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={state.age}
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <button>Submit</button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default User;

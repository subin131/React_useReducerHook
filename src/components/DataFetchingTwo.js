import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Sucess":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "Error":
      return {
        loading: false,
        post: {},
        error: "Something went wrong patner",
      };
    default:
      return state;
  }
};
function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get()
      .then((response) => {
        dispatch({ type: "Sucess", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "Error" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;

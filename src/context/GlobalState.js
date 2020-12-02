import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  user: "",
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const userInfo = (user) => {
    dispatch({ type: "USER_INFO", payload: user });
    console.log("dispatch ", user);
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        userInfo,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

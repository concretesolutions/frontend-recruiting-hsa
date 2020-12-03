import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "",
  userRepository: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state]);

  //actions
  const userInfo = (user) => {
    dispatch({ type: "USER_INFO", payload: user });
  };

  const userRepo = (userRepository) => {
    dispatch({ type: "USER_REPO", payload: userRepository });
    console.log("dispatch ", userRepository);
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        userRepository: state.userRepository,
        userInfo,
        userRepo,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

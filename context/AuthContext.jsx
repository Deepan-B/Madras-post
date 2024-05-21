/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

const initialState = {
  user: localStorage.getItem('user') != undefined ? JSON.parse(localStorage.getItem('user')) : null ,
  token: localStorage.getItem('token') || null,
  type: localStorage.getItem('type') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
        type: null
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        type: action.payload.type,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        type: null
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
      localStorage.setItem('token', state.token)
      localStorage.setItem('type', state.type)
    } , [state])

  return (
    <authContext.Provider
      value={{
        user: state.user,
        type: state.type,
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

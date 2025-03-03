import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    Object.keys(actions).map(key => {
      boundActions[key] = actions[key](dispatch);
    });

    return (
      <Context.Provider value={{ state: state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

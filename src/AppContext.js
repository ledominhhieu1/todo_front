import React, { createContext, useContext, useReducer } from "react";
import { loadState, saveState } from "./local-storage";
import { format } from "date-fns";
import axios from "axios"; 

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext)[0];
}

export function useAppReducer() {
  return useContext(AppContext)[1];
}

export function useItems() {
  let { items } = useAppState();
 
  const pending = items.filter(item => item.isCompleted === false);
  // const paused = items.filter(item => item.status === "paused");
  const completed = items.filter(item => item.isCompleted === true);

  return { pending, completed };
}

const appStateReducer = (state, action) => {
  let nd = new Date();
  let currentDate = {
    day: format(nd, "dd"),
    dayDisplay: format(nd, "d"),
    month: format(nd, "MM"),
    monthDisplay: format(nd, "MMM"),
    year: format(nd, "y"),
    weekday: format(nd, "EEEE")
  };

  switch (action.type) {
    case "ADD_ITEM": {
      const newState = { ...state, items: state.items.concat(action.item) };
      saveState(newState);
      return newState;
    }
    case "UPDATE_ITEM": {
      const newItems = state.items.map(i => {
        if (i._id === action.item._id) {
          return Object.assign({}, i, {
            isCompleted: action.item.isCompleted
          });
        }
        return i;
      });
      const newState = { ...state, items: newItems };
      saveState(newState);
      return newState;
    }
    case "DELETE_ITEM": {
      const newState = {
        ...state,
        items: state.items.filter(item => item._id !== action.item._id)
      };
      saveState(newState);
      return newState;
    }
    case "RESET_ALL": {
      const newItems = state.items
        .filter(item => item.isCompleted !== true)
        .map(i => {
          if (i.isCompleted === true) {
            return Object.assign({}, i, {
              isCompleted: false
            });
          }
          return i;
        });
      const newState = { ...state, items: newItems, date: currentDate };
      saveState(newState);
      return newState;
    }
    default:
      return state;
  }
};

export function AppStateProvider({ children }) {
  let initialState = loadState();

  if (initialState === undefined) {
    let nd = new Date();

    initialState = {
      items: [],
      date: {
        day: format(nd, "dd"),
        dayDisplay: format(nd, "d"),
        month: format(nd, "MM"),
        monthDisplay: format(nd, "MMM"),
        year: format(nd, "y"),
        weekday: format(nd, "EEEE")
      }
    };
  }

  saveState(initialState);

  const value = useReducer(appStateReducer, initialState);
  return (
    <div className="App">
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}

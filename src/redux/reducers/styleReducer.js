import { styleActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  toggleDrawerSidebar: false,
  toggleDrawerMainNav:false
};

export const styleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case styleActionTypes.TOGGLE_DRAWER_SIDEBAR:
      return {
        ...state,
        toggleDrawerSidebar: payload,
      };
    case styleActionTypes.TOGGLE_DRAWER_MAINNAV:
      return {
        ...state,
        toggleDrawerMainNav: payload,
      };
    default:
      return state;
  }
};

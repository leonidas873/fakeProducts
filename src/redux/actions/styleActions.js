import { styleActionTypes } from "../actionTypes/actionTypes"

export const toggleDrawerSidebar = (bool)=>{
    return {
        type: styleActionTypes.TOGGLE_DRAWER_SIDEBAR,
        payload:bool
    }
}

export const toggleDrawerMainNav = (bool)=>{
    return {
        type: styleActionTypes.TOGGLE_DRAWER_MAINNAV,
        payload:bool
    }
}
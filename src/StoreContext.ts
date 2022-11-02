import React from "react";
import {EmptyObject, Store} from "redux";
import {ActionsTypes} from "./redux/redux-store";

type StoreContextType = Store<EmptyObject & { profilePage: never; dialogsPage: never; sidebar: {}; }, ActionsTypes>

const StoreContext = React.createContext({} as StoreContextType);

export default StoreContext;
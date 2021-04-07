import { createStore } from "redux";

import { reducers } from "./reducer/index";

//Not use middleware
const store = createStore(reducers, {});

export default store;

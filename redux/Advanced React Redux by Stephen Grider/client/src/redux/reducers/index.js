//doin it without the toolkit (I don't like it as much)

const { combineReducers } = require("redux");
import userAuth from "./auth";

const reducer = combineReducers({ userAuth: userAuth });

export default reducer;

const store = createStore(reducer);

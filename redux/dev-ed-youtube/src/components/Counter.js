import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../reduxReducers/counterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  return <div>Counter</div>;
};

export default Counter;

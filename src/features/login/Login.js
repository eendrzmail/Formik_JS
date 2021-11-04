import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login, logout, getUser } from "./counterSlice";

export function LoginComponent() {
  const dispatch = useDispatch();
  const [User, setUser] = useState();

  return <button>asd</button>;
}

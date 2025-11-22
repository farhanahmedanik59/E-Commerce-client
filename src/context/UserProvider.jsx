"use client";
import React, { useState } from "react";
import { UserContex } from "./UserContex";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userinfo = {};
  return <UserContex value={userinfo}>{children}</UserContex>;
};

export default UserProvider;

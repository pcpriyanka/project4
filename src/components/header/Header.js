import React, { Fragment, useContext } from "react";
import { userContext } from "../../utils/UserContext";

export default function Header() {
  const userObj = useContext(userContext)
  console.log(userObj)
  return (
    <>
      <h1 style={{ backgroundColor: "dodgerblue", textAlign: "center",margin:0 }}>
        This is my header
      </h1>
    </>
  );
}

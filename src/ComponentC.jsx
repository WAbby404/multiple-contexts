import React, { useContext } from "react";
import { UserContext, ThemeContext } from "./ComponentA";

function ComponentC(props) {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h1>{`Bye ${user}`}</h1>
      <h1>{`The Theme is ${theme}`}</h1>
    </div>
  );
}

export default ComponentC;

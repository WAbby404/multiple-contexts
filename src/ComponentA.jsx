import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
export const ThemeContext = createContext();

function ComponentA(props) {
  const [user, setUser] = useState("Abby");
  const [theme, setTheme] = useState("white");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h1>{`Hi ${user}`}</h1>
      <h1>{`The Theme is ${theme}`}</h1>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default ComponentA;

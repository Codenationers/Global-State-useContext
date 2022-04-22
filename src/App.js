import "./App.css";
import AppContext from "./AppContext";
import { useState } from "react";
import Theme from "./Theme";
import UsernameInput from "./UsernameInput";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("Tracy");

  return (
    <AppContext.Provider value={{ theme, username, setUsername, setTheme }}>
      <div className={`App ${theme === "dark" ? "dark-mode" : ""}`}>
        <h1>Global State Management - Light/Dark Mode Demo</h1>
        {/* Toggle switch */}
        <label class="switch">
          <input
            checked={theme === "dark"}
            type="checkbox"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          />
          <span class="slider round"></span>
        </label>
        <Theme />
        <UsernameInput className="user" />
      </div>
    </AppContext.Provider>
  );
}

export default App;

import { createContext } from "react";

const AppContext = createContext({
  theme: "light",
  setTheme: () => {},
  username: "",
  setUsername: () => {},
});

export default AppContext;

import { useContext } from "react";
import AppContext from "./AppContext";

const UsernameInput = () => {
  const { username, setUsername } = useContext(AppContext);
  return (
    <div className="wrapper">
      <input
        placeholder="Enter your name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default UsernameInput;

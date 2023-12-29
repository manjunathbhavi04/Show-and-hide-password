import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Eye from "./components/Eye";

function App() {
  const [password, setPassword] = useState(false);
  
  const handleClick = () => {
    setPassword(!password);
  }

  return (
    <>
      <div className="container">
        <input type={password ? "text" : "password"} />
        <div className="eye">
          <label onClick={handleClick} htmlFor=""><Eye hidden={password} /></label>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./Screens/Main";
import Navbar from "./Components/NavBar/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-screen'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;

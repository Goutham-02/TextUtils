import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";

function App() {
  const [mode, setMode] = useState('dark');
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode}/>
      <div className="container my-3">
        <Textforms heading="Enter the text to analyse below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

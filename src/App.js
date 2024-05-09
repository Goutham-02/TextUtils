
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212A3E';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textforms heading="Enter the text to analyse below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

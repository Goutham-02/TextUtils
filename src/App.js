import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Textforms from "./components/Textforms";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        {/* <Textforms heading="Enter the text to analyse below"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;

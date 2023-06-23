import './App.css';
import Navbar from "./components/Navbar";
import img1 from "./images/img1.jpeg";


function App() {
  return (
    <div className="App">
      <Navbar />
      <img className="hero-img" alt="hero img" src={img1} />
    </div>
  );
}

export default App;

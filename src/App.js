import "./App.css";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

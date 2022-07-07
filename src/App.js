import './App.css';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

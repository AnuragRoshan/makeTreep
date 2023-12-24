import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Sidebar/Footer';
import Stories from './Pages/Stories';

function App() {

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/stories' element={<Stories />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
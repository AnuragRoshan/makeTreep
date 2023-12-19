import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Sidebar/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <div>lorem*89</div> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
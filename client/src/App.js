import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
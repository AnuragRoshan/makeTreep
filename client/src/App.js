import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Sidebar/Footer';
import Stories from './Pages/Stories';
import Genre from './Pages/Genre';
import Article from './Pages/Article';
import Places from './Pages/Places';
import Destination from './Pages/Destination';
import Package from './Pages/Package';

function App() {

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/stories' element={<Stories />} />
          <Route exact path='/stories/:id' element={<Genre />} />
          <Route exact path='/article/:id' element={<Article />} />
          <Route exact path='/places' element={<Places />} />
          <Route exact path='/destination/:id' element={<Destination />} />
          <Route exact path='/package/:id' element={<Package />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
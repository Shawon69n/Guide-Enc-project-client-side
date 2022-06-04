
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Package from './components/Package';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

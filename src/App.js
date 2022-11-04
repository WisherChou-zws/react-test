import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import User from './pages/User'
// import RoutesComponent from './router'
// console.log(RoutesComponent)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="">首页</Link>
        <Link to="/About">About</Link>
        <Link to="/User">User</Link>
      </header>
      <div className='content'>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/User" element={<User />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

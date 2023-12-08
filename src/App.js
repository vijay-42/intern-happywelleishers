import logo from "./logo.png";
import { Outlet, Link } from "react-router-dom";
import './style.css';
import Footer from "./footer";


function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-sm header">
      <div className="container-fluid  ">
        <img className="logos" id="logo" src={logo} alt=""></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-black p-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <a className="nav-link text-black p-3" href="about-main">About</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-black p-3" to="/service">Services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-black p-3" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet/>
<Footer/>
    </div>
  )

}
export default App; 
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import EK from './Assets/EK.png'

const NavBar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={EK} width={150} alt="logo store" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            <Link className="nav-link" to="/categoria/fuego">Fuego</Link>
            <Link className="nav-link" to="/categoria/agua">Agua</Link>
            <Link className="nav-link" to="/categoria/planta">Planta</Link>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

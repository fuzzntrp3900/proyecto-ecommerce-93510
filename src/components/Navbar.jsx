import './Navbar.css'
import tiendaLogo from '../assets/logo_tienda.png'
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md'>
        <div className=" container-fluid justify-content-between px-4">
          <a className="navbar-brand" href="#">
            {/* 3. Corregida la ruta de la imagen de Vite */}
            <img 
              src={tiendaLogo}
              alt="logo" 
              width="auto" 
              height="70"
              className="navbar-logo"  
            />
          </a>
           <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Bolsos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Carteras
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Viaje
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="#">
                Fundas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="#">
                Accesorios
              </a>
            </li>
          </ul>   
        </div>
    </nav>
  )
}

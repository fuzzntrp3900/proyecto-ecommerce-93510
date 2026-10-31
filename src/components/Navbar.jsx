import './Navbar.css'
import tiendaLogo from '../assets/logo_tienda.png'
import CartWidget from './CartWidget'
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md'>
        <div className=" container-fluid justify-content-between px-4">
          <a className="navbar-brand" href="#">
            {/* ruta de logo tienda con vite */}
            <img 
              src={tiendaLogo}
              alt="logo" 
              width="auto" 
              height="70"
              className="navbar-logo"  
            />
          </a>
          {/* listado de categorias */}
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
          <div className="d-flex align-items-center">
            {/* vinculamos el carrito */}
            <CartWidget/>
          </div> 
        </div>
    </nav>
  )
}

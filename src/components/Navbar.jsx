import './Navbar.css'
import tiendaLogo from '../assets/logo_tienda.png'
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md'>
        <div className=" container-fluid justify-content-between px-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
            {/* 3. Corregida la ruta de la imagen de Vite */}
            <img 
              src={tiendaLogo}
              alt="logo" 
              width="auto" 
              height="70"
              className="navbar-logo"  
            />
          </a>
          
          
        </div>

    </nav>
  )
}

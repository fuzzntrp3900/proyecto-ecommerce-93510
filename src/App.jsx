import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!"/>
    </div>
  )
}

export default App

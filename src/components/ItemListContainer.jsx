import './ItemListContainer.css'

export default function ItemListContainer(props) {
    /* APLICAMOS EL DESTRUCTURING OBJECT */
    const {greeting}= props;
  return (
    <div className="item-list-container">
        <div className="container text-center py-5 px-3">
             <h1 className='title'>{greeting}</h1>
        <p className="brand-description">
            En <strong>HCS (Helix Carriers & Sleeves)</strong>, diseñamos maletas, carteras y estuches urbanos de alta calidad. Inspirados en diseño funcional, seleccionando cuero premium y aplicando costuras reforzadas de alta resistencia para garantizar que tu objetos personales soporten el ritmo de la ciudad. 
        Con <strong>Helix</strong>, tus pertenencias viajan seguras a donde sea que vayas.
        </p>
        </div>
    </div>
  )
}

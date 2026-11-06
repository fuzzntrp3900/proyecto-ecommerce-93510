import "./Item.css";

function Item(props) {
  const { title, price, image } = props.product;

  const addToCart = () => {
    alert(`Agregando ${title} al carrito`);
  }
  return (
    <div className="item card col-12 col-md-6 col-lg-3 h-100 d-flex flex-column ">
      <div className="card-title">{title}</div>
      <div className="card-body d-flex flex-column">
        <img className="img-fluid" src={image} alt={title} />
        <div className="d-flex flex-column align-items-center gap-2 mt-auto">
          <span className="price">precio:${price}</span>
          <button className="btn btn-add-to-cart" onClick={addToCart}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;

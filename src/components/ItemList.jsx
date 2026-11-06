import { useEffect, useState } from 'react';
import { getProducts } from '../mocks/products';
import './ItemList.css'
import Item from './Item';




function ItemList() {
    /*estado para listado productos y carga */
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    /*efecto para obtener los productos [carga primera vez] */
    useEffect(() => {
        /* console.log('[ItemList]->Componente montado...'); */
        getProducts()
            .then((data) => {
                {/*asigna los productos al estado */}
                setProducts(data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                {/*detiene la carga*/}
                setLoading(false);
            });
            return () => {
                console.log('[ItemList]->desmontando componente ItemList');
            }
    }, 
    []);
    {/*componente para mostrar la lista de productos */}
  return (
    <div className=" item-list row d-flex flex-wrap gap-4 justify-content-center">
      {/* esta cargando (2000ms) */}      
      {loading&&
       <div className="w-100 text-center mt-5">
        <div className="spinner-border text-primary" role="status"/>
        <p className="mt-2">Cargando productos...</p>
      </div> 
      }
      {/* error con la carga */}
      {error && <p>Hubo un problema al cargar los productos.</p>}
      {/* validamos que haya productos con rendering condicional */}
      {(products.length === 0 && !loading)  ? (
        <div className="container text-center mt-5">
          <p>No hay productos disponibles.</p>
        </div>
      ) : 
        products.map((product) => (
          <Item key={product.id} product={product} />
        ))  
      }
    </div>
  );
}
export default ItemList;
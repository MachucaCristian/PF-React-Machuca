import React, {useState, useEffect, useContext} from 'react';
import "../../../style/home.css";
import { getProductos } from '../../../utils/firebase';
import { Link } from 'react-router-dom';


//ItemListContainer
const Home = () => {


    const [productos, setproductos] = useState([]);
   
    useEffect(() => {
           
        getProductos().then( productos=> {
            const cardProductos = productos.map (producto =>
                <div className="card cardProducto "  key={ producto[0]} >
                    <div className="container h-100">
                    <img src={producto[1].img} className="card-img-top img-thumbnail" alt={producto.nombre} />
                    </div>
                    <div className="card-body">
                         <h5 className="card-title text-center">{producto[1].nombre}</h5>
                        
                         <p className="card-text">Marca: {producto[1].marca} </p>
                         <p className="card-text">Modelo: {producto[1].modelo} </p>
                         <p className="card-text">Precio: U$S {producto[1].precio} </p>
                         <p className="card-text">Stock: {producto[1].stock} </p>
                         <div class="d-grid gap-5 col-12 mx-auto"> 
                            <button   className='btn btn-dark' ><Link className='nav-link' to={"/producto/"+ producto[0]}>Ver Producto</Link></button>
                         </div>
                     </div>
                </div>  ) 
        
        setproductos(cardProductos)
            })

       

            
    
        }, []);
       

    return (
        <>
        
                
                    <div className="row  ">
                        
                              {productos}
                        
                        
                    </div>
                


        </>
    );
}

export default Home;

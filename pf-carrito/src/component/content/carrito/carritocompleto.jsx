import React, {useContext} from 'react';
import { CarritoContext } from './carritoContext';
import { Link } from "react-router-dom";



import Carrito from './carrito';

const Carritocompleto = () => {
    const { clearCarrito, producto}  = useContext(CarritoContext)
    return (
        <>
            <Carrito/>
                            <div className='container text-center'>
                                
                               <button className='btn btn-dark' onClick={() => clearCarrito (producto)}>Vaciar Carrito</button>
                                 <Link className="btn btn-primary" onClick={() => clearCarrito (producto)} to={"/chekout"}>Enviar Pedido</Link>
                                 </div>
            
        </>
    );
}

export default Carritocompleto;

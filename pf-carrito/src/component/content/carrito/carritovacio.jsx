import React from 'react';
import { Link } from "react-router-dom";

const Carritovacio = () => {
    return (
        <>
            
           
                <div className="card mb-3">
                    <img src="././img/fondo.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">No existen Articulos en el Carrito</h5>
                        
                        <Link className="btn btn-primary" to={"/"}>Ir al Home</Link>
                    </div>
                    </div>

        </>
    );
}

export default Carritovacio;

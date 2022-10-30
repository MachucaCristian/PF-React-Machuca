import React from 'react';
import { Link } from "react-router-dom";


const ConfirmacionPedido = () => {
    return (
        <>
            
        <div className="card text-bg-dark mb-3 text-center position-absolute top-50 start-50 translate-middle" style={{maxWidth: '18rem'}}>
                
                <div className="card-body">
                    <h5 className="card-title">Gracias por su Compra</h5>
                    <p></p>
                    <Link className="btn btn-primary" to={"/"}>Ir al Home</Link>
                </div>
                </div>
        </>
    );
}

export default ConfirmacionPedido;

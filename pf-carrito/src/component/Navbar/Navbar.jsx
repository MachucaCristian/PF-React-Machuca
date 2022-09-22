import React from 'react';
import Form from './form';
import Dropdown from './Dropdown';
import Secciones from './Secciones';
import Carwidget from '../CarWidget/carwidget';

const Navbar = () => {
  const listDropdown = ["Pc Completa", "Notebook", "Tablet", "Accesorios"]
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img width="30%" src="..\..\..\img\logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <Secciones/> 
        <Dropdown lista={listDropdown}/>
      </ul>
      <Form busqueda= "Buscar Producto"/>
    </div>
  </div>
</nav>

        
        </>
    );
}

export default Navbar;

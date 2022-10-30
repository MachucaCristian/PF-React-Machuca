
import { Link } from 'react-router-dom';
import Cotizacionmoneda from '../../layouts/cotizacionmoneda/cotizacionmoneda';

import "../../../style/NavFoter.css";

import Dorpdown from '../../layouts/Dropdown/Dropdown';
import Secciones from '../../layouts/Secciones/Secciones';
import Cardwidget from '../CardWidget/cardwidget';



const Navbar = ({contador}) => {
  const listDropdown = ["Informatica", "Celulares", "TV y Audio"]
    return (
        <>
                      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                              <div className="container-fluid align-items-start">
                                      
                                      <div className="collapse navbar-collapse" id="navbarColor02">
                                        <ul className="navbar-nav  fs-5  ">
                                         
                                          <Cotizacionmoneda className="text-center"/>
                                          
                                        </ul>
                                        </div>
                                  </div>
                              </nav>
                      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                              <div className="container-fluid">
                                      
                                      <div className="collapse navbar-collapse" id="navbarColor02">
                                        <ul className="navbar-nav me-auto fs-5 text ">
                                          <Secciones/>
                                          <Dorpdown  lista= {listDropdown}/> 
                                          
                                          
                                        </ul>
                                        
                                        </div>
                                            <ul className="navbar-nav me-auto ">
                                              <li className="nav-item"><Link className="nav-link active" to={"/carritocompleto"}>{<Cardwidget/>}</Link>
                                                          
                                              </li>
                                                          
                                            </ul>
                                        </div>
                                        
                                        
                                      
                            </nav>
                            
                              
  
        </>
    );
}

export default Navbar;

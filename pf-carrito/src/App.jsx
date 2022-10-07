import {BrowserRouter, Routes, Route} from "react-router-dom";




import Navbar from "./component/content/Navbar/Navbar";
import Footer from "./component/content/footer/footer";
import About from "./component/content/About/about";
import Contacto from "./component/content/Contacto/contacto";
import Carrito from "./component/content/carrito/carrito";
import ItemListContainer from "./component/content/ItemListContainer/ItemListContainer";
import ItemDetail from "./component/content/ItemListContainer/ItemDetail";


const App = () => {
  
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              
              <Route path="/item/:id" element={<ItemDetail/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/carrito" element={<Carrito/>}/>
          </Routes>
          <Footer/>

          
        </BrowserRouter>



      
      
      </>
    );
    
}

export default App;
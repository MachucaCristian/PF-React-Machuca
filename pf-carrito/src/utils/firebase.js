

import {collection, addDoc,getFirestore,getDocs, getDoc, doc, updateDoc} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "carrito-react-machuca-cristian.firebaseapp.com",
  projectId: "carrito-react-machuca-cristian",
  storageBucket: "carrito-react-machuca-cristian.appspot.com",
  messagingSenderId: "551083269026",
  appId: "1:551083269026:web:04b17eb002523df7f0b0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

//const cargarBaseDeDatos = async () => {
  //const promise = await fetch('./json/productos.json')
 // const productos = await promise.json()
 // productos.forEach( async(producto) => {
 //    await addDoc(collection(db,"productos"), {
  //        nombre: producto.nombre,
   //       marca: producto.marca,
   //       modelo: producto.modelo,
          
    //    categoria: producto.idCategoria,
        
    //   stock: producto.stock,
    //    precio: producto.precio,
    //    img: producto.img
 // })
//  })
//}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
 

}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto=>[producto.id, producto.data()])
  
  
  return items
}
const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
    precioTotal: preTotal
  })

  return ordenCompra
}
const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  return ordenCompra
}

export { getProductos, getProducto, updateProducto,createOrdenCompra,getOrdenCompra}


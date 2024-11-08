import db from"../db/db.js"
import { addDoc, collection } from "firebase/firestore";

const products = [
    // Categoría: Carne - Achuras
    { id: "A001", name: "Chinchulines", price: 3500, category: "Achuras", description: "Chinchulines frescos, perfectos para la parrilla.", stock: 20, image: "../images/chinchulin.jpg" },
    { id: "A002", name: "Mollejas", price: 4000, category: "Achuras", description: "Mollejas tiernas, ideales para asar a la parrilla.", stock: 15, image: "../images/molleja.jpg" },
    { id: "A003", name: "Riñones", price: 3200, category: "Achuras", description: "Riñones frescos, ideales para asados tradicionales.", stock: 25, image: "../images/riñones.jpg" },
  
    // Categoría: Carne - Premium
    { id: "P001", name: "Filete de res", price: 7500, category: "Premium", description: "Filete de res de alta calidad, tierno y jugoso.", stock: 10, image: "../images/res.jpg" },
    { id: "P002", name: "Bife de chorizo", price: 7200, category: "Premium", description: "Bife de chorizo de res, de excelente marmoleo y sabor.", stock: 15, image: "../images/bifeChorizo.jpg" },
    { id: "P003", name: "Corte Tomahawk", price: 9500, category: "Premium", description: "Corte Tomahawk de res, con gran marmoleo y sabor.", stock: 8, image: "../images/tomahauk.jpg" },
  
    // Categoría: Carne - Tradicional
    { id: "T001", name: "Tira de asado", price: 3800, category: "Tradicional", description: "Tira de asado de res, corte clásico para parrilladas.", stock: 40, image: "../images/molleja.jpg" },
    { id: "T002", name: "Chorizo", price: 3500, category: "Tradicional", description: "Chorizo fresco de res para asar, un clásico del asado.", stock: 50, image: "../images/chorizo.jpg" },
    { id: "T003", name: "Morcilla", price: 3300, category: "Tradicional", description: "Morcilla fresca, perfecta para acompañar el asado.", stock: 35, image: "../images/morcilla.jpg" },
  
    // Categoría: Carne - Gourmet
    { id: "G001", name: "Carne de cordero", price: 6000, category: "Gourmet", description: "Pierna de cordero, ideal para platos sofisticados.", stock: 20, image: "../images/cordero.jpg" },
    { id: "G002", name: "Corte de wagyu", price: 12000, category: "Gourmet", description: "Exclusivo corte de wagyu con un marmoleo excepcional.", stock: 5, image: "../images/wagyu.jpg" },
    { id: "G003", name: "Ossobuco de ternera", price: 4000, category: "Gourmet", description: "Corte ossobuco de ternera, ideal para guisos gourmet.", stock: 15, image: "../images/Ossobuco.jpg" },
  ];

  const seedProducts = ()=>{
    const productsRef = collection(db, "products")
    products.map(({id, ...dataProduct})=>{
        addDoc(productsRef, dataProduct)
    })


    console.log("productos subidos")
  }


  seedProducts()
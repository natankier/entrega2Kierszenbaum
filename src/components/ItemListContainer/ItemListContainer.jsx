import { useState, useEffect } from "react"
import ItemList from './ItemList.jsx';
import { getProducts } from "../../data/data.js"
import { useParams  } from "react-router-dom";
import "./ItemListContainer.scss"

const ItemListContainer = ( {saludo}) => {
  const [ products,  setProducts ] = useState ([])
  const {idCategory} = useParams()



  useEffect( ()=>{
    getProducts()
    .then((data) => {
    if(idCategory){
        const filterProducts = data.filter( (product)=> product.category === idCategory)
        setProducts(filterProducts)
    }else{
      setProducts(data)
    }
    })
  
    .catch((error) => {
              console.error(error);
            })

      .finally(()=>{
        console.log("finalizar")
      })
  
  }, [idCategory])




  return (
    <div className="container text-center">
        <h1>{saludo}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer

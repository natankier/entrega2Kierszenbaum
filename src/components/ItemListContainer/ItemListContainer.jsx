import { useState, useEffect } from "react"
import ItemList from './ItemList';
import { getProducts } from "../../data/data.js"

const ItemListContainer = ( {saludo}) => {
  const [ products,  setProducts ] = useState ([])

  useEffect( ()=>{

    getProducts()
    .then((data) => {
      setProducts(data)
    })
  
    .catch((error) => {
              console.error(error);
            })

      .finally(()=>{
        console.log("finalizar")
      })
  
  }, [])




  return (
    <div>
        <h1>{saludo}</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer

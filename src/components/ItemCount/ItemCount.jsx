import { useState } from 'react'
import './ItemCount.scss';




const ItemCount = ({stock , addProduct}) => {
    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if (count > 1 ){
            setCount ( count - 1)
        }
    }

    const handleClickIncrement = () =>{
        if ( count < stock){
            setCount ( count + 1) 
        }
      
    }
  return (
    <div className='count'>
        < div className='sumar'>
        <button onClick={ handleClickDecrement } >-</button>
        <p>{count}</p>
        <button onClick = {handleClickIncrement}>+</button>
        </div>
        <div>
        <button onClick={ () => addProduct (count)}  >Agregar producto</button>
        </div>
    </div>
  )
}

export default ItemCount
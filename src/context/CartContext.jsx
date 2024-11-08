import { createContext, useState } from "react";
import { CgLogIn } from "react-icons/cg";


    const CartContext = createContext ()

    const CartProvider = ({children})=> {
        const [cart, setCart] = useState([])

const addProductInCart = (newProduct) => {
    const condicion = isInCart(newProduct.id);
    if (condicion) {
        let newCart = [...cart];
        newCart.forEach((product) => {
            if (product.id === newProduct.id) {
                product.quantity += newProduct.quantity;
            }
        });

        setCart(newCart);
    } else {
        setCart([...cart, newProduct]);
    }
};

const isInCart = (idProduct) => {
    return cart.some((product) => product.id === idProduct);
};

    const deleteProductInCart = (idProduct)=>{
        const productsFilter = cart.filter ((productCart)=> productCart.id !== idProduct   )
        setCart(productsFilter)
    }
    const totalQuantity = ()=> {
        const quantity = cart.reduce(    (total, productCart)=> total + productCart.quantity, 0 )
        return quantity
    }

    const totalPrice =() => {
        const price = cart.reduce (   (total, productCart)  => total + (productCart.price * productCart.quantity )  ,0   )
        return price
    }

    return(
        <CartContext.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart}}>

            {children}

        </CartContext.Provider>
    )
}


export {CartContext, CartProvider, }
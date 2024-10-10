const products = [
    {
      id: "1",
      name: "corte",
      price: 44,
    },
    {
      id: "2",
      name: "corte",
      price: 44,
    },
    {
      id: "3",
      name: "corte",
      price: 44,
    }
  ]

  const getProducts = () => {
    return new Promise ((resolve, reject) => {
          setTimeout(() =>{
            resolve(products)
          }, 2000 )
      })
  }

export {getProducts}
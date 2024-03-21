const products = [
    {
      id: "1",
      name: "iphone 12",
      price: 1000,
      category: "celular",
      img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
      stock: 25,
      description: "Descripcion de Iphone 12",
    },
    {
      id: "2",
      name: "samsung s21",
      price: 800,
      category: "celular",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
      stock: 16,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "3",
      name: "Ipad 8va generacion",
      price: 1200,
      category: "tablet",
      img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
      stock: 0,
      description: "Descripcion de Ipad",
    },
    {
      id: "4",
      name: "iphone 15",
      price: 1400,
      category: "celular",
      img: "https://http2.mlstatic.com/D_NQ_NP_779617-MLA71782867320_092023-O.webp",
      stock: 16,
      description: "Descripcion de Iphone 15",
    },
    {
      id: "5",
      name: "Macbook Pro",
      price: 1400,
      category: "computers",
      img: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/08/mbp-silver-gallery2-202206_GEO_MX.jpg",
      stock: 16,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "6",
      name: "Samsung Galaxy Tab",
      price: 1000,
      category: "tablet",
      img: "https://images.fravega.com/f1000/439c8fcdf8f4187aaef869409da06758.jpg",
      stock: 16,
      description: "Descripcion de Samsung s21",
    },
  ];

//Esta funcion retorna una promesa.
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

//Aqui retornamos otra promesa pero filtrando por categoria.
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId))
    }, 500)
  })
}

//Aqui retornamos una promesa mas pero buscando por id, por eso utulizamos le metodo find.
export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId))
    }, 500);
  })
}

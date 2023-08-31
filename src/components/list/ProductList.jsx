import React from 'react'
import ProductCard from '../layout/product/ProductCard'

const ProductList = ({products}) => {
  return (
    {
        products.map((product, index) => (
            <ProductCard  data={product} key={index}/>
        ))
    }
  )
}

export default ProductList
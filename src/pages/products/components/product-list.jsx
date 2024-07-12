import React from 'react'
import { useGetProduct } from '../api/get-product'

const ProductList = () => {
    const products = useGetProduct();
    console.log(products)
 
  
  return (
    <div>
        <div>ProductList</div>
        <div>
            {products.isFetching && <div>Loading ...</div>}
            {products.data && <div>{products.data.totalElements}</div>}
        </div>
    </div>
  )
}

export default ProductList
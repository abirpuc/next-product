
import React from 'react'

export default function Product({product}) {
  return (
    <div  className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
      {
        product.map(item =>
        <div  key={item.id} className='border border-gray-400 shadow-lg shadow-gray-400 rounded-md px-4 py-2 my-4'>
          <h1 className='text-green-600 text-2xl'>{item.title}</h1>
          <h1 className='text-gray-300 text-xl'>Price:${item.price}</h1>
          <h1 className='text-gray-300 text-xl'>quantity:{item.quantity}</h1>
          <h1 className='text-gray-300 text-xl'>total:{item.total}</h1>
          <h1 className='text-gray-300 text-xl'>discountPercentage:{item.discountPercentage}</h1>
          <h1 className='text-gray-300 text-xl'>discountedPrice:{item.discountedPrice}</h1>
          </div> )
      }
    </div>
  )
}

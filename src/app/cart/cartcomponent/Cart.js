"use client"
import React, { useState } from 'react'
import Product from './Product'

export default function Cart({carts}) {
    const [product, setProduct] = useState(1)
  return (
    <div>
        <div className='w-3/4 mx-auto'>
          {
              carts.map((item, idx) => <button key={idx} onClick={()=>setProduct(item.id)} className='bg-purple-600 p-2 rounded-md m-2'>Item-{idx+1}</button>)
          }
        </div>
        {
            carts.map((item, idx) => item.id === product && <div 
            className='py-4'
            key={idx}>
                
                <Product productId={item.id} product={item.products}/>
            </div>)
        }
    </div>
  )
}

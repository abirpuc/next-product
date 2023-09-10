import React from 'react'
import Cart from './cartcomponent/Cart'

export default async function page() {
    const res = await fetch("https://dummyjson.com/carts")
    const data = await res.json()
    return (
    <div className='container mx-auto'>
        <Cart carts={data.carts}/>
    </div>
  )
}

import Image from 'next/image'
import ProductCard from './componet/productcard';

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json();
  console.log(data.products)
  return (
    <main className="container mx-auto">
      <h1 className='text-6xl font-bold text-green-600 text-center py-8'>Dummy Product</h1>
      <div className='grid grid-cols-3 gap-4'>
      {
        data.products.map((product)=> <ProductCard key={product.id} product={product}/>)
      }
      </div>
    </main>
  )
}

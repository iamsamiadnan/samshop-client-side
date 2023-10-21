import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductCard from './Shared/ProductCard'
import Banner from './Shared/Banner'
import AdsBanner from './Shared/AdsBanner'




export default function Products() {
    const param = useParams()
    const products = useLoaderData()

  return (
   
    
    <div>
             <div className='mb-32'>
                <h1>ADVERTISEMENTS*</h1>
           <AdsBanner/>
        </div>
           
           <div>
                <div className='border border-gray-500 rounded p-6 flex gap-2 items-center mb-4'>
                <h1 className='text-sky-800 font-semibold text-lg'>BRAND: {param.brand.toUpperCase()}</h1>
                </div>  
                <div className='flex gap-2 justify-between'>
                {
                    products && products.map((product) => <ProductCard key={product._id} product={product} />)
                }
                </div>

                <div className='flex justify-center'>
                {
                    products.length === 0 && <img src="https://i.ibb.co/fdb8GBH/no-product.png" alt="" />
                }
                </div>
           </div>
            
    </div>
  )
}

import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './Shared/ProductCard'

export default function Cart() {
    const products = useLoaderData()
  return (
    <div>
             
           
           <div>
                <div className='border border-gray-500 rounded p-6 flex gap-2 items-center mb-4'>
                <h1 className='text-sky-800 font-semibold text-lg'>CART</h1>
                </div>  
                <div className='flex gap-2 justify-between'>
                {
                    products && products.map((product) => <span key={product._id}>{product._pid}</span>)
                }
                </div>
           </div>
            
    </div>
  )
}

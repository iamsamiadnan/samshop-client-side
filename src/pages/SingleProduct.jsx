import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
export default function SingleProduct() {

    const product = useLoaderData()
    const {_id, image_url, name, brand, category, price, desc, ratings, flash_sale} = product
    
  return (
   <div>
    
            <div className='border border-gray-500 rounded p-6 flex gap-2 items-center mb-4'>
               <h1 className='text-sky-800 font-semibold text-lg'>PRODUCT: {product.name}</h1>
            </div>  
            <div className='grid grid-cols-3 border border-gray-500 rounded p-6'>
                <div className='col-span-1'>
                    <img src={image_url} alt="" />
                </div>
                <div className='col-span-2 border border-gray-500 rounded p-6'>
                    <div className='flex flex-col gap-2 mb-6'>
                    <div className='flex gap-[2px]'>
                        {
                            Array.from({length: ratings}, (_, i) => <AiFillStar key={i} className='text-orange-500' />)
                        }
                    </div>
                    <h1 className='text-xl'>{name}</h1>
                    <div className='flex gap-2'>
                        <div className="badge badge-outline">{brand}</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>

                    <span className='text-xl'>৳ {price}</span>
                    </div>

                    <pre className='border border-gray-500 rounded p-4'>
                        {desc}
                    </pre>

                  
           
                </div>
  
            </div>
            
    </div>
  )
}

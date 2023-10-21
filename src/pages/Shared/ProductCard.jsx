import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function ProductCard({product}) {

    const {_id, brand,category, name, image_url, price, desc, ratings} = product

   
  return (
    <Link to={`/products/single/${_id}`} className='border border-gray-500 rounded p-6 hover:cursor-pointer hover:outline hover:outline-2'>
        <div className='flex justify-center mb-2'>
            <img className='w-32 h-32 object-contain' src={image_url} alt="" />
        </div>
        <div className='text-xs font-bold flex flex-col item'>
            <h2 className='text-gray-800'>{name}</h2>
            <span className='text-blue-800 mb-2'>৳ {price}</span>
           <div className='flex gap-2 mb-2'>
           <span className='text-blue-800 border border-blue-800 rounded w-max p-[2px] text-[10px]'>{brand.charAt(0).toUpperCase() + brand.slice(1)}</span>
            <span className='text-blue-800 border border-blue-800 rounded w-max p-[2px] text-[10px]'>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
           </div>
           <div className='flex gap-[2px]'>
              {
                 Array.from({length: ratings}, (_, i) => <AiFillStar key={i} />)
              }
           </div>
        </div>
    </Link>
  )
}

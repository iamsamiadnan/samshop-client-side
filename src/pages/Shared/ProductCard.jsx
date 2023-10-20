import React from 'react'

export default function ProductCard({product}) {

    const {_id, _bid, name, image_url, price, desc} = product
  return (
    <div className='border border-gray-500 rounded p-6 hover:cursor-pointer hover:outline hover:outline-2'>
        <div>
            <img className='w-32 h-32 object-contain' src={image_url} alt="" />
        </div>
        <div className='text-xs font-bold flex flex-col'>
            <h2 className='text-gray-800'>{name}</h2>
            <span className='text-blue-800 mb-2'>৳ {price}</span>
            <span className='text-blue-800 border border-blue-800 rounded w-max p-[2px] text-[10px]'>{_bid}</span>
        </div>
    </div>
  )
}

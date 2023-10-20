import React from 'react'
import { BsApple } from 'react-icons/bs';

export default function BrandCard({brand}) {
 const {_id, name, image_url} = brand
  return (
    <div className='border border-gray-500 rounded flex justify-center items-center hover:cursor-pointer hover:bg-gray-300'>
        <img className='w-32 h-32 object-contain p-4' src={image_url} alt="" />
        <div className="badge badge-outline">{name}</div>
    </div>
  )
}
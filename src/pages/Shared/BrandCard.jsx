

import { Link } from 'react-router-dom';

export default function BrandCard({brand}) {
 const {name, image_url} = brand
  return (
    <Link to={`/products/${name.toLowerCase()}`} className='border border-gray-500 rounded flex justify-center items-center hover:cursor-pointer hover:bg-gray-300'>
        <img className='w-32 h-32 object-contain p-4' src={image_url} alt="" />
        <div className="badge badge-outline">{name}</div>
    </Link>
  )
}

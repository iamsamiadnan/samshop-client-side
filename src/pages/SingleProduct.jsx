import  { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import toast from 'react-hot-toast';
import { AuthContext } from '../providers/AuthProvider';
export default function SingleProduct() {
    const {user} = useContext(AuthContext)
    const product = useLoaderData()
    const {_id, image_url, name, brand, category, price, desc, ratings} = product
    
const handleAddToCart = () => {
  
    fetch('https://server-side-kcn8oes4s-adnan-samis-projects.vercel.app/addToCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                _uid: user.uid,
                _pid: _id,
                name: name,
                price: price
                
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if(data.acknowledged) {
                toast.success('Product Added To Cart!')
            }
            
           
            
        })
}

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

                    <p className='border border-gray-500 rounded p-4 mb-4'>
                        <b>DESCRIPTION:</b><br />
                        {desc}
                    </p>

                    <button className="btn btn-active btn-primary" onClick={handleAddToCart}>Add to Cart</button>
           
                </div>
  
            </div>
            
    </div>
  )
}

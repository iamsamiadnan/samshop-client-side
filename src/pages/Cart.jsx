import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import ProductCard from './Shared/ProductCard'
import { AuthContext } from '../providers/AuthProvider'

export default function Cart() {
    const {user} = useContext(AuthContext)
    const [products, setProducts] = useState([])
  

    useEffect(() => {

        fetch(`http://localhost:5000/products/cart/${user.uid}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        } )
    }, [])




  return (
    <div>
             
           
           <div>
                <div className='border border-gray-500 rounded p-6 flex gap-2 items-center mb-4'>
                <h1 className='text-sky-800 font-semibold text-lg'>CART</h1>
                </div>  
                <div className='flex gap-2 justify-between'>
                {
                   products && products.map(product => 
                   <div key={product._id}  className='border border-gray-500 rounded p-6'>
                        <span>Name: {product.name}</span><br />
                        <span>Price: Tk. {product.price}</span>
                        <div className='flex gap-2 mt-6'>
                            <Link to={`/products/single/${product._pid}`} className='btn btn-sm btn-primary text-sm'>Details</Link>
                            <button className='btn btn-sm btn-error text-sm'>Delete</button>
                        </div>
                   </div>
                   
                   )
                }
                </div>
           </div>
            
    </div>
  )
}

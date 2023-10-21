import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../providers/AuthProvider'
import toast from 'react-hot-toast'

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

    const handleDeleteProduct = (id, _cartId) => {
        fetch(`http://localhost:5000/products/${id}/${user.uid}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0) {
                toast.success('Product Removed From Cart!')
                const newProducts = products.filter(prod => {

                    
                    console.log(prod._id, id)
                    return prod._id !== _cartId
                })
                
                
                setProducts(newProducts)
            }
        } )
    }


  return (
    <div>
             
           
           <div>
                <div className='border border-gray-500 rounded p-6 flex gap-2 items-center mb-4'>
                <h1 className='text-sky-800 font-semibold text-lg'>CART</h1>
                </div>  
                <div className='flex gap-4'>
                {
                   products && products.map(product => 
                   <div key={product._id}  className='border border-gray-500 rounded p-6'>
                        <span>Name: {product.name}</span><br />
                        <span>Price: Tk. {product.price}</span>
                        <div className='flex gap-2 mt-6'>
                            <Link to={`/products/single/${product._pid}`} className='btn btn-sm btn-primary text-sm'>Details</Link>
                            <button className='btn btn-sm btn-error text-sm' onClick={() => handleDeleteProduct(product._pid, product._id)}>Delete</button>
                        </div>
                   </div>
                   
                   )
                }


                {
                    products.length === 0 && <h1>ADD TO CART FIRST!</h1>
                }
                </div>
           </div>
            
    </div>
  )
}

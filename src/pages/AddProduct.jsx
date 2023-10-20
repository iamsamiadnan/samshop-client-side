import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData } from 'react-router-dom'

export default function AddProduct() {

    const brands = useLoaderData()
    const [spinner, setSpinner] = useState(false)

    const handleAddProduct = (e) => {
        
        e.preventDefault();
        setSpinner(true);
        const form = e.target;

        const _bid = form.brand.value;
        const image_url = form.image_url.value;
        const name = form.name.value;
        const price = form.price.value;
        const desc = form.desc.value;

       

        const product = { _bid, name, image_url, price, desc}
        
        console.log(product)

        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.acknowledged) {
                form.reset();
                setSpinner(false);
                toast.success('Product Added!')
                
            }
            
        })
   
    }


  return (
    <div>
        <form action="" onSubmit={handleAddProduct}>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                <label htmlFor="image_url">Image URL <sup className='text-red-500'>*</sup></label>
                <input type="text" id='image_url' name='image_url' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="name">Product Name <sup className='text-red-500'>*</sup></label>
                <input type="text" id='name' name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>

                <div className='flex flex-col gap-2'>
                     <label htmlFor="brand">Brand <sup className='text-red-500'>*</sup></label>
                    <select id='brand' name='brand' className="select select-bordered w-full max-w-xs">
                  
                        {
                            brands.map(brand => <option key={brand._id} value={brand._id}>{brand.name}</option>)
                        }
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="price">Price <sup className='text-red-500'>*</sup></label>
                <input type="number" id='price' name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" min='0' required/>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="desc">Description <sup className='text-red-500'>*</sup></label>
                <textarea placeholder="Bio" id='desc' name='desc' className="textarea textarea-bordered textarea-sm w-full max-w-xs" required></textarea>
                </div>

               <div className='inline'>
                <button className="btn">
                    <span className={`loading loading-spinner ${spinner || 'hidden'}`}></span>
                    Add Product
                </button>
               </div>
            </div>
        </form>
    </div>
  )
}

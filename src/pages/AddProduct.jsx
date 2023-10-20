import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function AddProduct() {

    const brands = useLoaderData()
  return (
    <div>
        <form action="">
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                <label htmlFor="thumb_url">Image URL <sup className='text-red-500'>*</sup></label>
                <input type="text" id='thumb_url' name='thumb_url' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="name">Product Name <sup className='text-red-500'>*</sup></label>
                <input type="text" id='name' name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>

                <div className='flex flex-col gap-2'>
                     <label htmlFor="brand">Product Name <sup className='text-red-500'>*</sup></label>
                    <select id='brand' name='brand' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>---</option>
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
                    <span className="loading loading-spinner"></span>
                    Add Product
                </button>
               </div>
            </div>
        </form>
    </div>
  )
}

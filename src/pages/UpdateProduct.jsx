import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function UpdateProduct() {

    const prod = useLoaderData()

    console.log(prod)
    const [spinner, setSpinner] = useState(false)
    const navigate = useNavigate()


    
    const [brands, setBrands] = useState([])

    useEffect(() => {
       fetch('http://localhost:5000/brands/', {
        method: 'GET'
       })
       .then(res => res.json())
       .then(data => setBrands(data))
       
    }, [])

    const handleUpdateProduct = (e) => {
        
        e.preventDefault();
        setSpinner(true);
        const form = e.target;

        const image_url = form.image_url.value 
        const name = form.name.value 
        const brand = form.brand.value 
        const category = form.category.value 
        const price = form.price.value 
        const desc = form.desc.value 
        const ratings = form.ratings.value 


       

        const product = {image_url,name, brand, category, price, desc, ratings  }
        
     

        fetch(`http://localhost:5000/products/${prod._id}`, {
            method: 'PUT',
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
                toast.success('Product Updated!')
                navigate(`/products/single/${prod._id}`)
            }
            
        })
   
    }


  return (
    <div>
        <div className='border border-gray-500 rounded p-6 flex gap-2 items-center mb-14'>
               UPDATE PRODUCT 
            </div>
        <form action="" onSubmit={handleUpdateProduct}>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                <label htmlFor="image_url">Image URL <sup className='text-red-500'>*</sup></label>
                <input type="text" id='image_url' name='image_url' placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={prod.image_url} required/>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="name">Product Name <sup className='text-red-500'>*</sup></label>
                <input type="text" id='name' name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" required defaultValue={prod.name} />
                </div>

                <div className='flex flex-col gap-2'>
                     <label htmlFor="brand">Brand <sup className='text-red-500'>*</sup></label>
                    <select id='brand' name='brand' className="select select-bordered w-full max-w-xs">
                  
                        {
                            brands.map(brand => <option key={brand._id} value={brand.name.toLowerCase()} selected={prod.brand === brand.name.toLowerCase() && true} >{brand.name}</option>)
                        }
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                     <label htmlFor="brand">Category <sup className='text-red-500'>*</sup></label>
                    <select id='category' name='category' className="select select-bordered w-full max-w-xs">
                  
                        <option value="smartphones" selected={prod.category === 'smartphones' && true} >Smartphones</option>
                        <option value="earbuds"  selected={prod.category === 'earbuds' && true} >Earbuds</option>
                        <option value="smartwatches"  selected={prod.category === 'smartwatches' && true} >Smartwatches</option>
                        <option value="laptops"  selected={prod.category === 'laptops' && true} >Laptops</option>
                        <option value="monitors"  selected={prod.category === 'monitors' && true} >Monitors</option>
                        <option value="gadgets"  selected={prod.category === 'gadgets' && true} >Gadgets</option>
                        <option value="processor"  selected={prod.category === 'processor' && true} >Processor</option>
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="price">Price <sup className='text-red-500'>*</sup></label>
                <input type="number" id='price' name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" min='0' defaultValue={prod.price} required/>
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="desc">Short Description <sup className='text-red-500'>*</sup></label>
                <textarea placeholder="Bio" id='desc' name='desc' className="textarea textarea-bordered textarea-sm w-full max-w-xs" defaultValue={prod.desc} required></textarea>
                </div>

         
                <div className='flex flex-col gap-2'>
                <label htmlFor="ratings">Ratings <sup className='text-red-500'>*</sup></label>
                <input type="number" id='ratings' name='ratings' placeholder="" className="input input-bordered w-full max-w-xs" min='0' max='5' defaultValue={prod.ratings} required/>
                </div>
       

               <div className='inline'>
                <button className="btn">
                    <span className={`loading loading-spinner ${spinner || 'hidden'}`}></span>
                    Update Product
                </button>
               </div>
            </div>
        </form>
    </div>
  )
}

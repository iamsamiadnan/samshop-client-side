import React, { useEffect, useState } from 'react'
import BrandCard from './Shared/BrandCard'
import { useLoaderData } from 'react-router-dom'
import Banner from './Shared/Banner';
import { AiOutlineThunderbolt } from "react-icons/ai";
import ProductCard from './Shared/ProductCard';
export default function Home() {

    const brands = useLoaderData();
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/products', {
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

        <div className='mb-36'>
            <Banner />
        </div>
        <div className='grid grid-cols-4  gap-6 mb-20'>
            {
                brands.map((brand) => <BrandCard key={brand._id} brand={brand} />)
            }
        </div>

        <div>
            <div className='border border-gray-500 rounded p-6 flex gap-2 items-center mb-4'>
                FLASH SALE <AiOutlineThunderbolt className='text-orange-500'/>
            </div>
            <div className='border border-gray-500 rounded p-6 flex gap-2 items-center'>
            {
                products && products.map((product) => <ProductCard key={product._id} product={product} />)
            }
            </div>
        </div>
    </div>
  )
}

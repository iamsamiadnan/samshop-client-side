import React from 'react'
import BrandCard from './Shared/BrandCard'
import { useLoaderData } from 'react-router-dom'
import Banner from './Shared/Banner';

export default function Home() {

    const brands = useLoaderData();

   
  return (
    <div>

        <div className='mb-36'>
            <Banner />
        </div>
        <div className='grid grid-cols-4  gap-6 '>
            {
                brands.map((brand) => <BrandCard key={brand._id} brand={brand} />)
            }
        </div>
    </div>
  )
}

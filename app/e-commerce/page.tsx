import { fakeStoreProducts } from '@/lib/fakeStoreProducts'
import React from 'react'
import ProductCard from './productCard'

export default function page() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {fakeStoreProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

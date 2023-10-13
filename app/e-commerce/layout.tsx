import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'E-commerce store',
    description: 'An E-commerce cart store with Zustand, Next.js and TailwindCSS',
}

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='mx-auto my-8 max-w-screen-xl'>
            {children}
        </div>
    )
}

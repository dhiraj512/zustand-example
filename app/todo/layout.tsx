import { Metadata } from 'next'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Todo App',
    description: 'a simple todo app with Zustand, Next.js and TailwindCSS',
}

export default function layout({ children }: Props) {
    return (
        <main className='flex flex-col gap-4 items-center justify-center max-w-lg w-full mx-auto my-10'>
            {children}
        </main>
    )
}

'use client'

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { FakeStoreProducts } from '@/types'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/useCartStore'
import { toast } from '@/components/ui/use-toast'

interface productProps {
    product: FakeStoreProducts
}

export default function ProductCard({ product }: productProps) {

    const addToCart = useCartStore(state => state.addToCart)

    const handlClick = () => {
        addToCart(product)
        toast({
            variant: "success",
            title: "Added to cart",
        })
    }

    return (
        <Card className='w-fit'>
            <CardContent className='p-2'>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className='object-contain w-full h-40'
                />
                <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>
                        {product.description.slice(0, 76).concat('...')}
                    </CardDescription>
                </CardHeader>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
                <span className='font-bold text-xl'>${product.price}</span>
                <Button onClick={() => handlClick()}>
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    )
}

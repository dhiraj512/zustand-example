import { FakeStoreProducts as Product } from '@/types'
import React from 'react'
import { Card, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCartStore } from '@/store/useCartStore'
import { Minus, Plus, Trash2 } from 'lucide-react'

interface cartItemProps {
    item: Product
}

export default function CartItems({ item }: cartItemProps) {

    const removeItem = useCartStore(state => state.removeFromCart)
    const increaseQuantity = useCartStore(state => state.incrementQuantity)
    const decreaseQuantity = useCartStore(state => state.decrementQuantity)

    return (
        <Card className='p-4 flex flex-col gap-1'>
            <div className="flex items-start gap-2">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className='object-contain h-16 w-16'
                />
                <CardTitle className='text-xl font-semibold flex flex-col gap-1'>
                    <span>{item.title}</span>
                    <span className='text-lg font-medium'>${item.price}</span>
                </CardTitle>
            </div>
            <div className='flex justify-between items-center text-md font-medium'>
                <span className='inline-flex gap-1'>Quantity:
                    <Button className='w-5 h-5 p-0' onClick={() => increaseQuantity(item)}><Plus className='w-3 h-3' /></Button>
                    {item.quantity}
                    <Button className='w-5 h-5 p-0' onClick={() => decreaseQuantity(item)} disabled={item.quantity === 1}><Minus className='w-3 h-3' /></Button>
                </span>
                <Button size="icon" onClick={() => removeItem(item)} >
                    <Trash2 className='h-5 w-5' />
                </Button>
            </div>
        </Card>
    )
}

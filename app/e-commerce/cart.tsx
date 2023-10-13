'use client'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import useFromStore from "@/hooks/useFromStore"
import { useCartStore } from "@/store/useCartStore"
import CartItems from "./cartItems"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Cart() {

    const cart = useFromStore(useCartStore, (state) => state.cart)
    let total = 0;

    if (cart) {
        total = cart.reduce((acc, item) => {
            return acc + item.price * (item.quantity as number)
        }, 0)
    }

    return (
        <Sheet>
            <SheetTrigger variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-sm'>{cart?.length}</span>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="p-1 space-y-1">
                    <SheetTitle className="font-bold text-2xl">Shopping Cart</SheetTitle>
                    <span className='font-semibold text-lg'>Total: {cart?.length && total.toFixed(2)}$</span>
                </SheetHeader>
                <ScrollArea className="h-full">
                    <div className='flex flex-col gap-4 my-4 mb-8'>
                        {cart?.map(item => (
                            <CartItems key={item.id} item={item} />
                        ))}
                        {!cart?.length && <span className='text-center font-semibold text-lg'>No items in cart</span>}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

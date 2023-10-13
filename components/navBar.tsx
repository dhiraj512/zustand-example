"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./themeToggle"
import Cart from "../app/e-commerce/cart"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Slash } from "lucide-react"

interface navlinkProps { title: string; href: string; }

const navLinks: navlinkProps[] = [
    {
        title: "Zustand-Example",
        href: "/",
    },
    {
        title: "Todo",
        href: "/todo",
    },
    {
        title: "E-commerce",
        href: "/e-commerce",
    },
]

const navItemStyle = " px-2 py-1 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none"

export default function Navbar() {

    const pathName = usePathname()

    return (
        <div className="flex sticky top-0 z-50 bg-white/80 dark:bg-black/80 gap-4 justify-between items-center px-8 h-14 border-b backdrop-blur-md">
            <div className="flex gap-2 items-center">
                <Link href="https://dhirajp.vercel.app" target="_blank" className={cn(navItemStyle, "bg-primary hover:bg-primary hover:text-primary-foreground text-primary-foreground")}>dp</Link>
                <Slash className="-rotate-[15deg] text-gray-500" />
                {navLinks.map((item, index) => (
                    <Link key={index} href={item.href} className={cn(navItemStyle, pathName === item.href ? "bg-primary hover:bg-primary hover:text-primary-foreground text-primary-foreground" : "")}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <span className="flex-grow" />
            {pathName === "/e-commerce" && <Cart />}
            <ThemeToggle />
        </div>
    )
}
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props
    extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    href: string,
    children: React.ReactNode
}

export default function CustomLink({ href, children, className }: Props) {
    const isInternal = href.startsWith('/')

    return <Link href={href} className={cn(className, 'text-primary hover:text-primary/70 underline underline-offset-2', isInternal ? "" : 'after:content-["↗"]')}>
        {children}
    </Link>
}

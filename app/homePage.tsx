'use client'

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CodeBlock } from '@/components/CodeBlock'
import { codes } from '@/lib/demoCode'
import Link from 'next/link'
import { useDemoStore } from '@/store/useDemoStore'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'
import CustomLink from '@/components/ui/link'

export default function HomePage() {

    const [language, setLanguage] = useState<string>('javascript' || 'typescript')
    const changeLanguage = (value: string) => {
        setLanguage(value)
    }

    const { bear, increase, removeAllBears } = useDemoStore();

    return (
        <div className='flex justify-center gap-8'>
            <div className='max-w-screen-sm p-4 space-y-4 my-8'>
                <p className=' first-letter:text-4xl first-letter:font-bold first-letter:mr-3 first-letter:float-left'>
                    Zustand is a lightweight and developer-friendly state management library for React. It simplifies state management in your application by providing a minimalistic API and taking advantage of React hooks. With Zustand, you can create, access, and update your application&apos;s state in a straightforward manner.
                </p>
                <CustomLink href='https://docs.pmnd.rs/zustand/getting-started/introduction'>Read docs</CustomLink>

                <div className='flex items-center gap-3'>
                    See Examples:
                    <CustomLink href="/todo" >
                        A Todo App
                    </CustomLink>
                    <CustomLink href="/e-commerce" >
                        An E-commerce App
                    </CustomLink>
                </div>

                <div className='flex items-center gap-3'>
                    Made With:<CustomLink href="https://nextjs.org/" >Next.js</CustomLink><CustomLink href="https://ui.shadcn.com" >Shadcn/ui</CustomLink><CustomLink href="https://github.com/pmndrs/zustand" >Zustand</CustomLink>
                </div>
                <div className='flex items-center gap-3'>
                    Deployed with:<CustomLink href="https://vercel.com">Vercel</CustomLink>
                </div>
            </div>
            <div className='relative max-w-screen-md'>
                <CodeBlock
                    code={codes[language]}
                    language={language === 'typescript' ? 'tsx' : 'jsx'} />
                <Card className='absolute right-[96%] top-[60%] p-2 h-fit w-40 flex justify-between items-center gap-3'>
                    <Button variant="outline" size="icon" onClick={increase}><Plus /></Button>
                    <span className='text-5xl'>{bear}</span>
                    <Button variant="outline" size="icon" onClick={removeAllBears}><Trash2 /></Button>
                </Card>
                <div className='absolute top-2 right-0'>
                    <Select defaultValue='javascript' value={language} onValueChange={changeLanguage}>
                        <SelectTrigger className="w-[120px] text-white bg-white/40">
                            <SelectValue placeholder="Change Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem defaultChecked value="javascript">JavaScript</SelectItem>
                            <SelectItem value="typescript">TypeScript</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

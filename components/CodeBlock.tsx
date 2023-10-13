'use client'

import React, { useEffect } from 'react';
import Prism from 'prismjs';
// Import the language you want to highlight
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
// Import a theme
import 'prismjs/themes/prism-okaidia.css';
import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ["latin"] });

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock = React.forwardRef<
    HTMLPreElement,
    CodeBlockProps &
    React.HTMLAttributes<HTMLPreElement>
>(({ className, language, code, ...props }, ref) => {

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);
    return <pre
        ref={ref}
        className={cn(
            "rounded-xl h-fit max-w-screen-sm  border-2 bg-card text-card-foreground shadow",
            className, firaCode.className
        )}
        {...props}
    >
        <code className={cn(`language-${language}`, firaCode.className)}>{code}</code>
    </pre>
})

CodeBlock.displayName = 'CodeBlock';

export { CodeBlock };


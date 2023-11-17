'use client'

import React from 'react'
import { AiOutlineQq } from "react-icons/ai";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname()
    const links = [
        {label:"Home", url:"/"},
        {label:"Issues", url:"/issues"}
    ]

  return (
    <nav className='flex shadow space-x-6 mb-5 border-b px-6 h-14 items-center'>
        <p><Link href="/" className='text-2xl'><AiOutlineQq/></Link></p>
        <ul className='flex space-x-6'>
           {links.map(link => <Link key={link.url} href={link.url} className={classNames({
            'text-zinc-900': currentPath == link.url,
            'text-zinc-500': currentPath !== link.url,
            'hover:text-zinc-800 trasition-colors':true
           })}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar
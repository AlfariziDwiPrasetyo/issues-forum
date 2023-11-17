import React from 'react'
import { AiOutlineQq } from "react-icons/ai";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavBar = () => {
    const links = [
        {label:"Home", url:"/"},
        {label:"Issues", url:"/issues"},
    ]
  return (
    <nav className='flex space-x-6 mb-4 border-b px-6 h-14 items-center'>
        <p><AiOutlineQq/></p>
        <ul className='flex space-x-6'>
           <li><Link href="/" className='text-zinc-500 hover:text-zinc-800'>Home</Link></li>
            <li><Link href='/issues' className='text-zinc-500 hover:text-zinc-800'>Issues</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const NavBar = () => {
const currentPath = usePathname();

    const links = [   
        { label: 'MCX', href: '/'},     
        { label: 'About', href: '/About'},
        { label: 'Issues', href: '/issues'},        
        { label: 'Calendar', href: '/Calendar'},
        { label: 'Board Members', href: '/BoardMembers'},
        { label: 'Donations', href: '/Donations'},

    ]
  return (
    <nav className="">
      {/*        <Link href="/">Logo</Link> */}
      <ul className="flex justify-center mt-3 space-x-6 items-center">
        {links.map(link => 
        <Link 
        key={link.href} 
        className={`${link.href === currentPath ? 'text-black' :' text-teal-100'} hover:text-zinc-300 transition-colors`}
        href={link.href}>{link.label}</Link>)}        
      </ul>
    </nav>
  );
};

export default NavBar;

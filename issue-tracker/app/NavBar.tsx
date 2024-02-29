import Link from "next/link";
import React from "react";

const NavBar = () => {
    const links = [
        { label: 'Home', href: '/'},
        { label: 'About', href: '/issues'},
        { label: 'Issues', href: '/issues'},
        { label: 'Calendar', href: '/issues'},
        { label: 'Board Members', href: '/issues'},
        { label: 'Donations', href: '/issues'},

    ]
  return (
    <nav className="">
      {/*        <Link href="/">Logo</Link> */}
      <ul className="flex justify-center mt-3 space-x-6 items-center">
        {links.map(link => 
        <Link 
        key={link.href} 
        className="text-black hover:text-zinc-300 transition-colors"
        href={link.href}>{link.label}</Link>)}        
      </ul>
    </nav>
  );
};

export default NavBar;

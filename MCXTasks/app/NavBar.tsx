"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "MCX", href: "/" },
    { label: "About", href: "/About" },
    { label: "Tasks", href: "/issues" },
    { label: "Calendar", href: "/Calendar" },
    { label: "Board Members", href: "/BoardMembers" },
    { label: "Donations", href: "/Donations" },
  ];
  return (
    <nav className="">
      {/*        <Link href="/">Logo</Link> */}
      <ul className="backgroundColor: 'black', flex justify-center mt-3 space-x-6 items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-red-500": link.href === currentPath,
              " text-Black-200": link.href !== currentPath,
              "hover:text-green-300 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

'use client';
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
];
const Navbar = () => {
    const active = usePathname();
    const session = useSession();
    return (
        <div className="flex justify-between items-center">
            <Link href={'/'}>
                <h1 className="text-2xl font-bold">adnan.dev</h1>
            </Link>
            <div className="flex gap-3 h-[100px] items-center">
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={`hover:text-[#53c28b] ${active === link.url && 'text-[#53c28b]'}`}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated" && (
                    <button
                        onClick={() => signOut()}
                        className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};
export default Navbar;

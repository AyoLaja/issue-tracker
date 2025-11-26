import Link from 'next/link';
import { FaBug } from 'react-icons/fa';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineIssuesClose } from 'react-icons/ai';

export default function NavBar() {
  const links = [
    { label: <FaBug size={26} />, href: '/' },
    { label: <MdOutlineSpaceDashboard size={26} />, href: '/dashboard' },
    { label: <AiOutlineIssuesClose size={26} />, href: '/issues' },
  ];

  return (
    <nav className='h-dvh w-20 flex flex-col gap-6 items-center bg-amber-700 py-4 px-2'>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

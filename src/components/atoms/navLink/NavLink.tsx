import { ReactNode } from 'react';
import Link from 'next/link';
import { customTwMerge } from '@/utils/customTwMerge';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  active?: boolean;
}

export const NavLink = ({
  href,
  children,
  className,
  active = false,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={customTwMerge(
        'flex h-12 items-center justify-center p-[10px] text-gray-800 body-20 hover:text-primary-400 hover:subTitle-20',
        active &&
          'border-b-[3px] border-primary-400 text-primary-400 subTitle-20',
        className,
      )}
    >
      {children}
    </Link>
  );
};

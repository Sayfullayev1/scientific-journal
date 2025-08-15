import React from 'react'
import Link from "next/link";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className='w-full bg-white rounded-[8px] shadow-[0px_2px_8px_0px_#00000014] p-6'>
      <ul className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="text-[#3498DB]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[2C3E50]">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-1 text-[#2C3E50]">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

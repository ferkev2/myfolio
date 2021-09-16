/* eslint-disable react/no-unknown-property */
import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow-lg bg-neutral text-neutral-content">
        <div className="px-2 mx-2 navbar-start">
          <span className="font-bold">
            Kevin LE FRANC
          </span>
        </div>
        <div className="hidden sm:block px-2 mx-2 navbar-center">
          <div className="flex items-stretch">
            <Link href="/">
              <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
            </Link>
            <Link href="/about">
              <a className="btn btn-ghost btn-sm rounded-btn">About</a>
            </Link>
            <Link href="/contact">
              <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
            </Link>
          </div>
        </div>
        <div className="navbar-end"></div>
        <div className="flex-none ml-auto sm:hidden">
          <div className="dropdown dropdown-end -right-2">
            <button tabIndex={0} className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div tabIndex={0} className="p-2 shadow menu dropdown-content bg-neutral w-screen">
              <Link href="/">
                <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
              </Link>
              <Link href="/about">
                <a className="btn btn-ghost btn-sm rounded-btn">About</a>
              </Link>
              <Link href="/contact">
                <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

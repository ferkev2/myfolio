/* eslint-disable react/no-unknown-property */
import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow-lg bg-neutral text-neutral-content">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">
            Kevin LE FRANC
          </span>
        </div>
        <div className="px-2 mx-2 navbar-center lg:flex">
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
      </div>
    </div>
  );
};

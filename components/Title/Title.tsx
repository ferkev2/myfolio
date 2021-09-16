import React from 'react';
import Image from 'next/image';
import { MailIcon } from './MailIcon';

export const Title = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white flex flex-col p-4 justify-center">
        <div className="avatar items-center justify-center">
          <div className="sm:p-4 md:p-6">
            <div className="sm:w-20 md:w-40 mask mask-hexagon">
              <Image alt="photo" src="/assets/icons/myHead.png" width={400} height={500} layout="responsive"/>
            </div>
          </div>
          <div className="self-center">
            <h1 className="text-center sm:text-start text-xl  sm:text-4xl">Hello I&rsquo;m a JS developer</h1>
            <div className="text-center">
              <p className="md:text-lg lg:text-2xl">JS fullstack developer React / Nodejs based in France</p>
            </div>
          </div>
        </div>
        <ul className="flex justify-center">
          <li className="m-2 sm:w-10 sm:h-10 md:w-14 md:h-14 relative">
            <a href="https://github.com/ferkev2" target="_blank" rel="noopener noreferrer">
              <Image alt="github-logo" src="/assets/icons/GitHub-Mark-64px.png" layout="fill" />
            </a>
          </li>
          <li className="m-2 sm:w-10 sm:h-10 md:w-14 md:h-14 relative">
            <a href="https://www.linkedin.com/in/kevin-le-franc-082962158/" target="_blank" rel="noopener noreferrer">
              <Image alt="linkedin-logo" src="/assets/icons/LI-In-Bug.png" layout="fill" />
            </a>
          </li>
          <li className="mt-2">
            <a href="mailto:ferkev@live.fr">
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

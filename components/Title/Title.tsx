import React from 'react';
import Image from 'next/image';

export const Title = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white flex flex-col p-6">
        <div className="avatar items-center justify-center">
          <div className="p-6">
            <div className="w-40 mask mask-hexagon">
              <Image alt="photo" src="/assets/icons/myHead.png" width="400" height="500"/>
            </div>
          </div>
          <div className="self-center">
            <h1 className="text-6xl">Hello I&rsquo;m a JS developer</h1>
            <p>JS fullstack developer React / Nodejs based in France</p>
          </div>
        </div>
        <ul className="flex justify-center">
          <li className="m-2">
            <a href="https://github.com/ferkev2" target="_blank" rel="noopener noreferrer">
              <Image alt="github-logo" src="/assets/icons/GitHub-Mark-64px.png" width="50" height="50"/>
            </a>
          </li>
          <li className="m-2">
            <a href="https://www.linkedin.com/in/kevin-le-franc-082962158/" target="_blank" rel="noopener noreferrer">
              <Image alt="linkedin-logo" src="/assets/icons/LI-In-Bug.png" width="50" height="50"/>
            </a>
          </li>
          <li className="mt-2">
            <a href="mailto:ferkev@live.fr">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

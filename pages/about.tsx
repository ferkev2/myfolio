import type { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <div className="grid">
          <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-6xl text-center mt-8 mb-10">
            About
          </h1>
          <div className="flex justify-center items-center">
            <figure className="p-2">
              <Image
                src="https://picsum.photos/id/1005/400/250"
                alt="photo-about"
                height="250"
                width="400"
              />
            </figure>
          </div>
          <div className="flex flex-col	justify-center w-3/4 place-self-center mt-10">
            <p className="p-2 mb-4">
              I made a professionnal reconversion in web an especially as a web
              developer. I like javascript a lot and I decided to learn nodeJs
              technologies.
              <br />I learned react and angular in project. But I have bought
              course to speed up my self formation.
            </p>
            <p className="p-2 mb-4">
              Js developer with a php formation too, I like to create user
              interface and back-end api with nodeJs technologies. I worked for
              benext company in France, it&rsquo;s a company specialized in IT
              consulting and product management. The company has a lot a
              customer like Hermés, RadioFrance, Société Générale and others. I
              used to meet extraordinary people and learned a lot of them thanks
              to differents events organized by Benext. The company has a great
              expertise in agilty and product management. You can see all
              informations about Benext on the web page of the company.
            </p>
            <p className="p-2 mb-4">
              In another hand, I am a specialist in react technologies. I worked
              with Helmet, Easy Peasy, Redux and others. I made few talks about
              rxjs and web technologies. You cans see all my projects in the
              homepage of this website.
            </p>
            <p className="p-2 mb-4">
              About agility, I worked in project with Scrum method or Kamban. In
              differents project, I worked in feature teams.
            </p>
            <p className="p-2">
              I used to work on macos or windows but prefer to have linux or
              macos environnement for working.
            </p>
            <h2 className="p-2 text-center mt-10 mb-4 text-4xl">
              My technical Stack
            </h2>
            <ul className="p-2 mb-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center w-full">
              <li className="m-2">
                <Image
                  alt="react-logo"
                  src="/assets/stack/react.png"
                  width={150}
                  height={150}
                />
              </li>
              <li className="m-2">
                <Image
                  alt="nodejs-logo"
                  src="/assets/stack/node-js-logo.png"
                  width="150"
                  height="150"
                />
              </li>
              <li className="m-2">
                <Image
                  alt="angular-logo"
                  src="/assets/stack/angular.png"
                  width="150"
                  height="150"
                />
              </li>
              <li className="m-2">
                <Image
                  alt="js-logo"
                  src="/assets/stack/javascript.png"
                  width="150"
                  height="150"
                />
              </li>
              <li className="m-2">
                <Image
                  alt="html-logo"
                  src="/assets/stack/html.png"
                  width="150"
                  height="150"
                />
              </li>
              <li className="m-2">
                <Image
                  alt="css-logo"
                  src="/assets/stack/css-logo.png"
                  width="100"
                  height="150"
                />
              </li>
              <li className="m-2">
                <Image
                  alt="mongodb-logo"
                  src="/assets/stack/mongodb-logo.png"
                  width="150"
                  height="150"
                />
              </li>
              <li className="m-2">
                <Image
                  alt="postgresql-logo"
                  src="/assets/stack/postgresql.png"
                  width="250"
                  height="150"
                />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;

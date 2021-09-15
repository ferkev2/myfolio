import type { NextPage } from 'next';
import React, { FC } from 'react';

const About: NextPage = () => {
  return (
    <div className="grid">
      <div className="flex justify-center items-center">
        <figure className="p-2">
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
      </div>
      <div className="flex flex-col	justify-center w-3/4 place-self-center">
        <h2 className="p-2">About</h2>
        <p className="p-2 mb-6">
          Js developer with a php formation too, I like to create user interface and back-end api with nodeJs technologies.
          I&rsquo;m worked for benext company in France, it&rsquo;s a company specialized in IT consulting.
          The company has a lot a customer like Hermés, RadioFrance, Société Générale and others.
          But, the company has a great expertise in agilty and product management.
          You can see all informations about Benext on the web page of the company.
        </p>
        <p className="p-2 mb-6">
          In another hand, I am a specialist in react technologies.<br />
          I worked with Helmet, Easy Peasy, Redux and others. I made few talks about rxjs and web technologies.
        </p>
        <br />
        <p className="p-2 mb-6">
          About agility, I worked in project with Scrum method or Kamban. In differents project, I worked in feature teams.<br />
        </p>
        <h2  className="p-2">My technical Stack</h2>
        <ul className="p-2 mb-6">
          <li>Javacsritp logo</li>
          <li>NodeJs logo</li>
          <li>React logo</li>
          <li>Angular logo</li>
          <li>Mongodb logo</li>
          <li>Postgres logo</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

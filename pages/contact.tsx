import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className="h-screen">
        <h1 className="text-6xl text-center mt-8">How to contact me</h1>
        <ContactForm />
      </main>
    </>
  );
};

export default Contact;

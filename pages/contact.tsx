import type { NextPage } from 'next';
import React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';

const Contact: NextPage = () => {
  return (
    <>
      <h1 className="text-6xl text-center mt-8">How to contact me</h1>
      <ContactForm />
    </>
  );
};

export default Contact;

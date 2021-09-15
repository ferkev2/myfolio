import React, { useState } from 'react';

interface IcontactForm {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [ firstname, setFirstname ] = useState<string>('');
  const [ lastname, setLastname] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ message, setMessage ] = useState<string>('');

  const onHandleInput = (e: any) => {

    const { name, value }  = e.target;

    switch (name) {
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
    };
  };

  const onHandleSubmit = (e: any) => {
    const messageToSend = {
      firstname,
      lastname,
      email,
      message,
    };
    console.log(messageToSend);
  };


  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onHandleSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="contact-firstname">
            <span className="label-text">Firstname :</span>
          </label>
          <input value={firstname} onChange={onHandleInput} type="text" id="contact-firstname" name="firstname" placeholder="firstname" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="contact-lastname">
            <span className="label-text">Lastname :</span>
          </label>
          <input value={lastname} onChange={onHandleInput} id="contact-firstname" name="lastname" type="text" placeholder="Lastname" className="input input-bordered" />
        </div>
        <div>
          <label className="label" htmlFor="contact-email">
            <span className="label-text">Email :</span>
          </label>
          <input value={email} onChange={onHandleInput} id="contact-email" name="email" type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="contact-message">
            <span className="label-text">Your Message</span>
          </label>
          <textarea value={message} onChange={onHandleInput} id="contact-message" name="message" className="textarea h-24 textarea-bordered" placeholder="Your message"></textarea>
        </div>
        <div>
          <button type="reset" className="btn">Annuler</button>
          <button className="btn">Valider</button>
        </div>
      </form>
    </>
  );
};

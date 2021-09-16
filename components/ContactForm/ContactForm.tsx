import React, { useState, useRef, SyntheticEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { InputForm } from '../InputForm/InputForm';
import { TextAreaForm } from '../TextAreaForm/TextAreaForm';
interface Iform {
  name: string;
  value: string;
}

export const ContactForm = () => {
  const [ firstname, setFirstname ] = useState<string>('');
  const [ lastname, setLastname] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ message, setMessage ] = useState<string>('');
  const [ captcha, setCaptcha ] = useState<string|null|undefined>('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onHandleParentInput = (values: Iform) => {
    const { name, value }  = values;
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

  const onHandleCaptcha = async () => {
    try {
      const token: string | null | undefined = await recaptchaRef?.current?.getValue();
      if (token) {
        setCaptcha(token);
      }
    } catch (err) {
      console.error(message);
    }
  };

  const onHandleSubmit = () => {
    const messageToSend = {
      firstname,
      lastname,
      email,
      message,
      captcha
    };


    if (captcha && firstname && lastname && email) {
      axios.post('/api/contact', messageToSend).then((response) => {
        console.log(response);
      });
    }
  };


  return (
    <>
      <form className="mt-8 bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={onHandleSubmit}>
        <InputForm
          label='contact-firstname'
          id='contact-firstname'
          name='firstname'
          value={firstname}
          placeholder='firstname'
          onChangeParent={(values: Iform) => onHandleParentInput(values)}
        />
        <InputForm
          label='contact-lastname'
          id='contact-lastname'
          name='lastname'
          value={lastname}
          placeholder='lastname'
          onChangeParent={(values: Iform) => onHandleParentInput(values)}
        />
        <InputForm
          label='contact-email'
          name='email'
          id='contact-email'
          value={email}
          placeholder='email'
          onChangeParent={(values: Iform) => onHandleParentInput(values)}
        />
        <TextAreaForm
          label='contact-message'
          name='message'
          id='contact-message'
          value={message}
          placeholder='Your message'
          onChangeParent={(values: Iform) => onHandleParentInput(values)}
        />
        <div className="text-center">
          <button type="reset" className="btn">Annuler</button>
          <button className="btn ml-2">Valider</button>
        </div>
        <div className="flex justify-center mt-6">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6Lez8WscAAAAAFhB656_Zxta1Q-WpTbyCZC7vi2q'
            onChange={onHandleCaptcha}
          />
        </div>
      </form>
    </>
  );
};

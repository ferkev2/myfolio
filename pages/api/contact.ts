// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodeMailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { firstname, lastname, email, message, captcha } = req.body;
  const errorArray: string[] = [];

  if (!captcha) {
    errorArray.push('captcha');
    res.status(429).json({ type: 'error', message: 'Too many request' });
  }

  const emailRegex = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gim,
  );

  if (!email || !email.match(emailRegex)) {
    errorArray.push('email');
    res.status(400).json({ type: 'error', message: 'please check your email' });
  }

  if (!firstname || !isNaN(firstname) || firstname === '') {
    errorArray.push('firstname');
    res
      .status(400)
      .json({ type: 'error', message: 'please check your firstname' });
  }

  if (!lastname || !isNaN(lastname) || lastname === '') {
    errorArray.push('lastname');
    res
      .status(400)
      .json({ type: 'error', message: 'please check your lastname' });
  }

  if (errorArray && errorArray.length === 0) {
    const transporter = nodeMailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_ADRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });
    const emailMessage = {
      from: email,
      to: process.env.EMAIL_ADRESS,
      subject: 'Prise de contact',
      text: message,
      html: `<pre>${message}</pre>`,
    };
    transporter.sendMail(emailMessage);
    res
      .status(200)
      .json({ type: 'success', message: 'Your email has been sent' });
  }
};

export default handler;

import React, { FC } from 'react';

interface Ierror {
  message: string;
}

export const ErrorForm: FC<Ierror> = ({ message }) => {
  return (
    <div>
      <span className="text-error">&#9888;&#65039; {message}</span>
    </div>
  );
};

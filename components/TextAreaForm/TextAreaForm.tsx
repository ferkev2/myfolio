import React, { FC, useState } from 'react';
import { ErrorForm } from '../ErrorForm/ErrorForm';

interface Iform {
  name: string;
  value: string;
}

interface IinputForm {
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChangeParent: (value: Iform) => void;
}

export const TextAreaForm: FC<IinputForm> = ({
  id,
  label,
  name,
  value,
  placeholder,
  onChangeParent,
}) => {
  const [textAreaClass, setTextAreaClass] = useState(
    'textarea h-24 textarea-bordered',
  );
  const [errorMessage, setErrorMessage] = useState({ name: '', message: '' });

  const onHandleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    checkError(e.target);
    onChangeParent({ name, value });
  };

  const checkError = (values: Iform) => {
    if (!values.value && values.value === '') {
      setErrorMessage({
        name: values.name,
        message: `${values.name} is empty`,
      });
      setTextAreaClass('textarea h-24 textarea-bordered  textarea-error');
    } else {
      setErrorMessage({
        name: '',
        message: '',
      });
      setTextAreaClass('textarea h-24 textarea-bordered');
    }
  };

  return (
    <div className="form-control flex flex-row flex-wrap justify-center mb-6">
      <label className="label w-20 self-start mr-2" htmlFor={label}>
        <span className="label-text">Your Message :</span>
      </label>
      <div className="flex flex-col self-end w-2/3">
        <textarea
          value={value}
          onChange={onHandleInput}
          id={id}
          name={name}
          className={textAreaClass}
          placeholder={placeholder}
        ></textarea>
        {errorMessage.name && errorMessage.message && (
          <ErrorForm message={errorMessage.message} />
        )}
      </div>
    </div>
  );
};

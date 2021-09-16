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

export const InputForm: FC<IinputForm> = ({ id, label, name, value, placeholder, onChangeParent}) => {
  const [inputClass, setInputClass] = useState('input input-bordered');
  const [ errorMessage, setErrorMessage] = useState({ name: '', message: '' });

  const onHandleInput = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value }  = e.target;
    checkError(e.target);
    onChangeParent({ name, value });
  };

  const checkError = (values: Iform) => {
    if (!values.value && values.value === '') {
        setErrorMessage({
        name: values.name,
        message: `${values.name} is empty`,
      });
      setInputClass('input input-error input-bordered');
    } else {
      setErrorMessage({
        name: '',
        message: ''
      });
      setInputClass('input input-bordered');
    }
  };

  return (
    <>
      <div className="form-control flex flex-row flex-wrap mb-6 justify-center">
        <label className="label self-start w-20 mr-2" htmlFor={label}>
          <span className="label-text">{name} :</span>
        </label>
        <div className="flex flex-col w-2/3 self-end">
          <input value={value} onChange={onHandleInput} type="text" id={id} name={name} placeholder={placeholder} className={inputClass} />
          { errorMessage.name && errorMessage.message && <ErrorForm message={errorMessage.message} />}
        </div>
      </div>
    </>
  );
};

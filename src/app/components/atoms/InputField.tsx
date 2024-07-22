// src/components/atoms/InputField.tsx
import React from 'react';

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  value,
  onChange,
  required = false,
  className = ''
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
    />
  );
};

export default InputField;

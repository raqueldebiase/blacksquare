// src/components/molecules/FormField.tsx
import React from 'react';
import Label from '../atoms/Label';
import InputField from '../atoms/InputField';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  required = false
}) => {
  return (
    <div>
      <Label htmlFor={id} text={label} />
      <InputField id={id} type={type} value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default FormField;

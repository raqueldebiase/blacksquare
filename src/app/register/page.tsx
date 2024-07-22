// src/app/register/page.tsx
import React from 'react';
import RegistrationForm from '../components/organisms/RegistrationForm';
import Link from 'next/link';
import '../../styles/globals.css';

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-login">
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;

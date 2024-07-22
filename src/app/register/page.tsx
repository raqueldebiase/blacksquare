// src/app/register/page.tsx
import React from 'react';
import RegistrationForm from '../components/organisms/RegistrationForm';
import Link from 'next/link';
import '../../styles/globals.css';

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-login">
      <RegistrationForm />
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Já tem uma conta? <Link href="/login" className="text-blue-500 hover:underline">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

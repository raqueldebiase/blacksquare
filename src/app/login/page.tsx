// src/app/login/page.tsx
import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import Link from 'next/link';
import '../../styles/globals.css';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-login">
      <LoginForm />
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Não tem uma conta? <Link href="/register" className="text-blue-500 hover:underline">Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

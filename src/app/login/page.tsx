// src/app/login/page.tsx
import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import Link from 'next/link';
import '../../styles/globals.css';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-login">
      <LoginForm />
    </div>
  );
};

export default LoginPage;

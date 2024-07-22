'use client';

// src/components/organisms/LoginForm.tsx
import React, { useState } from 'react';
import FormField from '../molecules/FormField'; // Importando o componente FormField
import ButtonEnter from '../atoms/ButtonEnter'; // Importando o botão de entrada
import Label from '../atoms/Label'; // Importando o Label, se necessário
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', password);
    setError('');
    // Redirecionar ou mostrar uma mensagem de sucesso
  };

  return (
    <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg glass-effect">
      <h1 className="text-2xl mb-6 text-center">Sign in</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ButtonEnter />
      </form>
      <div className="mt-4">
        <p className="text-sm text-center text-white">
          You dont have an account yet? <Link href="/register" className="text-yellow hover:underline">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

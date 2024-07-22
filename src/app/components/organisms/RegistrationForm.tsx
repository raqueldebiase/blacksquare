// src/components/organisms/RegistrationForm.tsx

'use client';

import React, { useState } from 'react';
import ButtonEnter from '../atoms/ButtonEnter';
import FormField from '../molecules/FormField';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Lógica para registro (ex: enviar dados para uma API)
    console.log('Email:', email);
    console.log('Senha:', password);
    setError('');
    // Redirecionar ou mostrar uma mensagem de sucesso
  };

  return (
    <div className="w-full max-w-md p-8 glass-effect">
      <h1 className="text-2xl mb-6 text-center">Registro</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
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
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormField
          id="confirmPassword"
          label="Confirmar Senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <ButtonEnter />
      </form>
    </div>
  );
};

export default RegistrationForm;

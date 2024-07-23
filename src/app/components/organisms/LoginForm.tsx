// src/components/organisms/LoginForm.tsx
'use client';

import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import FormField from '../molecules/FormField';
import ButtonEnter from '../atoms/ButtonEnter';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleIcon from '../../../../public/icon-google.svg';
import { useAuth } from '../../../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login bem-sucedido');
      router.push('/dashboard'); // Redireciona para o dashboard após o login
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Login com Google bem-sucedido', result.user);
      router.push('/dashboard'); // Redireciona para o dashboard após o login
    } catch (error) {
      setError('Erro ao fazer login com Google.');
    }
  };

  if (user) {
    router.push('/dashboard');
    return null; // Evita a renderização do formulário de login se o usuário estiver autenticado
  }

  return (
    <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg glass-effect">
      <h2 className="text-2xl mb-6 text-center">Sign in</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 mb-20">
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
      <div className="my-4 text-center">
        <button onClick={handleGoogleLogin} className="w-48 text-sm bg-blue-500 text-black py-2 rounded-lg hover:bg-blue-700">
          <span className="flex justify-center items-center space-x-2">
            <Image src={googleIcon} alt="Google" width={24} height={24} />
            <span>Sign in with Google</span>
          </span>
        </button>
        <p className="text-sm text-center text-black mt-4">
          You dont have an account yet? <Link href="/register" className="text-black hover:underline">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

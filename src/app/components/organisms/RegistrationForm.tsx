'use client';

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import ButtonEnter from '../atoms/ButtonEnter';
import FormField from '../molecules/FormField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleIcon from '../../../../public/icon-google.svg';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Função para registrar com e-mail e senha
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registro bem-sucedido');
      router.push('/login'); // Redireciona para a homepage após o registro
    } catch (error) {
      console.error('Erro ao registrar:', error);
      setError('Erro ao registrar. Tente novamente.');
    }
  };

  // Função para login com Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Login com Google bem-sucedido', result.user);
      router.push('/login'); // Redireciona para a homepage após o login com Google
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);

      // Verifique se o erro é uma instância de Error padrão
      if (error instanceof Error) {
        // Verifica o código de erro específico do Firebase
        if (error.message.includes('auth/popup-closed-by-user')) {
          setError('O login foi cancelado. Por favor, tente novamente.');
        } else {
          setError('Erro ao fazer login com Google. Tente novamente.');
        }
      } else {
        // Caso o erro não seja um Error padrão
        setError('Erro desconhecido. Tente novamente.');
      }
    }
  };

  return (
    <div className="w-full max-w-md p-8 glass-effect">
      <h1 className="text-2xl mb-6 text-center">Register</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 mb-20 mx-auto">
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
        <FormField
          id="confirmPassword"
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <ButtonEnter />
      </form>
      <div className="my-4 text-center">
        <button onClick={handleGoogleLogin} className="w-48 text-sm bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
          <span className="flex justify-center items-center space-x-2">
          <Image src={googleIcon} alt="Google" width={24} height={24} />
          <span>Sign in with Google</span>
        </span>
        </button>
        <p className="text-sm text-center text-black mt-4">
          Have an account? <Link href="/login" className="text-black hover:underline">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

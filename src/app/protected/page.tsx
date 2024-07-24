// src/app/protected/page.tsx
import { useSession, signIn } from 'next-auth/react';

const ProtectedPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  if (!session) {
    signIn(); // Redireciona para a página de login se não estiver autenticado
    return <p>Redirecting...</p>;
  }

  return <p>Welcome, {session.user.email}!</p>;
};

export default ProtectedPage;

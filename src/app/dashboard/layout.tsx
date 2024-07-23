'use client';

import Link from 'next/link';
import '../globals.css'; 
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext'; 


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth(); // Obtém a função de logout

  const handleLogout = async () => {
    await logout(); // Chama a função de logout
    router.push('/login'); // Redireciona para a página de login após o logout
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-48 bg-gray-200">
        <nav>
        <ul className='text-sm my-10'>
          <li className=" p-3 hover:bg-blue-100 focus:bg-blue-100">
            <Link href="/dashboard" className="text-gray-700 hover:text-black focus:text-black">
              Profile
            </Link>
          </li>
          <li className=" p-3 hover:bg-blue-100 focus:bg-blue-100">
            <Link href="/dashboard/informations" className="text-gray-700 hover:text-black focus:text-black">
              Recent Purchases
            </Link>
          </li>
          <li className=" p-3 hover:bg-blue-100 focus:bg-blue-100">
            <Link href="/dashboard/favorites" className="text-gray-700 hover:text-black focus:text-black">
              Favorites
            </Link>
          </li>
        </ul>
        </nav>
        
        <button 
          onClick={handleLogout} 
          className="w-36 mt-4 p-2 bg-black bg-opacity-50 text-white text-sm rounded hover:bg-opacity-90 mx-auto absolute bottom-0 left-5"
        >
          Logout
        </button>
       
        
      </aside>
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

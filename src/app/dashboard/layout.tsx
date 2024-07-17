// src/app/dashboard/layout.tsx

'use client';

import Link from 'next/link';
import '../globals.css'; 
import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen">
      <aside className="w-48 bg-gray-200 p-4">
        <nav>
          <ul>
            <li className="my-6">
              <Link href="/dashboard" className="text-gray-700 hover:text-black">
                Dashboard
              </Link>
            </li>
            <li className="my-6">
              <Link href="/dashboard/informations" className="text-gray-700 hover:text-black">
                Informações
              </Link>
            </li>
            <li className="my-6">
              <Link href="/dashboard/favorites" className="text-gray-700 hover:text-black">
                Favoritos
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

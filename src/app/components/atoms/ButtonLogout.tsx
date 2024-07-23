import React from 'react';
import { useAuth } from '@/context/AuthContext'; 

const ButtonEnter = () => {
  return (
    <div className="flex justify-center">
      <button className="w-48 mt-4 px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-90 mx-auto">
        Logout
      </button>
    </div>
  );
};

export default ButtonEnter;

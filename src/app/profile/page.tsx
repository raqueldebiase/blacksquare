// src/app/profile/page.tsx
import React from 'react';

const ProfilePage = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold">Profile Summary</h2>
      <div className="bg-white p-4 rounded shadow mt-4">
        {/* Placeholder for profile summary */}
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        {/* Add more profile details here */}
      </div>
      <section className="my-8">
        <h2 className="text-xl font-semibold">Favorite Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {/* Placeholder for favorite items */}
          <div className="bg-white p-4 rounded shadow">Favorite 1</div>
          <div className="bg-white p-4 rounded shadow">Favorite 2</div>
          <div className="bg-white p-4 rounded shadow">Favorite 3</div>
          <div className="bg-white p-4 rounded shadow">Favorite 4</div>
        </div>
      </section>
    </section>
  );
};

export default ProfilePage;

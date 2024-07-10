// src/app/page.tsx
import React from 'react';

const HomePage = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {/* Placeholder for product items */}
        <div className="bg-white p-4 rounded shadow">Product 1</div>
        <div className="bg-white p-4 rounded shadow">Product 2</div>
        <div className="bg-white p-4 rounded shadow">Product 3</div>
        <div className="bg-white p-4 rounded shadow">Product 4</div>
      </div>
    </section>
  );
};

export default HomePage;

import React from 'react';

const Presentation = () => {
  return (
    <div className='max-w-7xl h-[50vh] mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
      <div className="title-presentation">
        <h1 className="text-6xl font-bold mb-1">This</h1>
        <div className="flex justify-end">
          <div className="text-6xl font-bold transform rotate-90">website</div>
          <div className="text-start">
            <div className="text-9xl font-bold">doesnt</div>
            <div className="text-8xl font-bold">exist.</div>
          </div>
        </div>
      </div>
      <div className="text-bege mx-auto leading-loose tracking-wide">
        <p>
          This website is an example of an e-commerce platform built with Next.js. It is the second version of my first project as a frontend developer, originally created with HTML, CSS, and JavaScript (with a touch of desperation). Three years later, I decided to revamp it using new technologies and the knowledge I have acquired over time. In addition to Next.js, I used Tailwind, Vercel, Git, Auth.js, among other tools.
        </p>
      </div>
    </div>
  );
}

export default Presentation;

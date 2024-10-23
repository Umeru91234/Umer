import React from 'react';

export default function Page() {
  return (
    <div className="bg-amber-2000 text-white">
      <section className="flex flex-col justify-center h-screen bg-amber-200 text-center ease-in-out hover:bg-amber-300">
        <h1 className="text-5xl font-extrabold drop-shadow-xl">
          Hello,My name is Muhammad Umer 
        </h1>
        <span className="text-5xl mt-2 font-extrabold drop-shadow-xl">Welcome to my website</span>
      </section>
      <div className="border-t-4 border-amber-2000 my-10"></div>
      <section id='about me' className="bg-red-200 text-center border-b-2 border-t-2 h-96 hover:bg-red-400">
        <h2 className="text-4xl font-black mb-4">
          <span className="text-9xl text-amber-300">A</span>BOUT <span>ME</span>
        </h2>

        <p className="text-1xl font-medium leading-relaxed mx-auto border-l-4 border-amber-300 pl-4 p-7">
          I'm <span className='text-1xl text-red-600 font-semibold'>Muhammad Umer</span>, a new developer knows HTML, CSS, TypeScript,
          Next.js, and Tailwind CSS. I'm still learning. Right now, I'm enrolled in a course at GovernmentHouse,where I'm learning more skills
          to improve my work. I enjoy working on making creative projects and love exploring new ways to make my websites better and attractive.
        </p>
      </section>

      <div className="border-t-4 border-amber-300 my-10"></div>

      {/* Service Section */}
      <section id='service' className="bg-green-300 text-center border-b-2 border-t-2 h-96 hover:bg-green-400">
        <h2 className="text-6xl font-black mb-4">
          <span className="text-9xl text-amber-300">E</span>ucation
        </h2>

        <p className="text-1xl font-medium leading-relaxed mx-auto border-l-4 border-amber-300 pl-4 p-7">
          I'm Muhammad Umer. I resendly done my inter from Board Of Intermadiate Karachi. Now, I'm in Nazeer Husain University. I'll choose bachlor of Software Engineer(BSSE) and it is interesting field. I'm acheiving skills of programming from governor house like HTML,CSS,TYPESCRIPT and now we are studying NEXT JS. 
        </p>
      </section>

      {/* Divider */}
      <div className="border-t-4 border-amber-300 my-10 border-b-2"></div>
      
    </div>
  );
}

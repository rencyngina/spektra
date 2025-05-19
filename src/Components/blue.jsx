import React from 'react';

const Blue = () => {
  return (
    <section className="relative bg-[#243943] text-white py-12 px-4 md:px-16 flex flex-col items-center text-center h-[24vh]">
      <p className="max-w-4xl text-lg md:text-xl leading-relaxed">
        Spektra is a company comprising of Civil and Structural Engineers based in Nairobi, Kenya. At the heart of our company is the Client.
      </p>
      <button className="mt-6 border border-white px-6 py-2 text-white hover:bg-white hover:text-[#003366] transition-colors">
        OUR PROJECTS
      </button>
    </section>
  );
};

export default Blue;
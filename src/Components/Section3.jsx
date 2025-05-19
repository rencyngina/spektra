import React from 'react';
import Image from 'next/image';

const categories = ['All', 'Residential', 'Commercial', 'Institutional', 'Swimming Pools', 'Tanks', 'Infrastructure'];

const projects = [
  {
    category: 'Residential',
    title: 'West Height Apartments Kilimani',
    image: '/images/guys2.avif',
  },
  {
    category: 'Commercial',
    title: 'Hermosa Hotel Karen',
    image: '/images/guys4.jpg',
  },
  {
    category: 'Institutional',
    title: 'National Water Plaza',
    image: '/images/guy6.avif',
  },
  {
    category: 'Swimming Pools',
    title: 'Amkia Villas Swimming Pool',
    image: '/images/guy9.jpg',
  },
  {
    category: 'Tanks',
    title: 'Circular Underground Water Tank',
    image: '/images/guys8.jpg',
  },
  {
    category: 'Infrastructure',
    title: 'Sewer Line Donholme',
    image: '/images/guy8.jpg',
  },
];

const Section3 = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="text-center mb-10">
        <p className="text-orange uppercase font-medium tracking-wide">Experience Professional Excellence</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Projects</h2>
        <div className="w-20 h-1 bg-orange mx-auto mt-2"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded border border-transparent ${cat === 'All' ? 'bg-orange text-white' : 'text-black hover:bg-blue-100'}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="relative rounded overflow-hidden shadow-md group">
            <div className="relative w-full h-56">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <div className="absolute inset-0 bg-black/40 text-white p-4 flex flex-col justify-between">
              <span className="text-xs uppercase font-semibold">{project.category}</span>
              <div className="flex justify-between items-end">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <button className="text-sm bg-orange px-4 py-1 rounded hover:bg-orange">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="border border-orange text-orange px-6 py-2 text-sm font-medium hover:bg-blue-700 hover:text-white transition">
          VIEW ALL PROJECTS &rarr;
        </button>
      </div>
    </section>
  );
};

export default Section3;

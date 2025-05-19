import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Structural Engineering',
    description: 'We have the expertise to carry out the design and analysis of structures.',
    image: '/images/guys2.avif',
  },
  {
    title: 'Civil Works',
    description: 'We carry out the design of associated civil works for various building structures.',
    image: '/images/guy2.avif',
  },
  {
    title: 'Structural Audits',
    description: 'We assess the health and additional load capacity of existing building structures.',
    image: '/images/guy3.jpg',
  },
  {
    title: 'Geotechnical Surveys',
    description: 'We oversee drilling boreholes and analyzes laboratory data from collected samples.',
    image: '/images/guy5.jpg',
  },
  {
    title: 'Project Management',
    description: 'We ensure projects meet deadlines, budgets, and quality standards.',
    image: '/images/guy4.jpg',
  },
];

const Section2 = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <p className="text-orange font-medium tracking-wide uppercase">Sustainable Engineering Practices</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Services</h2>
        <div className="w-20 h-1 bg-orange mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col h-full">
            <div className="relative w-full h-48">
              <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col justify-between p-4 flex-grow">
              <h3 className="text-lg font-bold text-center mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 text-center mb-4">{service.description}</p>
              <div className="text-center mt-auto">
                <button className="border border-gray-800 text-sm px-4 py-2 font-medium flex items-center gap-2 mx-auto hover:bg-gray-800 hover:text-white transition">
                  More Details <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;

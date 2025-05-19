import React from 'react';
import Image from 'next/image';

const Section1 = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-hidden">
          <Image
            src="/images/guys1.avif"
            alt="building1"
            width={300}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/images/guy2.avif"
            alt="building2"
            width={300}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/images/guy4.jpg"
            alt="building3"
            width={300}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/images/guy5.jpg"
            alt="building4"
            width={300}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-6">
        <p className="text-sm text-orange font-medium uppercase tracking-wide border-l-4 border-[#f7901e] pl-2">
          About Spektra Consulting Engineers
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Innovative Engineering <span className="text-orange">Solutions</span>
        </h2>
        <p className="font-semibold">
          Gathara Consulting Engineers Ltd is a leading firm of consulting Civil and Structural Engineers with offices in Nairobi, Kenya. It was founded in 1984 by the Principal Engineer, Eng James Gathara.
        </p>
        <p className="text-gray-700">
          Over the decades the consultancy has acquired the capacity, experience and resources to undertake varied consultancy services in civil and structural engineering. We have delivered high quality civil engineering consultancy services on both small-scale and large-scale projects which include building structures, civil works, geotechnical investigations; and structural audits. Some of the projects undertaken as shown in our portfolio.
        </p>

        <button className="mt-4 border border-orange text-orange px-5 py-2 hover:bg-blue-700 hover:text-white transition-all">
          MORE ABOUT US &rarr;
        </button>
      </div>
    </section>
  );
};

export default Section1;

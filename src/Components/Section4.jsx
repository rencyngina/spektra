import React from 'react';

const Section4 = () => {
  return (
    <section className="bg-slate text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Why Choose Us ?</h2>
        <div className="h-1 w-20 bg-orange-500 mb-6"></div>
        <p className="text-lg mb-12">
        At Spektra Consulting Engineers, our dedicated team of certified professionals ensures reliable and innovative solutions tailored to your energy needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-orange p-8">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-slate2 mb-4">Mission</h3>
            <p className="text-sm text-slate2">
              Our mission is to pioneer a legal revolution as architects of triumph, guiding clients seamlessly to
              achieve objectives, minimize risks, and transform legal challenges into victories within Kenya and across Africa.
            </p>
          </div>

          <div className="bg-orange p-8 ">
            <div className="text-5xl  mb-4">🧭</div>
            <h3 className="text-2xl text-slate2 font-bold mb-4">Vision</h3>
            <p className="text-sm text-slate2">
              Our vision is to forge robust partnerships and become a formidable powerhouse of international and
              regional legal strength by collaborating with premier law firms across Europe, Africa, and the USA.
              We aim to set new standards and ensure unparalleled excellence in every legal matter we undertake.
            </p>
          </div>

          <div className="bg-orange p-8 ">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl text-slate2 font-bold mb-4">Values</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-slate2">
              <li>Innovation Beyond Borders</li>
              <li>Unyielding Commitment to Justice</li>
              <li>Client Triumph is our Triumph</li>
              <li>Versatility in Legal Mastery</li>
              <li>Global Vision, Local Insight</li>
              <li>Inspirational Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

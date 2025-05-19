/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer/Footer";

const About = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-[70vh] font-sans">
      <Navbar/>
      <div className="h-[30vh] md:h-[20vh] w-full flex flex-col justify-center items-center bg-cover bg-center text-white text-center" style={{ backgroundImage: "linear-gradient(rgba(21,21,21,0.6), rgba(30,29,29,0.6)), url(/images/law1.jpg)" }}>
        <h1 className="text-4xl md:text-2xl mb-2 animate-fade-in">About Us</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 text-justify animate-fade-in">
        <h1 className="text-2xl text-orange mb-5 font-semibold">Company Profile</h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          <strong>Spektra Consulting Engineers Limited</strong> is a fully registered consulting firm specializing in Electrical and Mechanical Engineering services. With over two decades of experience, we are renowned for delivering innovative, efficient, and reliable solutions. Our esteemed team, comprising meticulously selected engineers and technicians, embodies unparalleled expertise, innovation, and an unwavering commitment to excellence.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          Our leadership, including Directors and Associates, alongside our accomplished technical personnel, holds certifications and registrations with the Engineers Board of Kenya (EBK), the Architectural Association of Kenya (AAK), and the Institution of Engineers of Kenya (IEK). We bring profound technical acumen, strategic foresight, and an uncompromising dedication to quality.
        </p>

        <h1 className="text-2xl text-orange mb-4 font-semibold">Vision, Mission, and Core Values</h1>

        <h2 className="text-xl text-gray-900 mb-2 font-semibold">Our Vision</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          To become the preferred Engineering Professional services provider.
        </p>

        <h2 className="text-xl text-gray-900 mb-2 font-semibold">Our Mission</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          To provide excellent Engineering professional services, incorporating the latest trends in technology and environmental responsibility through innovation and creativity within the required time & budget.
        </p>

        <h2 className="text-xl text-gray-900 mb-2 font-semibold">Core Values</h2>
        <ul className="list-disc pl-6 text-lg text-gray-800 mb-5">
          <li><strong>Professionalism</strong></li>
          <li><strong>Integrity</strong></li>
          <li><strong>Customer-Centricity</strong></li>
          <li><strong>Teamwork</strong></li>
        </ul>

        <h1 className="text-2xl text-orange mb-4 font-semibold">Directors and Management Teams</h1>
        <ul className="list-disc pl-6 text-lg text-gray-800 mb-5">
          <li><strong>Eng. Kennedy Otieno</strong> - Mechanical Engineer</li>
          <li><strong>Eng. Eric Murithi</strong> - Electrical Engineer</li>
        </ul>

        <h1 className="text-2xl text-orange mb-4 font-semibold">Staff Organization Chart</h1>
        <ul className="list-disc pl-6 text-lg text-gray-800 mb-5">
          <li><strong>Managing Partner</strong>: M/S Spektra Consulting Engineers Limited — Eng. Kennedy Bonyo Otieno</li>
          <li><strong>Chief Electrical Engineer</strong>: Eng. Moses Simiyu Kerre</li>
          <li><strong>Head Energy Audit & Electrical Engineer</strong>: Eng. Eric Murithi Kithinji</li>
          <li><strong>Chief Mechanical Engineer</strong>: Eng. Kennedy Bonyo Otieno</li>
        </ul>

        <h1 className="text-2xl text-orange mb-4 font-semibold">Why Choose Spektra?</h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          At Spektra, our foremost objective is to build and maintain a solid reputation for delivering reliable, professional engineering solutions that adhere to the highest ethical and industry standards. We pride ourselves on tackling complex assignments with both technical precision and creative ingenuity. Our commitment to achieving timely, cost-effective results ensures that we consistently meet—and often exceed—client expectations.
        </p>

        <h1 className="text-2xl text-orange mb-4 font-semibold">Call to Action</h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-10">
          <strong>Request a Consultation</strong> or <strong>Get a Quote</strong> today to experience our exceptional engineering services!
        </p>  
      </div>
      <Footer />
    </div>
  );
};

export default About;

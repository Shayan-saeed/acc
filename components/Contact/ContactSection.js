'use client';

import { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const services = [
  "Technical Presentations & Client Workshops",
  "Consulting & Strategic Advisory",
  "Compliance & ESG Integration",
  "Technical Datasheets, Literature & Compliance Documentation",
  "Short Circuit & Electrical Protection Analysis",
  "Computational Fluid Dynamics (CFD) Analysis",
  "High-Level Design (HLD) & Single-Line Diagrams (SLD)",
  "Bill of Quantities (Level 1 & 2) & Documentation",
  "Equipment Layout & Placement",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    services: [],
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID",   // replace with your EmailJS service ID
    //     "YOUR_TEMPLATE_ID",  // replace with your EmailJS template ID
    //     formData,
    //     "YOUR_PUBLIC_KEY"    // replace with your EmailJS public key
    //   )
    //   .then(() => {
    //     toast.success("Message sent successfully! 🎉");
    //     setFormData({
    //       services: [],
    //       name: "",
    //       email: "",
    //       phone: "",
    //       company: "",
    //       message: "",
    //     });
    //   })
    //   .catch(() => {
    //     toast.error("Failed to send message. Please try again.");
    //   });
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-tight text-primary">
            Let&apos;s start a <br /> conversation.
          </h2>
          <h2 className="text-3xl font-semibold leading-tight">
            Contact us! <br /> We&apos;re here to help.
          </h2>

          <Image
            src="/contact-us.gif"
            alt="Contact Us"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>

        {/* Right Side */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">I am interested in</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Services - Selectable Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {services.map((s, i) => {
                const selected = formData.services.includes(s);
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggleService(s)}
                    className={`px-4 py-2 rounded-md text-sm font-medium border transition whitespace-break-spaces ${
                      selected
                        ? "bg-primary text-white border-primary"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>

            {/* Inputs */}
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded placeholder-gray-400 focus:outline-none border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded placeholder-gray-400 focus:outline-none border border-gray-300"
            />
            <div className="grid grid-cols-5 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-2 px-4 py-2 rounded placeholder-gray-400 focus:outline-none border border-gray-300"
              />
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
                className="col-span-3 px-4 py-2 rounded placeholder-gray-400 focus:outline-none border border-gray-300"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded placeholder-gray-400 focus:outline-none border border-gray-300"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 text-white cursor-pointer px-6 py-3 bg-primary hover:bg-red-700 rounded-lg font-semibold transition"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5335 0.775723C18.4176 0.679546 18.2768 0.618271 18.1275 0.599038C17.9782 0.579805 17.8265 0.603406 17.69 0.66709L1.31836 8.35162V9.83857L8.1948 12.5891L12.6056 19.3751H14.0929L18.7921 1.586C18.8302 1.44031 18.8261 1.2868 18.7803 1.14335C18.7345 0.999894 18.6489 0.872401 18.5335 0.775723ZM13.1746 17.9568L9.38332 12.1239L15.2174 5.73396L14.2943 4.89115L8.41457 11.3309L2.74492 9.06303L17.3325 2.21568L13.1746 17.9568Z"
                  fill="white"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

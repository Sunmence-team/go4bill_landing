import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { motion } from "motion/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import assests from "../assets/assets";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, submit form data to server
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <PageHeader 
        title="Contact Us"
      />

      {/* Main Container */}
      <div className="px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="bg-[#0B2D5C]/5 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-between gap-8"
          >
            <div>
              {/* Title Section */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans">
                We're Here to Help
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-md">
                Get the answers and support you need from our dedicated customer service team.
              </p>

              {/* Details List */}
              <div className="mt-8 space-y-6">
                {/* Contact phone */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/60 flex items-center justify-center shrink-0 text-[#0B2D5C]">
                    <FaPhoneAlt className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">
                      Contact
                    </span>
                    <a href="tel:+2348118785193" className="text-sm sm:text-base font-bold text-[#0B2D5C] hover:underline font-sans">
                      +2348118785193
                    </a>
                  </div>
                </div>

                {/* Email info */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/60 flex items-center justify-center shrink-0 text-[#0B2D5C]">
                    <FaEnvelope className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">
                      Email
                    </span>
                    <a href="mailto:whitequeenprecious1@gmail.com" className="text-sm sm:text-base font-bold text-[#0B2D5C] hover:underline font-sans break-all">
                      whitequeenprecious1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address info */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/60 flex items-center justify-center shrink-0 text-[#0B2D5C] mt-1">
                    <FaMapMarkerAlt className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">
                      Address
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0B2D5C] font-sans leading-snug block">
                      Suntoy building, opposite winner church ogbomoso.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider and Socials */}
            <div>
              <hr className="border-slate-200/80 mb-8" />
              <div className="flex gap-3">
                <a 
                  href="#facebook" 
                  aria-label="Facebook"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B2D5C] text-white flex items-center justify-center hover:scale-110 hover:bg-[#092545] transition-all duration-200 shadow-sm"
                >
                  <FaFacebookF className="text-base sm:text-lg" />
                </a>
                <a 
                  href="#instagram" 
                  aria-label="Instagram"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B2D5C] text-white flex items-center justify-center hover:scale-110 hover:bg-[#092545] transition-all duration-200 shadow-sm"
                >
                  <FaInstagram className="text-base sm:text-lg" />
                </a>
                <a 
                  href="#twitter" 
                  aria-label="Twitter"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B2D5C] text-white flex items-center justify-center hover:scale-110 hover:bg-[#092545] transition-all duration-200 shadow-sm"
                >
                  <FaTwitter className="text-base sm:text-lg" />
                </a>
                <a 
                  href="#linkedin" 
                  aria-label="LinkedIn"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B2D5C] text-white flex items-center justify-center hover:scale-110 hover:bg-[#092545] transition-all duration-200 shadow-sm"
                >
                  <FaLinkedinIn className="text-base sm:text-lg" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D5C] mb-6 font-sans">
                  Send a Message
                </h3>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-sans mb-6"
                  >
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </motion.div>
                ) : null}

                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F0F4F8] border-none rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B2D5C]/25 transition-all font-sans"
                    />
                  </div>

                  {/* Email address field */}
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-mail address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F0F4F8] border-none rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B2D5C]/25 transition-all font-sans"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <textarea 
                      placeholder="Message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F0F4F8] border-none rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B2D5C]/25 transition-all font-sans min-h-[120px] resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {/* Consent Text */}
                <p className="text-[10px] sm:text-xs text-slate-500 font-normal leading-relaxed font-sans mb-6">
                  By submitting this form, you consent to Go4Bill collecting and processing your Information in accordance with our Privacy Policy.
                </p>

                {/* Submit button */}
                <div>
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-[#0B2D5C] text-white rounded-lg font-bold text-sm sm:text-base shadow-sm hover:bg-[#092545] transition-all duration-200 cursor-pointer w-full sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
      <section className="px-4 sm:px-6 lg:px-8 py-10 md:py-24"
    >
     <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full rounded-[2rem] overflow-hidden shadow-xs border border-slate-100"
        >
          <img
            src={assests.map}
            alt="Map Go4Bill"
            className="w-full h-auto object-cover select-none pointer-events-none hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;

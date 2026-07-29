import React, { useState } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import {
  TbArrowsLeftRight,
  TbPercentage,
  TbCheck,
  TbPlus,
  TbX,
} from "react-icons/tb";
import {
  IoMdCheckmarkCircle,
  IoMdStar,
} from "react-icons/io";
import { HiEye } from "react-icons/hi";
import { MdHeadsetMic } from "react-icons/md";
import { FaShieldAlt, FaReceipt, FaPlane, FaFileAlt, FaUser, FaCreditCard, FaLock, FaWallet } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";


const features = [
  {
    title: "Secure Transactions",
    description: "Your money and information are protected with advanced security measures.",
    icon: <FaLock className="text-2xl" />,
    isTeal: false,
  },
  {
    title: "Fast Transfers",
    description: "Send and receive money quickly across borders with seamless and efficient transaction processing.",
    icon: <TbArrowsLeftRight className="text-2xl" />,
    isTeal: true,
  },
  {
    title: "Bill payments",
    description: "Pay Utility bills, Subscriptions, and service worldwide instantly.",
    icon: <FaReceipt className="text-2xl" />,
    isTeal: false,
  },
  {
    title: "Multi-currency wallet",
    description: "Hold, send, receive, and exchange multiple currencies in one secure wallet.",
    icon: <FaWallet className="text-2xl" />,
    isTeal: false,
  },
  {
    title: "Cross-border Transfers",
    description: "Send money globally with speed, transparency, and affordable fees.",
    icon: <FaCreditCard className="text-2xl" />,
    isTeal: true,
  },
  {
    title: "Travel & Lifestyle",
    description: "Book flights, hotels, and experiences directly from your wallet.",
    icon: <FaPlane className="text-2xl" />,
    isTeal: false,
  },
];
const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>("What is Go4bill?");

  const toggleFaq = (question: string) => {
    setOpenFaq((prev) => (prev === question ? null : question));
  };

  return (
    <main className=" py-4 md:py-4">
      {/* Hero Container */}
      <div
        id="home"
        className="mainone px-4 sm:px-6 lg:px-8 py-8 md:py-1"
      >
        <div className="bg-primary text-white rounded-[2rem] md:rounded-br-[15rem] overflow-hidden relative shadow-xl">
          <div className="px-6 py-12 sm:px-12 md:py-16 lg:py-24 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content (Text & CTAs) */}
              <div className="lg:col-span-7 flex flex-col justify-center z-10 lg:text-left text-center">
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1] "
                >
                  Your Money, <span className="text-secondary">Anywhere.</span>
                  <br className="hidden sm:inline" /> Everything You Need,{" "}
                  <span className="text-secondary">One App.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="mt-6 text-base sm:text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed "
                >
                  Fund your wallet, send money, pay bills, buy airtime, purchase
                  data, book flights, and access market services – all from one
                  secure platform.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="flex flex-wrap gap-4 mt-8 lg:justify-start justify-center"
                >
                  <a
                    href="#get-started"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-primary bg-white hover:bg-slate-100 active:scale-95 transition-all duration-200 shadow-sm"
                  >
                    Get Started
                  </a>
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-primary bg-white hover:bg-slate-100 active:scale-95 transition-all duration-200 shadow-sm"
                  >
                    Get Started
                  </a>
                </motion.div>
              </div>

              {/* Right Content (Phone Mockup) */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-[350px] sm:h-[450px] lg:h-[450px]">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 lg:top-25 lg:left-15 md:top-60 left-0 top-15 right-0 w-full h-full flex justify-center lg:justify-end items-end"
                >
                  <img
                    src={assets.heroimage}
                    alt="Go4bill Mobile App Preview"
                    className=" object-contain object-bottom max-w-full select-none pointer-events-none lg:translate-y-4 translate-y-0 "
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Marquee Section */}
      <div className="mt-15 bg-primary text-white py-2 overflow-hidden relative shadow-lg">
        {/* Left & Right fading gradients for seamless transition */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex w-max">
          {/* First set of logos */}
          <div className="flex gap-16 md:gap-24 px-8 md:px-12 animate-marquee shrink-0 items-center justify-around min-w-full">
            <img
              src={assets.pay}
              alt="PayPal Logo"
              className="h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 select-none pointer-events-none"
            />
            <img
              src={assets.ali}
              alt="Alipay Logo"
              className="h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 select-none pointer-events-none"
            />
            <img
              src={assets.visa}
              alt="Visa Logo"
              className="h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 select-none pointer-events-none"
            />
          </div>
          {/* Second set of logos for seamless loop */}
          <div className="flex gap-16 md:gap-24 px-8 md:px-12 animate-marquee shrink-0 items-center justify-around min-w-full">
            <img
              src={assets.pay}
              alt="PayPal Logo"
              className="h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 select-none pointer-events-none"
            />
            <img
              src={assets.ali}
              alt="Alipay Logo"
              className="h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 select-none pointer-events-none"
            />
            <img
              src={assets.visa}
              alt="Visa Logo"
              className="h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition duration-300 select-none pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section
        id="about"
        className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Left Column - Mockup Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-tertiary rounded-[2rem] overflow-hidden flex items-end justify-center pt-12 md:pt-16 h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px]"
          >
            <img
              src={assets.heroimage}
              alt="Go4bill Mobile App Feature Preview"
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] object-contain object-bottom select-none pointer-events-none translate-y-4 hover:scale-105 transition-transform duration-500 ease-out"
            />
          </motion.div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex-1 bg-white p-6 md:p-8 rounded-[1.5rem] border border-slate-100/60 shadow-xs flex flex-col justify-center gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 text-[#0B2D5C] text-2xl md:text-3xl">
                <FaFileAlt />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2D5C] mb-2 font-sans">
                  Mission
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal font-sans">
                  To simplify financial access by providing secure, fast, and
                  seamless solutions for payments, money transfers, and
                  essential services, empowering individuals and businesses to
                  thrive in a connected world.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex-1 bg-white p-6 md:p-8 rounded-[1.5rem] border border-slate-100/60 shadow-xs flex flex-col justify-center gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 text-[#0B2D5C] text-2xl md:text-3xl">
                <HiEye />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2D5C] mb-2 font-sans">
                  Vision
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal font-sans">
                  To become a leading global financial platform that empowers
                  people and businesses with secure, seamless, and borderless
                  access to financial services, enabling financial freedom for
                  everyone, everywhere.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why"
        className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-normal font-sans"
          >
            Experience the Benefits of a Faster, Safer, and Smarter Financial
            Platform
          </motion.p>
        </div>

        <div
          id="services"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20 items-stretch"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="relative bg-white pt-12 pb-8 px-6 sm:px-8 rounded-[1.5rem] border border-slate-100/80 shadow-xs flex flex-col justify-start hover:shadow-md transition-all duration-300 group"
            >
              {/* Overlapping Icon Container */}
              <div className={`absolute -top-7 left-8 w-14 h-14 rounded-full flex items-center justify-center shadow-xs border-4 border-white group-hover:scale-110 transition-transform duration-300 ${
                feature.isTeal 
                  ? "bg-[#12b886]/10 text-secondary" 
                  : "bg-tertiary text-[#0B2D5C]"
              }`}>
                {feature.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-3 font-sans">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how"
        className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2D5C] tracking-tight font-sans mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl mx-auto font-sans"
          >
            Experience the Benefits of a Faster, Safer, and Smarter Financial
            Platform
          </motion.p>
        </div>

        {/* Steps Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white border border-slate-100 shadow-sm rounded-[2rem] p-8 md:py-12 md:px-10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Step 1 */}
            <div className="pb-8 md:pb-0 md:pr-10 flex flex-col items-start text-left">
              <div className="relative mb-4 h-16 sm:h-20 flex items-end">
                <span className="text-6xl sm:text-7xl font-bold text-[#0B2D5C]/5 leading-none font-sans tracking-tight select-none">
                  01
                </span>
                <FaUser className="absolute left-3 bottom-0.5 text-2xl text-[#0B2D5C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2D5C] mb-3 font-sans">
                Create Account
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-normal font-sans">
                Sign up in minutes by providing your basic details and creating
                your secure Go4Bill account.
              </p>
            </div>

            {/* Step 2 */}
            <div className="py-8 md:py-0 md:px-10 flex flex-col items-start text-left">
              <div className="relative mb-4 h-16 sm:h-20 flex items-end">
                <span className="text-6xl sm:text-7xl font-bold text-[#0B2D5C]/5 leading-none font-sans tracking-tight select-none">
                  02
                </span>
                <IoMdCheckmarkCircle className="absolute left-3 bottom-0.5 text-2xl text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2D5C] mb-3 font-sans">
                Verify Identity
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-normal font-sans">
                Complete a quick verification process to help keep your account
                secure and comply with financial regulations..
              </p>
            </div>

            {/* Step 3 */}
            <div className="pt-8 md:pt-0 md:pl-10 flex flex-col items-start text-left">
              <div className="relative mb-4 h-16 sm:h-20 flex items-end">
                <span className="text-6xl sm:text-7xl font-bold text-[#0B2D5C]/5 leading-none font-sans tracking-tight select-none">
                  03
                </span>
                <FaCreditCard className="absolute left-3 bottom-0.5 text-2xl text-[#0B2D5C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2D5C] mb-3 font-sans">
                Start paying
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-normal font-sans">
                Send money, receive payments, and pay bills anytime, anywhere..
              </p>
            </div>
          </div>
        </motion.div>

        {/* Large Mockup Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full rounded-[2rem] overflow-hidden shadow-xs border border-slate-100"
        >
          <img
            src={assets.work}
            alt="How Go4Bill works mockup"
            className="w-full h-auto object-cover select-none pointer-events-none hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
        </motion.div>
      </section>

      {/* Our Core Values Section */}
      <section
        id="values"
        className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2D5C] tracking-tight font-sans mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl mx-auto font-sans"
          >
            Experience the Benefits of a Faster, Safer, and Smarter Financial
            Platform
          </motion.p>
        </div>

        {/* Values Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-[#0B2D5C]/5 border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] rounded-[2rem] p-8 md:py-16 md:px-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:divide-x divide-slate-200/60">
            {/* Column 1: Trust & Simplicity */}
            <div className="flex flex-col gap-12 md:gap-16 md:pr-10">
              {/* Trust */}
              <div className="flex flex-col items-start text-left">
                <div className="w-5 h-5 rounded-full bg-[#0B2D5C]/10 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#0B2D5C]" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-2 font-sans">
                  Trust
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  We build lasting relationship by consistently delivering
                  dependable and customer focused financial services.
                </p>
              </div>
              {/* Simplicity */}
              <div className="flex flex-col items-start text-left">
                <div className="w-5 h-5 rounded-full bg-[#0B2D5C]/10 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#0B2D5C]" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-2 font-sans">
                  Simplicity
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  We design our platform to be intuitive and easy to use,
                  removing unnecessary complexity from financial transactions.
                </p>
              </div>
            </div>

            {/* Column 2: Transparency & Accessibility */}
            <div className="flex flex-col gap-12 md:gap-16 md:px-10">
              {/* Transparency */}
              <div className="flex flex-col items-start text-left">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-2 font-sans">
                  Transparency
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  We maintain clear communication, honest pricing and
                  straightforward processes with no hidden surprises.
                </p>
              </div>
              {/* Accessibility */}
              <div className="flex flex-col items-start text-left">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-2 font-sans">
                  Accessibility
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  We make financial services available to everyone regardless of
                  location or background.
                </p>
              </div>
            </div>

            {/* Column 3: Security & Innovation */}
            <div className="flex flex-col gap-12 md:gap-16 md:pl-10">
              {/* Security */}
              <div className="flex flex-col items-start text-left">
                <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-2 font-sans">
                  Security
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  We protect your funds and personal information with advance
                  security unnecessary complexity from financial transactions.
                </p>
              </div>
              {/* Innovation */}
              <div className="flex flex-col items-start text-left">
                <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-2 font-sans">
                  Innovation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  We continuously develop smarter solutions that make managing
                  money easier and more efficient.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Introducing Smart Market Section */}
      <section
        id="value"
        className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Street Gate Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 rounded-[2rem] overflow-hidden shadow-lg border border-slate-100"
          >
            <img
              src={assets.mage1}
              alt="Smart Market Gate Entrance"
              className="w-full aspect-[4/3] object-cover select-none hover:scale-105 transition-transform duration-500 ease-out"
            />
          </motion.div>

          {/* Right Column - Info & Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold text-[#0B2D5C] tracking-tight font-sans mb-4 lg:text-start text-center"
            >
              Introducing Smart Market
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 font-sans lg:text-start text-center"
            >
              Smart Market helps organize market operations through digital
              access, activity tracking, wallet integration, and simplified
              market management. Whether you're visiting the market or running a
              shop, Smart Market provides a seamless experience powered by
              Go4Bill.
            </motion.p>

            {/* Side-by-side Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 ">
              {/* Shop Owners Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-tertiary p-6 rounded-[1.5rem] flex flex-col gap-4 shadow-xs "
              >
                <div className="bg-[#0B2D5C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-xs">
                  <IoMdCheckmarkCircle className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B2D5C] text-base mb-3 font-sans">
                    For Shop Owners
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Digital shop registration",
                      "Market announcements & updates",
                      "Wallet integration for sales",
                      "Operational Management Tools",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-slate-700 text-xs sm:text-sm font-medium font-sans"
                      >
                        <LuCircleCheckBig className="text-[#0B2D5C] mt-0.5 shrink-0 text-base" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Visitors Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-[#12b886]/10 p-6 rounded-[1.5rem] flex flex-col gap-4 shadow-xs"
              >
                <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-xs">
                  <IoMdCheckmarkCircle className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-base mb-3 font-sans">
                    For Visitors
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Easy Market Access With QR Entry",
                      "Automated Entry Records",
                      "Wallet-Based Payments At Stalls",
                      "Full Activity History",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-slate-700 text-xs sm:text-sm font-medium font-sans"
                      >
                        <LuCircleCheckBig className="text-secondary mt-0.5 shrink-0 text-base" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex justify-start"
            >
              <a
                href="#get-started"
                className="inline-flex items-center justify-center bg-secondary text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#0fa073] active:scale-95 transition-all duration-200 shadow-sm"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2D5C] tracking-tight font-sans mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl mx-auto font-sans"
          >
            Experience the Benefits of a Faster, Safer, and Smarter Financial
            Platform
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              quote:
                "Managing payments across different countries used to be complicated. With Go4bill, I can send money, exchange currencies, and pay bills from one platform without any hassle.",
              name: "Micheal Tobiloba",
              role: "Business owner",
              avatar: assets.test1,
            },
            {
              quote:
                "Go4bill has made my life as an international student much easier. From paying subscriptions to receiving funds from home, everything is fast, secure, and convenient.",
              name: "Precious Motunrayo",
              role: "International Student",
              avatar: assets.test2,
            },
            {
              quote:
                "I love how simple and user-friendly Go4Bill is. The platform saves me time, and I never have to worry about failed transactions. It's become my go-to solution for all my everyday payments.",
              name: "Paul Alex",
              role: "Consultant",
              avatar: assets.test1,
            },
            {
              quote:
                "I travel frequently for work, and Go4bill helps me stay connected to my finances wherever I am. The platform is reliable, user-friendly, and incredibly efficient.",
              name: "Dorcas O.",
              role: "Banker",
              avatar: assets.test3,
            },
          ].map((t, idx) => (
            <motion.div
              key={t.name + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white border border-slate-100 hover:border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] rounded-[1.8rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex justify-between items-center mb-6">
                  <img
                    src={assets.topcomma}
                    alt="Quote Icon"
                    className="h-6 md:h-8 w-auto opacity-50 group-hover:opacity-80 transition-opacity duration-300 select-none pointer-events-none"
                  />
                  <div className="flex gap-0.5 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <IoMdStar key={i} className="text-lg" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal font-sans">
                  {t.quote}
                </p>
              </div>

              {/* Divider and Profile */}
              <div className="border-t border-slate-100 pt-6 mt-auto flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-xs group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
                />
                <div>
                  <h4 className="font-bold text-[#0B2D5C] text-base font-sans leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-sans mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section
        id="faq"
        className="px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B2D5C] tracking-tight font-sans mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl mx-auto font-sans"
          >
            Experience the Benefits of a Faster, Safer, and Smarter Financial
            Platform
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {[
              {
                q: "What is Go4bill?",
                a: "Go4bill stands out as a leading financial platform, giving users complete control over their transfers, bill payments, and borderless transactions.",
              },
              {
                q: "How do i contact customer care?",
                a: "You can reach our customer support team 24/7 via the in-app support chat, email at support@go4bill.com, or through our active customer care phone line.",
              },
              {
                q: "How to create an account?",
                a: "To create an account, download the Go4Bill app from the App Store or Google Play Store, click 'Create Account', fill in your basic details, and verify your identity.",
              },
              {
                q: "is Go4bill secure?",
                a: "Yes, Go4Bill utilizes state-of-the-art multi-layer encryption, secure identity verification protocols, and two-factor authentication to ensure all your transactions and personal data are fully protected.",
              },
            ].map((item, idx) => {
              const isOpen = openFaq === item.q;
              return (
                <motion.div
                  key={item.q}
                  onClick={() => toggleFaq(item.q)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  className={`p-6 rounded-[1.2rem] border transition-all duration-300 cursor-pointer select-none ${
                    isOpen
                      ? "bg-[#0B2D5C] text-white border-transparent shadow-md"
                      : "bg-white text-slate-800 border-slate-100/80 hover:border-slate-200/80 shadow-xs"
                  }`}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-sm sm:text-base font-sans tracking-tight">
                      {item.q}
                    </h3>
                    <span
                      className={`text-base transition-transform duration-300 ${isOpen ? "rotate-90 text-white" : "text-[#0B2D5C]/60"}`}
                    >
                      {isOpen ? <TbX /> : <TbPlus />}
                    </span>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`pt-4 text-xs sm:text-sm leading-relaxed font-sans ${isOpen ? "text-white/80" : "text-slate-500"}`}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {[
              {
                q: "Are there any hidden fees?",
                a: "No, we believe in complete transparency. We have a straightforward, competitive transaction charge structure, and we do not charge any hidden monthly maintenance fees.",
              },
              {
                q: "How fast are transactions on Go4bill ?",
                a: "Transactions on Go4Bill are processed instantly. Whether you are sending money to a friend, paying a bill, or buying airtime, funds are delivered in seconds.",
              },
              {
                q: "Can i use Go4bill for international transactions?",
                a: "Yes, Go4Bill supports borderless financial access, allowing you to send money and execute transactions internationally with competitive currency exchange rates.",
              },
            ].map((item, idx) => {
              const isOpen = openFaq === item.q;
              return (
                <motion.div
                  key={item.q}
                  onClick={() => toggleFaq(item.q)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  className={`p-6 rounded-[1.2rem] border transition-all duration-300 cursor-pointer select-none ${
                    isOpen
                      ? "bg-[#0B2D5C] text-white border-transparent shadow-md"
                      : "bg-white text-slate-800 border-slate-100/80 hover:border-slate-200/80 shadow-xs"
                  }`}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-sm sm:text-base font-sans tracking-tight">
                      {item.q}
                    </h3>
                    <span
                      className={`text-base transition-transform duration-300 ${isOpen ? "rotate-90 text-white" : "text-[#0B2D5C]/60"}`}
                    >
                      {isOpen ? <TbX /> : <TbPlus />}
                    </span>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`pt-4 text-xs sm:text-sm leading-relaxed font-sans ${isOpen ? "text-white/80" : "text-slate-500"}`}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download/CTA Section */}
      <section id="download" className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-[#0B2D5C] text-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative shadow-xl">
          <div className="px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Content (Text & Badges) */}
              <div className="lg:col-span-7 flex flex-col justify-center  text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight my-6 font-sans"
                >
                  Start Using <br className="hidden sm:inline" /> Go4Bill Today
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-sans mx-auto lg:mx-0"
                >
                  Join thousands of users managing payments, utilities, travel,
                  and market services from one platform. Download Go4Bill and
                  take control of your finances.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <div className="flex md:flex-row flex-col gap-4 pb-6">
                    <a
                      href="#playstore"
                      className="bg-black border border-gray-400 rounded-2xl px-6 py-3 flex items-center gap-3 text-white min-w-[220px]"
                    >
                      <img src={assets.play} alt="Google Play" className="w-8 h-8 object-contain" />
                      <div>
                        <p className="text-xs">GET IT ON</p>
                        <h4 className="text-2xl font-semibold">Google Play</h4>
                      </div>
                    </a>

                    <a
                      href="#appstore"
                      className="bg-black border border-gray-400 rounded-2xl px-6 py-3 flex items-center gap-3 text-white min-w-[220px]"
                    >
                      <img src={assets.apple} alt="Apple Store" className="w-8 h-8 object-contain" />
                      <div>
                        <p className="text-xs">Download on the</p>
                        <h4 className="text-2xl font-semibold">App Store</h4>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Content (Overlapping Phone Mockups) */}
              <div className="lg:col-span-5 relative flex justify-center items-end h-[320px] sm:h-[400px] lg:h-[400px] w-full overflow-hidden">
                <div className="relative w-[280px] sm:w-[380px] h-full flex justify-center items-end">
                  {/* Back Phone */}
                  <motion.img
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    src={assets.backphone}
                    alt="Go4bill App Back Preview"
                    className="absolute bottom-0 right-0 sm:left-30 left-20 w-[260px] sm:w-[400px] z-10 select-none pointer-events-none object-contain"
                  />
                  {/* Front Phone */}
                  <motion.img
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    src={assets.fontphone}
                    alt="Go4bill App Front Preview"
                    className="absolute bottom-0 right-17 sm:right-10 sm:left-4  w-[250px] sm:w-[360px] z-20 select-none pointer-events-none object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

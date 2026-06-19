import React from "react";
import PageHeader from "../components/PageHeader";
import { motion } from "motion/react";
import { TbCheck, TbArrowsLeftRight, TbWifi } from "react-icons/tb";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaLock, FaWallet, FaFileAlt, FaClock, FaBolt, FaTv, FaGlobe, FaCreditCard, FaPlane, FaShoppingBag, FaReceipt } from "react-icons/fa";
import assets from "../assets/assets";
import { LuCircleCheckBig } from "react-icons/lu";

const Services: React.FC = () => {
  const cards = [
    {
      title: "Secure wallet funding",
      description: "Easily add funds to your wallet through secure payment channels, ensuring your money is protected at every step.",
      icon: <FaLock className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
    {
      title: "Wallet balance management",
      description: "Keep track of your available funds in real time with a clear and intuitive wallet management system..",
      icon: <FaWallet className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
    {
      title: "Transaction history",
      description: "Access a detailed record of all your transactions anytime, making it easy to monitor and manage your finances.",
      icon: <FaFileAlt className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
    {
      title: "Fast and reliable payments",
      description: "Enjoy instant and dependable payments for bills, transfers, and other services with minimal delays.",
      icon: <FaClock className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
  ];

  const transferCards = [
    {
      title: "Instant transfers",
      description: "Send money quickly and securely to other users with real-time transaction processing.",
    },
    {
      title: "User Search by Username",
      description: "Search for and identify users instantly through their unique usernames.",
    },
    {
      title: "User Search by Phone Number",
      description: "Easily find and connect with users using their registered phone numbers.",
    },
    {
      title: "User Search by Email",
      description: "Locate users conveniently using their registered email addresses for seamless transactions.",
    },
    {
      title: "Transaction Receipts",
      description: "Access and download detailed receipts for every transaction for easy tracking and record-keeping.",
    },
  ];

  const topUpCards = [
    {
      provider: "MTN",
      logo: assets.mtn,
      plans: [
        "Daily plan",
        "Weekly plan",
        "Monthly",
        "Unlimited Router",
        "Special/Social Plan",
        "And More...",
      ],
    },
    {
      provider: "AIRTEL",
      logo: assets.air,
      plans: [
        "Daily/Weekly plan",
        "Mega plan",
        "Monthly Subscription",
        "Always-On",
        "Special/Social Plan",
        "And More...",
      ],
    },
    {
      provider: "GLO",
      logo: assets.glo,
      plans: [
        "Daily plan",
        "Weekly plan",
        "Weekend",
        "Youtube",
        "Special/Social Plan",
        "And More...",
      ],
    },
    {
      provider: "9 MOBILE",
      logo: assets.mobil,
      plans: [
        "Daily plan",
        "Weekly plan",
        "Monthly",
        "Collabo Package",
        "Special/Social Plan",
        "And More...",
      ],
    },
  ];

  const billCards = [
    {
      title: "Electricity",
      description: "Pay your electricity bills quickly and conveniently from anywhere, anytime.",
      icon: <FaBolt className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
    {
      title: "Cable TV",
      description: "Renew your cable TV subscriptions seamlessly and never miss your favorite shows.",
      icon: <FaTv className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
    {
      title: "Internet services",
      description: "Purchase data plans and internet subscriptions with fast and secure processing.",
      icon: <FaGlobe className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
    {
      title: "Other digital utilities",
      description: "Access a variety of essential digital services and payments all in one place.",
      icon: <FaCreditCard className="text-xl sm:text-2xl text-[#0b2d5c]" />,
    },
  ];

  const flightCards = [
    {
      title: "Flight Search",
      description: "Find flights from multiple airlines and travel providers in one convenient place.",
      image: assets.flight1,
    },
    {
      title: "Flight Comparison",
      description: "Compare prices, schedules, and options to choose the flight that best suits your needs.",
      image: assets.flight2,
    },
    {
      title: "Secure payments",
      description: "Book with confidence using safe and encrypted payment methods.",
      image: assets.flight3,
    },
    {
      title: "Instant booking confirmation",
      description: "Receive immediate booking confirmation and travel details as soon as your payment is completed.",
      image: assets.flight4,
    },
  ];

  const marketCards = [
    {
      role: "For Shop Owners",
      isGreen: false,
      plans: [
        "Shop Registration And Onboarding",
        "Business Profile Management",
        "Transaction Monitoring",
        "Customer Engagement Support",
        "Market Administration Assistance",
      ],
    },
    {
      role: "For Visitors",
      isGreen: true,
      plans: [
        "Digital Market Access",
        "Visitor Activity Tracking",
        "Entry And Exit Monitoring",
        "Wallet-Based Payments",
        "Improved Security And Accountability",
      ],
    },
    {
      role: "For Market Administrators",
      isGreen: false,
      plans: [
        "Centralized Market Oversight",
        "Visitor Record Management",
        "Business Monitoring Tools",
        "Operational Reporting",
        "Enhanced Security Management",
      ],
    },
  ];

  const ecoSystemItems = [
    {
      label: "Wallet",
      icon: <FaWallet className="text-xl sm:text-2xl text-[#0B2D5C]" />,
      left: "50%",
      top: "10%",
      x2: "50%",
      y2: "10%",
    },
    {
      label: "Transfers",
      icon: <TbArrowsLeftRight className="text-xl sm:text-2xl text-[#0B2D5C]" />,
      left: "84.64%",
      top: "30%",
      x2: "84.64%",
      y2: "30%",
    },
    {
      label: "Bills",
      icon: <FaReceipt className="text-xl sm:text-2xl text-[#0B2D5C]" />,
      left: "84.64%",
      top: "70%",
      x2: "84.64%",
      y2: "70%",
    },
    {
      label: "Airtime",
      icon: <TbWifi className="text-xl sm:text-2xl text-[#0B2D5C]" />,
      left: "50%",
      top: "90%",
      x2: "50%",
      y2: "90%",
    },
    {
      label: "Flights",
      icon: <FaPlane className="text-xl sm:text-2xl text-[#0B2D5C]" />,
      left: "15.36%",
      top: "70%",
      x2: "15.36%",
      y2: "70%",
    },
    {
      label: "Market Union",
      icon: <FaShoppingBag className="text-xl sm:text-2xl text-[#0B2D5C]" />,
      left: "15.36%",
      top: "30%",
      x2: "15.36%",
      y2: "30%",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Reusable Hero Header Card */}
      <PageHeader 
        title="What we Do"
      />

      {/* Services page content starts here */}
      <div className="px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Smart Digital Wallet
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal font-sans"
          >
            Fund your wallet securely and manage your money from one centralized platform.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-6 sm:p-8 rounded-[1.5rem] border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col items-start gap-4 sm:gap-5"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                {card.icon}
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0b2d5c] mb-2 sm:mb-3 font-sans">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal font-sans">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Instant Money Transfers Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Instant Money Transfers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal font-sans"
          >
            Transfer money securely to other Go4Bill users in just a few taps.
          </motion.p>
        </div>

        {/* Desktop Layout (3 Columns) */}
        <div className="hidden lg:grid grid-cols-3 gap-x-8 gap-y-10 max-w-7xl mx-auto">
          {/* Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#0B2D5C] text-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-2">
              {transferCards[0].title}
            </h3>
            <p className="text-sm text-white/80">
              {transferCards[0].description}
            </p>
          </motion.div>

          {/* Empty space */}
          <div />

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#0B2D5C] text-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-2">
              {transferCards[1].title}
            </h3>
            <p className="text-sm text-white/80">
              {transferCards[1].description}
            </p>
          </motion.div>

          {/* Empty space */}
          <div />

          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#0B2D5C] text-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-2">
              {transferCards[2].title}
            </h3>
            <p className="text-sm text-white/80">
              {transferCards[2].description}
            </p>
          </motion.div>

          {/* Empty space */}
          <div />

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#0B2D5C] text-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-2">
              {transferCards[3].title}
            </h3>
            <p className="text-sm text-white/80">
              {transferCards[3].description}
            </p>
          </motion.div>

          {/* Empty space */}
          <div />

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#0B2D5C] text-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-2">
              {transferCards[4].title}
            </h3>
            <p className="text-sm text-white/80">
              {transferCards[4].description}
            </p>
          </motion.div>
        </div>

        {/* Mobile/Tablet Layout (Single Column) */}
        <div className="lg:hidden flex flex-col gap-6">
          {transferCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
              className="bg-[#0B2D5C] text-white p-6 sm:p-8 rounded-[1.5rem] shadow-sm flex flex-col justify-center"
            >
              <h3 className="text-base sm:text-lg font-bold mb-2 font-sans">{card.title}</h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-normal font-sans">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Airtime & Data Top-Ups Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Airtime & Data Top-Ups
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal font-sans"
          >
            Stay connected by purchasing airtime and data bundles directly from your wallet.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {topUpCards.map((card, idx) => (
            <motion.div
              key={card.provider}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#0B2D5C]/5 p-6 sm:p-8 rounded-[2rem] hover:shadow-lg transition-all duration-300 flex flex-col items-start"
            >
              {/* Provider Logo */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-xs flex items-center justify-center p-0.5 mb-6">
                <img 
                  src={card.logo} 
                  alt={`${card.provider} Logo`} 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Provider Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0B2D5C] mb-6 font-sans tracking-wide">
                {card.provider}
              </h3>

              {/* Plans List */}
              <ul className="space-y-4 w-full">
                {card.plans.map((plan) => (
                  <li key={plan} className="flex gap-3 items-center text-slate-700 text-sm font-medium font-sans">
                    <LuCircleCheckBig className="text-[#0B2D5C] text-lg shrink-0" />
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Pay Bills Seamlessly Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Pay Bills Seamlessly
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal font-sans"
          >
            Pay essential utility bills without leaving the app.
          </motion.p>
        </div>

        {/* Outer Box Container with Light Blue/Gray Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0B2D5C]/5 p-6 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem]"
        >
          {/* Inner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {billCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200/40 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2d5c] mb-2 sm:mb-3 font-sans">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal font-sans">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 5. Flight Booking Section */}
      <div className=" px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Flight Booking
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal font-sans"
          >
            Book Flights Effortlessly
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ">
          {flightCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-[1.5rem] border border-slate-200/60 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-3 font-sans">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans flex-1">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. Market Union Section */}
      <div id="market-union" className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Market Union
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal font-sans"
          >
            Smart Market Access & Management Platform
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {marketCards.map((card, idx) => (
            <motion.div
              key={card.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 sm:p-10 rounded-[2rem] hover:shadow-lg transition-all duration-300 flex flex-col items-start ${
                card.isGreen ? "bg-[#8ce9c4] text-slate-900" : "bg-[#0B2D5C]/5 text-slate-800"
              }`}
            >
              {/* Header Icon */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-xs ${
                card.isGreen ? "bg-secondary text-white" : "bg-[#0B2D5C] text-white"
              }`}>
                <TbCheck className="text-xl sm:text-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-6 mt-4 font-sans text-slate-900">
                {card.role}
              </h3>

              {/* Plans/Features List */}
              <ul className="space-y-4 w-full flex-1">
                {card.plans.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm sm:text-base font-medium font-sans">
                    <IoMdCheckmarkCircle className={`text-lg shrink-0 mt-1 ${
                      card.isGreen ? "text-secondary" : "text-[#0B2D5C]"
                    }`} />
                    <span className={card.isGreen ? "text-slate-800" : "text-slate-700"}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 7. Eco System Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 max-w-7xl mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Eco System
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal font-sans"
          >
            One Platform, Multiple Services
          </motion.p>
        </div>

        {/* Diagram Wrapper */}
        <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[540px] md:h-[540px]">
          {/* Dotted lines background */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Circular dotted connector */}
            <div className="border-2 border-dotted border-[#0B2D5C]/35 w-[80%] h-[80%] rounded-full absolute top-[10%] left-[10%]" />
            
            {/* Radial dotted connectors */}
            <svg className="w-full h-full absolute inset-0">
              {ecoSystemItems.map((item, idx) => (
                <line 
                  key={idx}
                  x1="50%" 
                  y1="50%" 
                  x2={item.x2} 
                  y2={item.y2} 
                  stroke="#0B2D5C" 
                  strokeOpacity="0.35"
                  strokeDasharray="4, 4" 
                  strokeWidth="2"
                />
              ))}
            </svg>
          </motion.div>

          {/* Central Circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <FaWallet className="text-4xl sm:text-5xl text-[#0B2D5C]" />
          </motion.div>

          {/* Outer Circles */}
          {ecoSystemItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              style={{ left: item.left, top: item.top }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center w-20 sm:w-28 text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0B2D5C]/10 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                {item.icon}
              </div>
              <span className="text-slate-800 font-bold text-[10px] sm:text-xs md:text-sm font-sans mt-2 tracking-wide leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.h3 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B2D5C] mt-16 sm:mt-24 font-sans mb-16"
        >
          All connected around the Go4Bill logo.
        </motion.h3>
      </div>
    </main>
  );
};

export default Services;



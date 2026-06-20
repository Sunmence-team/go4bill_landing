import React from "react";
import PageHeader from "../components/PageHeader";
import { motion } from "motion/react";
import { TbCheck, TbArrowsLeftRight, TbWifi } from "react-icons/tb";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaLock, FaWallet, FaFileAlt, FaClock, FaBolt, FaTv, FaGlobe, FaCreditCard, FaPlane, FaShoppingBag, FaReceipt, FaExchangeAlt } from "react-icons/fa";
import assets from "../assets/assets";
import { LuCircleCheckBig } from "react-icons/lu";

// ─── Eco System helpers ───────────────────────────────────────────────────────

function polarPercent(angleDeg: number, radiusPct: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const x = 50 + radiusPct * Math.cos(rad);
  const y = 50 + radiusPct * Math.sin(rad);
  return { left: `${x}%`, top: `${y}%` };
}

const ECO_RADIUS = 40;

const ecoSystemItems = [
  {
    label: "Wallet",
    angle: 0,
    icon: <FaWallet className="text-lg text-[#0B2D5C]" />,
  },
  {
    label: "Transfers",
    angle: 60,
    icon: <TbArrowsLeftRight className="text-lg text-[#0B2D5C]" />,
  },
  {
    label: "Bills",
    angle: 120,
    icon: <FaReceipt className="text-lg text-[#0B2D5C]" />,
  },
  {
    label: "Airtime",
    angle: 180,
    icon: <TbWifi className="text-lg text-[#0B2D5C]" />,
  },
  {
    label: "Flights",
    angle: 240,
    icon: <FaPlane className="text-lg text-[#0B2D5C]" />,
  },
  {
    label: "Smart Market",
    angle: 300,
    icon: <FaShoppingBag className="text-lg text-[#0B2D5C]" />,
  },
].map((item) => ({ ...item, ...polarPercent(item.angle, ECO_RADIUS) }));

// ─────────────────────────────────────────────────────────────────────────────

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
            <h3 className="text-lg font-bold mb-2">{transferCards[0].title}</h3>
            <p className="text-sm text-white/80">{transferCards[0].description}</p>
          </motion.div>

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
            <h3 className="text-lg font-bold mb-2">{transferCards[1].title}</h3>
            <p className="text-sm text-white/80">{transferCards[1].description}</p>
          </motion.div>

          <div />

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#0B2D5C] text-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-2">{transferCards[2].title}</h3>
            <p className="text-sm text-white/80">{transferCards[2].description}</p>
          </motion.div>

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
            <h3 className="text-lg font-bold mb-2">{transferCards[3].title}</h3>
            <p className="text-sm text-white/80">{transferCards[3].description}</p>
          </motion.div>

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
            <h3 className="text-lg font-bold mb-2">{transferCards[4].title}</h3>
            <p className="text-sm text-white/80">{transferCards[4].description}</p>
          </motion.div>
        </div>

        {/* Mobile/Tablet Layout */}
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
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-xs flex items-center justify-center p-0.5 mb-6">
                <img src={card.logo} alt={`${card.provider} Logo`} className="w-full h-full object-contain rounded-full" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B2D5C] mb-6 font-sans tracking-wide">{card.provider}</h3>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0B2D5C]/5 p-6 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem]"
        >
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
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2d5c] mb-2 sm:mb-3 font-sans">{card.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal font-sans">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 5. Flight Booking Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              <div className="h-48 w-full overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#0B2D5C] mb-3 font-sans">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans flex-1">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. Smart Market Section */}
      <div id="smart-market" className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight font-sans"
          >
            Smart Market
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
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-xs ${
                card.isGreen ? "bg-secondary text-white" : "bg-[#0B2D5C] text-white"
              }`}>
                <TbCheck className="text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-6 mt-4 font-sans text-slate-900">{card.role}</h3>
              <ul className="space-y-4 w-full flex-1">
                {card.plans.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm sm:text-base font-medium font-sans">
                    <LuCircleCheckBig className={`text-lg shrink-0 mt-1 ${
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
        {/* Title */}
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

        {/* Diagram — fully SVG for pixel-perfect accuracy */}
        {/*
          SVG coordinate system (viewBox 0 0 200 200, center = 100,100):
          - Outer ring radius:   72  (satellite node centers sit ON this ring)
          - Satellite node r:    13  (gray circle)
          - Center node r:       18  (dark navy circle)
          - Spokes: from r=19 to r=59 (gap between center and satellite)
          - Labels: positioned radially outside each satellite node

          Angles (0 = top, clockwise):
            Wallet       0°   → top
            Transfers   60°   → upper-right
            Bills      120°   → lower-right
            Airtime    180°   → bottom
            Flights    240°   → lower-left
            Smart Market 300° → upper-left
        */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewBox="0 0 250 250"
          className="w-[340px] sm:w-[480px] md:w-[540px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Outer dashed ring ── */}
          <circle
            cx="125" cy="125" r="80"
            fill="none"
            stroke="#0B2D5C"
            strokeOpacity="0.3"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />

          {/* ── Dashed spokes ── */}
          {ecoSystemItems.map((item, idx) => {
            const rad = ((item.angle - 90) * Math.PI) / 180;
            return (
              <line
                key={idx}
                x1={125 + 21 * Math.cos(rad)}
                y1={125 + 21 * Math.sin(rad)}
                x2={125 + 66 * Math.cos(rad)}
                y2={125 + 66 * Math.sin(rad)}
                stroke="#0B2D5C"
                strokeOpacity="0.3"
                strokeWidth="0.7"
                strokeDasharray="3 3"
              />
            );
          })}

          {/* ── Satellite nodes ── */}
          {ecoSystemItems.map((item, idx) => {
            const rad = ((item.angle - 90) * Math.PI) / 180;
            const cx = 125 + 80 * Math.cos(rad);
            const cy = 125 + 80 * Math.sin(rad);

            // Label anchor & offset: push text away from center
            const angle = item.angle;
            let textAnchor = "middle";
            let lx = cx;
            let ly = cy;
            const labelGap = 19;

            if (angle === 0) {
              // Wallet — above
              ly = cy - labelGap;
              textAnchor = "middle";
            } else if (angle === 60) {
              // Transfers — right
              lx = cx + labelGap;
              ly = cy + 1;
              textAnchor = "start";
            } else if (angle === 120) {
              // Bills — right
              lx = cx + labelGap;
              ly = cy + 1;
              textAnchor = "start";
            } else if (angle === 180) {
              // Airtime — below
              ly = cy + labelGap;
              textAnchor = "middle";
            } else if (angle === 240) {
              // Flights — left
              lx = cx - labelGap;
              ly = cy + 1;
              textAnchor = "end";
            } else if (angle === 300) {
              // Smart Market — left, two lines
              lx = cx - labelGap;
              ly = cy + 1;
              textAnchor = "end";
            }

            const isMultiLine = item.label === "Smart Market";

            return (
              <motion.g
                key={item.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, type: "spring", stiffness: 120 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                {/* Gray circle */}
                <circle cx={cx} cy={cy} r="14" fill="#dde3ea" />

                {/* Icon via foreignObject */}
                <foreignObject x={cx - 10} y={cy - 10} width="20" height="20">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0B2D5C",
                    }}
                  >
                    {item.icon}
                  </div>
                </foreignObject>

                {/* Label */}
                {isMultiLine ? (
                  <>
                    <text
                      x={lx} y={ly - 4}
                      textAnchor={textAnchor}
                      fontSize="7.5"
                      fontWeight="600"
                      fill="#1e293b"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    >
                      Smart
                    </text>
                    <text
                      x={lx} y={ly + 5}
                      textAnchor={textAnchor}
                      fontSize="7.5"
                      fontWeight="600"
                      fill="#1e293b"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    >
                      Market
                    </text>
                  </>
                ) : (
                  <text
                    x={lx} y={ly}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    fontSize="7.5"
                    fontWeight="600"
                    fill="#1e293b"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  >
                    {item.label}
                  </text>
                )}
              </motion.g>
            );
          })}

          {/* ── Center node ── */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            style={{ transformOrigin: "125px 125px" }}
          >
            <circle cx="125" cy="125" r="20" fill="#0B2D5C" />
            <foreignObject x="110" y="110" width="30" height="30">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                <FaWallet />
              </div>
            </foreignObject>
          </motion.g>
        </motion.svg>
      </div>
    </main>
  );
};

export default Services;
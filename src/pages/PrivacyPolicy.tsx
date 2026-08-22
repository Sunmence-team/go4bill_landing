import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import {
  FiDatabase,
  FiLock,
  FiCpu,
  FiUserCheck,
  FiUsers,
  FiAlertCircle,
  FiBell,
  FiShare2,
  FiHardDrive,
  FiTrash2,
  FiEye,
  FiAlertOctagon,
  FiGlobe,
  FiExternalLink,
  FiRefreshCw,
  FiMail,
} from "react-icons/fi";

const sections = [
  { id: "info-collect", label: "1. Information We Collect", icon: FiDatabase },
  {
    id: "info-not-collected",
    label: "2. Info We Do Not Collect",
    icon: FiUserCheck,
  },
  { id: "how-we-use", label: "3. How We Use Information", icon: FiCpu },
  {
    id: "banking-partners",
    label: "4. Banking & Financial Partners",
    icon: FiUsers,
  },
  {
    id: "third-party",
    label: "5. Third-Party Service Providers",
    icon: FiExternalLink,
  },
  {
    id: "crash-reporting",
    label: "6. Crash Reporting & Sentry",
    icon: FiAlertCircle,
  },
  { id: "push-notifications", label: "7. Push Notifications", icon: FiBell },
  { id: "info-sharing", label: "8. Information Sharing", icon: FiShare2 },
  { id: "data-security", label: "9. Data Security", icon: FiLock },
  { id: "data-retention", label: "10. Data Retention", icon: FiHardDrive },
  { id: "account-deletion", label: "11. Account Deletion", icon: FiTrash2 },
  { id: "privacy-rights", label: "12. Your Privacy Rights", icon: FiEye },
  {
    id: "children-privacy",
    label: "13. Children's Privacy",
    icon: FiAlertOctagon,
  },
  {
    id: "international-transfers",
    label: "14. International Transfers",
    icon: FiGlobe,
  },
  {
    id: "third-party-links",
    label: "15. Third-Party Links",
    icon: FiExternalLink,
  },
  { id: "changes-policy", label: "16. Policy Changes", icon: FiRefreshCw },
  { id: "contact-us", label: "17. Contact Us", icon: FiMail },
];

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState("info-collect");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <PageHeader title="Go4Bill Privacy Policy" />

      <div className="px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${
                        isActive
                          ? "bg-[#0B2D5C] text-white font-semibold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <Icon
                        className={`text-base shrink-0 ${isActive ? "text-white" : "text-slate-400"}`}
                      />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Privacy Policy Content */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-12">


            {/* Section 1 */}
            <section
              id="info-collect"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiDatabase className="text-[#0B2D5C]" /> 1. Information We
                Collect
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We collect information that is necessary to create and maintain
                your Go4Bill account, provide our Services, process
                transactions, communicate with you, maintain security, and
                improve the reliability of the platform.
              </p>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900">
                  1.1 Information You Provide
                </h3>
                <p className="text-slate-600 text-sm">
                  When you create and use a Go4Bill account, we may collect
                  information such as:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2D5C]"></span>{" "}
                    Full name
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2D5C]"></span>{" "}
                    Email address
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2D5C]"></span>{" "}
                    Phone number
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2D5C]"></span>{" "}
                    Login & authentication data
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2D5C]"></span>{" "}
                    Account & profile information
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2D5C]"></span>{" "}
                    Transaction records initiated/received
                  </li>
                </ul>
                <p className="text-xs text-slate-500 italic">
                  We only request information that is reasonably necessary for
                  the relevant functionality of the Services.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-900">
                  1.2 Financial and Transaction Information
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Go4Bill provides wallet-based financial services, including
                  transfers between Go4Bill users and purchases of third-party
                  services. We may process information associated with your
                  financial activity, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  {[
                    "Wallet balance and account info",
                    "Transaction amounts",
                    "Transaction dates and times",
                    "Transaction types",
                    "Transaction references & identifiers",
                    "Sender and recipient info",
                    "Service purchase details",
                    "Transaction status & history",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs font-medium text-slate-700"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed bg-amber-50 border border-amber-200 p-3 rounded-xl text-amber-900 mt-2">
                  Go4Bill integrates with banking and financial infrastructure
                  providers to facilitate deposits, transaction processing,
                  confirmations, and other financial operations. We do not
                  currently collect or store your bank account credentials as
                  part of normal account registration.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-900">
                  1.3 Information About Your Use of the Services
                </h3>
                <p className="text-slate-600 text-sm">
                  We may collect technical and usage information associated with
                  your use of Go4Bill, such as device type, OS version, app
                  version, IP address, log info, and crash reports.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-900">
                  1.4 Information You Provide to Support
                </h3>
                <p className="text-slate-600 text-sm">
                  If you contact Go4Bill customer support, we collect
                  information provided during the interaction to resolve your
                  inquiry.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="info-not-collected"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiUserCheck className="text-[#0B2D5C]" /> 2. Information We Do
                Not Currently Collect
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Go4Bill does not currently require users to submit identity
                documents during ordinary account registration.
              </p>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">
                  We do not currently collect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs sm:text-sm">
                  <li>National Identification Number (NIN)</li>
                  <li>Bank Verification Number (BVN)</li>
                  <li>Driver&apos;s licence information</li>
                  <li>Passport information</li>
                  <li>Other government-issued identity documents</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                As the Go4Bill platform evolves, certain services or account
                tiers may require additional identity verification or regulatory
                information. If such requirements are introduced, we will
                clearly inform users and update this Privacy Policy.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="how-we-use"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiCpu className="text-[#0B2D5C]" /> 3. How We Use Your
                Information
              </h2>
              <p className="text-slate-600 text-sm">
                We use the information we collect for purposes including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Providing & operating Go4Bill",
                  "Creating & maintaining your account",
                  "Providing access to your wallet",
                  "Processing transfers between Go4Bill users",
                  "Processing purchases of third-party services",
                  "Maintaining transaction records",
                  "Customer support & fraud prevention",
                  "Protecting accounts & transactions",
                  "Investigating suspicious or abusive activity",
                  "Legal & regulatory compliance",
                ].map((purpose, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0B2D5C] mt-1.5 shrink-0"></span>
                    <span className="text-slate-700 text-xs font-medium">
                      {purpose}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="banking-partners"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiUsers className="text-[#0B2D5C]" /> 4. Banking and Financial
                Service Partners
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Go4Bill works with third-party banking and financial
                infrastructure providers to facilitate financial transactions.
                These providers process information necessary to receive/confirm
                deposits, process transactions, maintain records, and detect
                fraud.
              </p>
              <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
                Go4Bill does not publicly disclose the names of all of its
                financial infrastructure providers in this Privacy Policy. Where
                required by law or applicable regulation, relevant information
                will be provided to users.
              </p>
            </section>

            {/* Section 5 */}
            <section
              id="third-party"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiExternalLink className="text-[#0B2D5C]" /> 5. Third-Party
                Service Providers
              </h2>
              <p className="text-slate-600 text-sm">
                Go4Bill allows users to purchase services provided by third
                parties, which may include:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                {[
                  "Airtime",
                  "Mobile Data",
                  "Television Services",
                  "Flight Bookings",
                  "Utility & Digital Services",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-[#0B2D5C] px-3 py-1.5 rounded-full border border-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To complete these transactions, necessary information is
                transmitted to the service provider to fulfill the order.
                Third-party providers handle information according to their
                respective privacy policies and terms.
              </p>
            </section>

            {/* Section 6 */}
            <section
              id="crash-reporting"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiAlertCircle className="text-[#0B2D5C]" /> 6. Crash Reporting
                and Diagnostics
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Go4Bill uses <strong>Sentry</strong> to help us identify,
                investigate, and resolve application crashes and technical
                problems. Technical diagnostic information may be transmitted to
                Sentry strictly for debugging and reliability purposes. We do
                not intentionally use crash reporting data for advertising.
              </p>
            </section>

            {/* Section 7 */}
            <section
              id="push-notifications"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiBell className="text-[#0B2D5C]" /> 7. Push Notifications
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Go4Bill may introduce push notification functionality in the
                future for transaction updates, security alerts, and account
                communications. Users will be provided with appropriate
                permission controls over notification settings.
              </p>
            </section>

            {/* Section 8 */}
            <section
              id="info-sharing"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiShare2 className="text-[#0B2D5C]" /> 8. Information Sharing
              </h2>
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-3 rounded-xl text-sm font-semibold mb-2">
                We do not sell your personal information.
              </div>
              <p className="text-slate-600 text-sm">
                We may share information with trusted third parties strictly
                when necessary to operate Go4Bill, fulfill services (e.g.
                flight/travel providers, financial partners, infrastructure
                providers, security systems), or comply with legal requirements.
              </p>
            </section>

            {/* Section 9 */}
            <section
              id="data-security"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiLock className="text-[#0B2D5C]" /> 9. Data Security
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We take reasonable technical and organizational measures to
                protect personal information against unauthorized access,
                alteration, disclosure, loss, or destruction.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  "Encryption in transit",
                  "Access controls",
                  "Authentication mechanisms",
                  "Secure infrastructure",
                  "Monitoring & logging",
                  "Protected user credentials",
                ].map((sec, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-center"
                  >
                    {sec}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10 & 11 */}
            <section
              id="data-retention"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiHardDrive className="text-[#0B2D5C]" /> 10. Data Retention &
                11. Account Deletion
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We retain personal information for as long as reasonably
                necessary to maintain your account, process transactions,
                fulfill legal and regulatory obligations, resolve disputes, and
                prevent fraud.
              </p>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">
                  In-App Account Deletion:
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Go4Bill provides users with an in-app option to request
                  deletion of their account. Some financial and transaction
                  records may need to be retained for statutory periods after
                  account deletion as required by applicable laws.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section
              id="privacy-rights"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FiEye className="text-[#0B2D5C]" /> 12. Your Privacy Rights
              </h2>
              <p className="text-slate-600 text-sm">
                Depending on applicable law, you may have rights to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs sm:text-sm">
                <li>
                  Request access to personal information we hold about you
                </li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of personal information (subject to legal
                  requirements)
                </li>
                <li>
                  Request information about how your personal information is
                  processed
                </li>
                <li>
                  Object to certain forms of processing or exercise applicable
                  data protection rights
                </li>
              </ul>
            </section>

            {/* Section 13 & 14 */}
            <section
              id="children-privacy"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-6"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
                  <FiAlertOctagon className="text-[#0B2D5C]" /> 13.
                  Children&apos;s Privacy
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Go4Bill is intended for individuals{" "}
                  <strong>18 years of age or older</strong>. We do not knowingly
                  provide Services to children under 18 or intentionally collect
                  personal information from children under 18.
                </p>
              </div>

              <div id="international-transfers">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
                  <FiGlobe className="text-[#0B2D5C]" /> 14. International Data
                  Transfers
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Go4Bill currently operates primarily in Nigeria but may expand
                  its Services internationally. Where personal information is
                  transferred internationally, we take reasonable steps to
                  ensure appropriate data protection standards are followed.
                </p>
              </div>
            </section>

            {/* Section 15 & 16 */}
            <section
              id="third-party-links"
              className="scroll-mt-28 border-b border-slate-100 pb-8 space-y-6"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
                  <FiExternalLink className="text-[#0B2D5C]" /> 15. Third-Party
                  Links & Services
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Go4Bill may integrate with or provide links to third-party
                  services. We are not responsible for the privacy practices or
                  content of third parties operating independently.
                </p>
              </div>

              <div id="changes-policy">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
                  <FiRefreshCw className="text-[#0B2D5C]" /> 16. Changes to This
                  Privacy Policy
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time. When
                  changes are made, we will update the &quot;Last Updated&quot;
                  date at the top of this policy.
                </p>
              </div>
            </section>

            {/* Section 17: Contact Us */}
            <section id="contact-us" className="scroll-mt-28 pt-2">
              <div className="bg-[#0B2D5C] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <FiMail className="text-white" /> 17. Contact Us
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  If you have questions, concerns, or requests relating to this
                  Privacy Policy or how Go4Bill handles your personal
                  information, please contact us:
                </p>
                <div className="space-y-2 pt-2 border-t border-white/10 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-white/60 font-semibold">
                      Website:
                    </span>{" "}
                    <a
                      href="https://go4billapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors"
                    >
                      https://go4billapp.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-white/60 font-semibold">
                      Privacy & Support Email:
                    </span>
                    <a
                      href="mailto:support@go4bill.com"
                      className="underline hover:text-white transition-colors"
                    >
                      support@go4bill.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-white/60 font-semibold">
                      Contact Phone:
                    </span>{" "}
                    <a
                      href="tel:+2349126551860"
                      className="underline hover:text-white transition-colors"
                    >
                      +234 912 655 1860
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

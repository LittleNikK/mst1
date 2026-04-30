'use client';

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#fffaff] text-gray-900">
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
                >
                  <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
                  <motion.div
                    animate={{ rotate: [-360, 0] }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-[15%] top-[15%] flex items-center gap-2"
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF2D2D]"></span>
                    </span>
                    <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-500/50 uppercase">MST BLOCKCHAIN</span>
                  </motion.div>
                </motion.div>
        
                <motion.div
                  animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-[30%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500/20 pointer-events-none"
                >
                  <div className="h-20 w-20 rounded-full border-2 border-red-500/10" />
                  <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#ff2d2d]" />
                </motion.div>
        
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full border-[2px] border-red-300/30 pointer-events-none"
                >
                  <div className="absolute top-[18%] left-[8%] h-[8px] w-[8px] rounded-full bg-[#FF2D2D] shadow-[0_0_15px_#ff2d2d]" />
                </motion.div>
              </div>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bungee-regular text-4xl md:text-6xl font-extrabold uppercase"
        >
          Privacy <span className="text-red-600">Policy</span>
        </motion.h1>

        <p className="mt-4 text-black-500 text-lg">
          Effective Date: 1st Oct 2024
        </p>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">

        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-black-600 leading-relaxed"
        >
         At Masterstroke Technosoft Private Limited ("we," "us," or "our"), your privacy and the security of your personal information are of utmost importance. This Privacy Policy outlines the ways we collect, use, protect, and disclose your information, as well as your rights under applicable data protection laws, including the General Data Protection Regulation (GDPR). By using our website () and engaging with our services, you consent to the practices outlined in this Privacy Policy.(https://mstblockchain.com/)
        </motion.p>

        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

          <p className="text-black-600 mb-3">
            <b>1.1 Information You Provide Directly</b>
          </p>
          <p className="text-black-500 mb-4">
           We collect information when you visit our website or engage with our services, this includes contact details like your name, email address, and any other information you provide to receive updates or inquire about our Project. We collect payment information, wallet addresses, and transaction details necessary to facilitate and record your purchase.
          </p>

          <p className="text-black-600 mb-3">
            <b>1.2 Automatically Collected Information</b>
          </p>
          <p className="text-black-500 mb-4">
           When you interact with our website, we automatically gather technical information:
          </p>
           <p className="text-black-500 mb-4">
            Device and Usage Data — We collect information about your device, browser type, IP address, and usage patterns on our website. This data helps us analyze traffic and enhance your browsing experience.
          </p>
           <p className="text-black-500 mb-4">
           Cookies and Tracking Technologies — Our website uses cookies to remember your preferences, optimize functionality, and analyze website performance. You can manage cookies in your browser settings. For more on our cookie usage, please see our cookie policy.
          </p>

          <p className="text-black-600 mb-3">
            <b>1.3 Information from Third Parties</b>
          </p>
          <p className="text-black-500">
            To comply with regulatory requirements, we may obtain additional data through third-party providers for KYC (Know Your Customer) and AML (Anti-Money Laundering) purposes, where applicable.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">2. Purpose and Legal Basis for Data Processing</h2>
          <p className="text-black-500 leading-relaxed">
            We process personal data under several legal bases outlined by GDPR:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>Processing is necessary to fulfill our obligations when you purchase Nodes or access our services.</li>
            <li>We may process your data to comply with legal and regulatory requirements, including AML and KYC regulations.</li>
            <li>We may use your data to improve website functionality, analyze user trends, and enhance security. Our legitimate interests include protecting the security of our services and improving our offerings.</li>
            <li>For optional marketing communications, we rely on your explicit consent. You can withdraw consent at any time by contacting us or using the unsubscribe option in our communications.</li>
          </ul>
        </div>

        {/* Section 3 */}
         <div>
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="text-black-500 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>Facilitate the purchase and management of Nodes and access to the MST Blockchain network.</li>
            <li>Enhance our website, optimize user experience, and analyze site performance.</li>
            <li>Ensure compliance with legal and regulatory obligations (e.g., AML/KYC compliance).</li>
            <li>Respond to inquiries, provide customer support, and inform you about project updates.</li>
            <li>Send marketing communications if you have consented to receive them. You may opt out at any time.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">4. Sharing and Disclosure of Your Information</h2>
          <p className="text-black-500 leading-relaxed">
           We are committed to safeguarding your privacy and do not sell or trade your personal information. However, we may share data in the following cases:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>Third-party partners assisting with payment processing and regulatory compliance.</li>
            <li>Disclosure to regulatory authorities or legal entities as required by law.</li>
            <li>Transfer of data in the event of a merger, acquisition, or asset sale.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5.  Data Security Measures</h2>
          <p className="text-black-500">
            We implement industry-standard measures to protect your data, including encryption, secure servers, and access controls. Blockchain transactions are public and immutable. Users must protect their private keys, as loss may result in loss of Node access.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">6. International Data Transfers</h2>
          <p className="text-black-500">
           Your information may be stored or processed outside of your country of residence. We ensure GDPR-compliant safeguards for international transfers.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
          <p className="text-black-500">
         We retain personal data only as long as necessary and securely delete or anonymize data when no longer required.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">8. Your Rights Under GDPR</h2>
         <p className="text-black-500 leading-relaxed">
          Under the GDPR, users have the following rights:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>Request access to your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Restrict processing under certain conditions</li>
            <li>Data portability</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-black-500 leading-relaxed">
                To exercise these rights, please contact us at{" "}
                <a 
                    href="mailto:support@mstblockchain.com" 
                    className="text-red-500 underline hover:text-red-600"
                >
                    support@mstblockchain.com
                </a>. 
                We respond to all requests in compliance with GDPR timelines.
                </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">9. Global Standards Adherence</h2>
          <p className="text-black-500">
            This Privacy Policy has been formulated in accordance with the prevailing regulations and laws of the India. We are committed to upholding the highest standards of data protection and privacy for our users. In addition to complying with Indian laws, we recognize the importance of adhering to global privacy standards.
          </p>

<br/>
          <p className="text-black-500">
            For residents of the European Union (EU), our practices align with the General Data Protection Regulation (GDPR), which establishes stringent guidelines for the processing and protection of personal data. For residents of the United States of America (USA), we adhere to the standards set forth by the California Consumer Privacy Act (CCPA) and other relevant regulations applicable to data privacy in the United States. For residents of UAE, we adhere to Constitution of the UAE (Federal Law 1 of 1971), Crimes and Penalties Law (Federal Law 31 of 2021, abrogating Federal Law 3 of 1987), Federal Decree Law No. 34 of 2021 on Combatting Rumors and Cybercrimes and other relevant regulations applicable to data privacy in the region.
          </p>
          <br/>

          <p className="text-black-500">
           By utilizing our services, users from different regions implicitly consent to the terms outlined in this Privacy Policy, acknowledging the specific provisions tailored to their respective jurisdictions. We are committed to continually monitoring and updating our practices to ensure ongoing compliance with evolving global privacy standards.
          </p>
        </div>


        {/* Section 10 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">10. Cookies and Tracking Technologies</h2>
          <p className="text-black-500">
           Our website uses cookies and similar technologies to enhance user experience, personalize content, and analyze site performance. You may disable cookies in your browser settings, but this may impact your ability to access certain features of our website.
          </p>

<br/>
          <p className="text-black-500">
            For detailed information on how we use cookies, please see our Cookie Policy.
          </p>
          
        </div>

        {/* Section 11 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">11. Updates to This Privacy Policy</h2>
          <p className="text-black-500">
          We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will be posted on our website with a revised effective date. We recommend reviewing the policy regularly to stay informed about how we protect your information.
          </p>          
        </div>

        {/* Section 12 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
          <p className="text-black-500">
           If you have questions, concerns, or wish to exercise your rights, please contact us:
          </p><br/>
          <p className="text-black-500">
          Masterstroke Technosoft Private Limited.
          </p><br/>

          <p className="text-black-500">Kohinoor World Towers, Unit no. 403, Tower 3,<br/>
            4th floor Old Pune - Mumbai highway,<br/>
            Opposite Ranka Jewellers,<br/>
            Pimpri, Pune, India<br/>
            PIN: 411018</p>

          
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
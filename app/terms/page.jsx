'use client';

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TermsPage = () => {
  return (
    <div className="bg-[#fffaff] text-gray-900">

      {/* SAME BACKGROUND (NO CHANGE) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[5%] left-[5%] h-[320px] w-[320px] rounded-full border-[2px] border-red-300/30"
        />
      </div>

      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bungee-regular text-4xl md:text-6xl font-extrabold uppercase"
        >
          Terms & <span className="text-red-600">Conditions</span>
        </motion.h1>

        <p className="mt-4 text-black-500 text-lg">
          Effective Date: 1st Oct 2024
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-6">

        {/* FULL CONTENT (EXACT FROM YOUR FILE) */}

        <p className="text-black-500 leading-relaxed">
         Terms and Condition(this "Agreement") are agreed to between MST Blockchain (M/s. Masterstroke Technosoft Private Limited.), a Private Limited company incorporated in Pune, Maharashtra, India (“MST Blockchain,” “we,” or “us”) and you (“You” or “Your”) and govern Your use of and access to the MST Blockchain Services (as defined below). MST Blockchain offers its blockchain-based services through the purchase of nodes and integration with third-party wallets (“Services”).
        </p>

        <p className="text-black-500 leading-relaxed">
          As used in this Agreement, the term “Services” includes the MST Blockchain platform, any associated mobile applications, websites, and all content related to such services, as described on the MST Blockchain platform. The Services allow Users to purchase nodes and link third-party wallets to their accounts for blockchain-related activities. Please note that MST Blockchain is not responsible for any third-party wallets or providers.
        </p>

        <p className="text-black-500 leading-relaxed">
          Before becoming a User and before accessing or using the Services, You are required to agree to the terms of this Agreement. Unless You and MST Blockchain have each signed a separate agreement with MST Blockchain regarding the Services ("Separate Agreement"), this Agreement is the complete and exclusive agreement between You and MST Blockchain regarding Your access to and use of the Services and supersedes any oral or written proposal, unsigned agreements, or other communications between You and MST Blockchain.
        </p>

        <p className="text-black-500 leading-relaxed">
          By accepting this Agreement electronically (for example, by clicking "I Agree"), accessing or using the Services, purchasing nodes, registering for an account with MST Blockchain, or executing this Agreement, You are accepting and agreeing to this Agreement and the policies and guidelines referenced herein. If You do not agree to this Agreement, You may not use the Services.
        </p>

        <p className="text-black-500 leading-relaxed">
          Furthermore, You may not use the Services and may not accept this Agreement if You are a person barred from using or receiving the Services under applicable laws of any jurisdiction, including the country in which You are a resident or from which You use the Services.
        </p>

        <p className="text-black-500 leading-relaxed font-bold">
            PLEASE CAREFULLY READ THIS AGREEMENT. BY ACCESSING OR USING THE SERVICES, OR BY CLICKING A BOX THAT STATES THAT YOU ACCEPT OR AGREE TO THESE TERMS, YOU AGREE THAT YOU HAVE READ AND AGREE TO BE BOUND BY THIS AGREEMENT.
        </p>

        <p className="text-black-500 leading-relaxed">
            If You are entering into this Agreement on behalf of an organization or business entity of any kind (collectively, “Entity”), You represent that You have the authority to bind that Entity to this Agreement. If You do not have such authority or You do not agree to the terms of this Agreement, do not access or use the Services or click that You accept or agree to these terms.
        </p>

        <p className="text-black-500 leading-relaxed">
            Your breach of any provision of this Agreement will automatically, without the requirement of notice or other action, revoke and terminate Your right to access the Services.
        </p>

        {/* DISCLAIMER */}
        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">DISCLAIMER</h2>
          <p className="text-black-500 leading-relaxed">
            The User expressly acknowledges and agrees that the purchase, holding, or sale of nodes on the MST Blockchain platform involves significant risks and uncertainties, including the potential for loss of value, market volatility, and regulatory changes. MST Blockchain makes no representations, warranties, or guarantees, express or implied, regarding the profitability, financial returns, or value appreciation of any node or related digital assets. The User further agrees that any decision to purchase, hold, or sell nodes is undertaken at their sole discretion and risk, and MST Blockchain shall not be held liable for any financial loss, decrease in value, or lack of expected returns arising from such activities.
          </p>
        </div>

        {/* SAMPLE SECTIONS (continue same pattern) */}

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">1. Term</h2>
          <p className="text-black-500">
            This Agreement is entered into as of the date You first accept it or use the MST Blockchain Services (the “Effective Date”) and will continue until terminated as set forth herein. If You have a Separate Agreement with an agreed-upon term, the Term of this Agreement will be subject to the term thereof.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">2. Modifications to the Services</h2>
          <p className="text-black-500">
            MST Blockchain reserves the right, at any time, to modify the Services, as well as the terms of this Agreement, whether by making those modifications available on the Services or by providing notice to You as specified in this Agreement. Any modifications will be effective upon posting to the Services or delivery of such other notice, unless otherwise required by law. You may cease using the Services or terminate this Agreement at any time if You do not agree to any modification. However, You will be deemed to have agreed to any and all modifications through Your continued use of the Services following such notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">3. Eligibility</h2>
          <p className="text-black-500">
            The Services are intended for use by businesses and individuals 18 years of age and older. Additionally, to access and use the Services, You may need to fulfil certain other legal obligations or criteria required in Your jurisdiction. MST Blockchain makes no representations that the Services are appropriate or available for use in all jurisdictions. Accessing any part of the Services is prohibited from any jurisdiction where access to or use of the Services is prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">4.  Accounts and Conduct</h2>
          <p className="text-black-500 font-bold">
            Account Creation and Responsibility
          </p><br/>
          <p className="text-black-500">
            Before becoming a User, You must establish an account with MST Blockchain (an “Account”). Approval of Your request to establish an Account will be at the sole discretion of MST Blockchain. Each Account and the User identification and password for each Account (the “Account ID”) are for Your sole use and may only be used by You and Your authorized employees and contractors. You may not distribute or transfer Your Account or Account ID or provide a third party with the right to access Your Account or Account ID. You are solely responsible for all use of the Services through Your Account. All transactions completed through Your Account or under Your Account ID will be deemed to have been lawfully completed by You. You will ensure the security and confidentiality of Your Account ID and will notify MST Blockchain immediately, by email, if any Account ID is lost, stolen, or otherwise compromised. In connection with establishing an Account, You will be asked to submit certain information about Yourself (“Registration Information”). You agree that: (1) all Registration Information You provide will be true and complete; and (2) You will maintain and promptly update Your Registration Information to keep it accurate and current. You may not: (a) select or use an Account ID of another person with the intent to impersonate that person; and (b) use an Account ID that MST Blockchain, in its sole discretion, deems offensive
          </p>
        <br/>
          <p className="text-black-500 font-bold">
           Your Content
          </p>
          <p className="text-black-500">
            You are solely responsible for all Content you provide, upload, submit, or post to, or generate through access to or use of the Services, including by connecting or communicating with other Users (“Your Content”). You agree that You have all right, title, interest, and consent in Your Content necessary to allow MST Blockchain to use Your Content for the purposes for which You provide Your Content to MST Blockchain. Your responsibility for Your Content extends to resolving any disputes that may arise between You and any User or other Entity because of Your Content. By providing, uploading, submitting, posting, or generating Your Content, you grant MST Blockchain and its authorized representatives and contractors a perpetual and non-exclusive right and license to use, process, store, transmit, and disclose Your Content to (a) provide the Services and fulfil other obligations described in this Agreement; and (b) further develop and provide services for MST Blockchain customers. You understand that in certain contexts Your Content may be visible to, sent to, and viewed by other Users, and you expressly waive any privacy rights you may otherwise have in Your Content in such contexts. You agree to allow us, if we elect in our sole discretion, to provide Your Content to other Users in connection with identity verification Services, as applicable.
          </p>
            <br/>
          <p className="text-black-500 font-bold">
           Acceptable Use
          </p>
          <p className="text-black-500">
            You will not (and will not permit any third party to) use or access the Services, directly or indirectly, to:
          </p> <br/>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>upload, store or transmit any Content that is infringing, libellous, unlawful, tortious, violates privacy rights, or that includes malicious code;</li>
            <li>engage in any activity that interferes with, disrupts, damages, or accesses in an unauthorized manner the Services, servers, networks, data, or other properties of MST Blockchain or its suppliers or licensors;</li>
            <li>develop, distribute, or make available the Services in any way in furtherance of criminal, fraudulent, or other unlawful activity;</li>
            <li>make the Services available to, or use any Services for the benefit of, anyone other than You or Your authorized representatives;</li>
            <li>sell, resell, license, sublicense, distribute, rent, or lease any Services;</li>
            <li>permit direct or indirect access to or use of any Services in a way that circumvents a contractual usage limit;</li>
            <li>obscure, remove, or destroy any copyright notices, proprietary markings, or confidential legends;</li>
            <li>build a competitive product or service;</li>
            <li>distribute any Services in a manner that would disclose any of MST Blockchain’s source code; or</li>
            <li>reverse engineer, decrypt, decompile, decode, disassemble, or otherwise attempt to obtain the human-readable form of any of the MST Blockchain Services that were not provided to You in source code, to the extent such restriction is permitted by applicable law.</li>
          </ul>

          <br/>
          <p className="text-black-500 font-bold">
          Your Conduct
          </p>
          <p className="text-black-500">
           You agree not to harass, advocate harassment, or engage in any conduct that is abusive or harmful to any Entity or individual. We reserve the right, but are not obligated, to investigate and/or prohibit any conduct, or remove or refuse to post any Content (including Your Content), that we deem in our sole discretion to be unlawful, harmful, in breach of this Agreement, or otherwise offensive to You, the Services, Users, our customers, our rights, or any Entity. We assume no liability for any action or inaction with respect to Your conduct, communication, transactions, or Content. Additionally, we may disclose any Content or electronic communication of any kind:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>to satisfy any law or request by a governmental authority;</li>
            <li>if such disclosure is necessary or appropriate to operate the Services;</li>
            <li>to protect our rights or property, our Users and customers, You, or any other Entity; or</li>
            <li>if, in our sole discretion, such Content or electronic communication should be referred to law enforcement or other government authorities.</li>
            </ul>
<br/>
            <p className="text-black-500 font-bold">
       Retention
          </p>
          <p className="text-black-500">
           Your Content and Account information will be retained according to MST Blockchain’s Privacy Policy located at Privacy Policy.
          </p>
        </div>


        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">5. Access</h2>
          <p className="text-black-500 font-bold">
            Access to MST Blockchain Services
          </p>
          <p className="text-black-500">
            Subject to Your compliance with this Agreement, MST Blockchain will permit You to access and use the Services solely for lawful business purposes in accordance with the terms of this Agreement and any other agreement You agree to before being given access to any specific areas of the Services. MST Blockchain provides the ability to purchase and manage blockchain nodes, and You may link Your third-party wallet(s) to the platform. It is Your responsibility to ensure that Your wallet is properly linked and that You have access to it. MST Blockchain is not responsible for the management or security of third-party wallets or providers. The terms of any separate agreement entered into with third-party wallet providers will govern the use of such services and will be in addition to the terms of this Agreement. In the event of any conflict between the terms of this Agreement and a separate agreement, the terms of the separate agreement will prevail with respect to third-party wallet services.
          </p>
<br/>
           <p className="text-black-500 font-bold">
           Access to Content
          </p>
          <p className="text-black-500">
            Unless otherwise noted on the Services, other than Your Content, all content available through the Services (“Services Content” or “Content”) is owned by MST Blockchain, the Users providing that Content, or MST Blockchain’s other content providers. All Services Content is for informational purposes only, and You are solely responsible for verifying the accuracy, completeness, and applicability of all Services Content as it may apply to Your use of such content. Subject to Your compliance with this Agreement, You may access the Services Content solely for Your internal business purposes in connection with Your use of the Services. You will not, and will not permit any third party to:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>alter, modify, reproduce, or create derivative works of any Services Content;</li>
            <li>distribute, sell, resell, lend, loan, lease, license, sublicense, or transfer any Services Content; or</li>
            <li>alter, obscure, or remove any copyright, trademark, or other notices that are provided on or in connection with any Services Content.
MST Blockchain has not verified the accuracy of, and will not be responsible for any errors or omissions in, any Services Content. Except as set forth in this Agreement, You are granted no licenses or rights in or to any Services Content, or any intellectual property rights therein or related thereto.</li>
            </ul>
<br/>
        <p className="text-black-500 font-bold">
            Access to Third-Party Sites and Services
          </p>
          <p className="text-black-500">
            SThe Services may contain links to third-party sites or platforms that are not under the control of MST Blockchain. Unless otherwise noted, any site or service accessed from the Services is independent from MST Blockchain, and MST Blockchain has no control over and is not responsible for its content, services, or availability. Links to third-party websites or services are provided for Your convenience only, and You may access them solely at Your own risk. You acknowledge and agree that MST Blockchain shall not be liable or responsible, directly or indirectly, for any damage or loss caused, or alleged to be caused, by or related to the use of or reliance on any content, goods, services, or functionality available through any third-party site or platform. Your access to and use of third-party sites or services is governed by the terms of use and privacy policies of such third parties.
          </p>
<br/>

           <p className="text-black-500 font-bold">
           Access to Third-Party Wallets and Services
          </p>
          <p className="text-black-500">
            The Services may allow You to link third-party wallets or access services provided by third-party service providers (“Third-Party Services”). These Third-Party Services are not under the control of MST Blockchain. You acknowledge and agree that MST Blockchain shall not be liable or responsible for any damages, losses, liabilities, failures, or issues arising from Your access to or use of any Third-Party Services. MST Blockchain is not responsible for the security, management, or performance of third-party wallets or providers. Your use of any Third-Party Services is governed solely by the applicable Third-Party Agreement. In the event of any conflict between this Agreement and a Third-Party Agreement, the Third-Party Agreement shall control with respect to the applicable Third-Party Services. This Agreement will continue to govern all other aspects.
          </p>
          <br/>

          <p className="text-black-500 font-bold">
           Blockchain Node Purchases
          </p>
          <p className="text-black-500">
            The Services allow You to purchase and manage blockchain nodes on the MST Blockchain platform. By purchasing a node, You are granted the right to use the node solely for business purposes as outlined in this Agreement. You are responsible for the management and security of Your node and any linked wallets or third-party services. MST Blockchain is not responsible for the setup, configuration, or maintenance of third-party wallets or external services and shall not be liable for any losses or issues arising from their use.
          </p>
          
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">6. Services</h2>
          <p className="text-black-500 font-bold">
           Transactions
          </p>
          <p className="text-black-500">
           You undertake all transactions through MST Blockchain Services solely at Your own risk. You will only communicate regarding a contemplated transaction via the platform’s designated communication channels. For each transaction, You bear sole responsibility for confirming:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>Your customer’s identity and wallet information,</li>
            <li>Your receipt of payment in full, and</li>
            <li>that payment was made according to the instructions provided through MST Blockchain Services. You represent, warrant, and covenant that You will not make, provide, receive, or attempt to make, provide, or receive payments from or to any person or entity that is (x) a third-party, or (y) currently subject to any Sanction Lists by the applicable authority.</li>
            <p className="text-black-500">
                Once a transaction has been initiated, it cannot be cancelled, reversed, disputed, or otherwise recovered or returned. After You approve a transaction, MST Blockchain has no control over it. The transaction can only be confirmed by the underlying blockchain network. You assume sole responsibility for such confirmation and acknowledge that MST Blockchain assumes no liability in this regard. You must notify MST Blockchain of any transaction discrepancies within 7 days from the date the original transaction was initiated.
            </p>
            </ul>
<br/>
            <p className="text-black-500 font-bold">
           Identity Verification
          </p>
          <p className="text-black-500">
           MST Blockchain is required to obtain, verify, and record information that identifies each Business and Individual Client that opens an account on the platform, as part of a Customer Identification Program (CIP), in accordance with applicable laws and regulations. Promptly following MST Blockchain’s request, You will provide MST Blockchain any and all information, including Your full name and any documents necessary for MST Blockchain to verify Your identity. You hereby represent, warrant, and covenant that such information is accurate, current, and complete. MST Blockchain reserves the right to freeze Your Account until Your identity has been verified and to terminate Your Account if You fail to comply with this verification process. You (and, if acting in a representative capacity, individually and for the Entity You represent) authorize MST Blockchain and its agents to make any necessary inquiries to verify Your identity and that of Your principals and other agents.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">7. Fees</h2>
          <p className="text-black-500">
            You will pay MST Blockchain all fees required for access and use of the Services (“Fees”) as set forth in the applicable fee schedule on the MST Blockchain platform or as agreed to in a separate agreement. The Fees may be subject to change without notice, and You are responsible for checking applicable Fees prior to engaging in any transaction. You hereby grant MST Blockchain the right to charge or deduct funds from the flow of funds enabled by the Services. All Fees will be non-refundable once paid to MST Blockchain, including upon any termination or suspension of this Agreement. Until paid in full, all past-due amounts will bear an additional charge of the lesser of 1.5% per month or the maximum amount permitted under applicable law. If MST Blockchain requires collection agencies, attorneys, or courts to collect Your account, You will be responsible for those expenses. You are also responsible for any and all taxes imposed on Your access to and use of the Services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">8. Payment and Refund Policies</h2>
          <p className="text-black-500">
            All payments made for Services, including node purchases or subscriptions, are final and non-refundable, except as required by applicable law or explicitly stated otherwise..
          </p>
          <p className="text-black-500">In the event of disputes over payments, users must notify MST Blockchain within 30 days. Refunds will be processed at the sole discretion of MST Blockchain in accordance with the applicable Refund Policy.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">9. Privacy and Data Protection</h2>
          <p className="text-black-500">
           MST Blockchain values your privacy. By using our Services, you acknowledge and agree to the practices described in our Privacy Policy.
          </p>
        </div>

          <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">10. Intellectual Property Rights</h2>
          <p className="text-black-500">
           All intellectual property rights, including trademarks, logos, designs, and source code related to MST Blockchain and its Services, are owned exclusively by MST Blockchain or its licensors.
          </p>
          <p className="text-black-500">
           Users retain ownership of any content they upload to the platform; however, by submitting such content, you grant MST Blockchain a non-exclusive, royalty-free license to use, reproduce, distribute, and modify the content solely for operating and enhancing the Services.
          </p>
          <p className="text-black-500">
           You may not copy, reproduce, distribute, or create derivative works based on MST Blockchain’s intellectual property without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">11. Termination</h2>
          <p className="text-black-500">
           This Agreement may be terminated by either party at any time, in that party’s sole discretion, upon notice to the other party as permitted under this Agreement. Upon termination of this Agreement for any reason:
          </p>

          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>all rights granted to You under this Agreement will terminate;</li>
            <li>You will immediately cease all use of and access to the Services, including Your Content and any Services Content obtained prior to termination;</li>
            <li>MST Blockchain may, in its sole discretion, delete Your Account or Your Content at any time. Your Content may continue to exist and be visible to Users after termination of this Agreement unless You actively delete it or contact MST Blockchain support to request deletion.</li>
        </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">12. Suspension</h2>
          <p className="text-black-500">
            Without limiting MST Blockchain’s right to terminate this Agreement, MST Blockchain may suspend Your access to Your Account and the Services (including Your Content), with or without notice to You, upon any actual, threatened, or suspected breach of this Agreement or applicable law, or upon any conduct deemed by MST Blockchain to be inappropriate or detrimental to MST Blockchain, the Services, or any other MST Blockchain customer or User.
          </p>
          
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">13. Services Technology</h2>
          <p className="text-black-500">
            The Services, including databases, software, hardware, and other technology used by or on behalf of MST Blockchain (collectively, the “Technology”), constitute valuable trade secrets of MST Blockchain. You will not, and will not permit any third party to:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>access or attempt to access the Technology except as expressly permitted under this Agreement;</li>
            <li>use the Technology in any unlawful manner or in a way that may damage or impair it;</li>
            <li>use automated scripts to collect information from the Technology;</li>
            <li>alter, modify, reproduce, or create derivative works of the Technology;</li>
            <li>sell, lease, sublicense, or transfer rights to the Technology;</li>
            <li>reverse engineer, decompile, or disassemble the Technology;</li>
            <li>circumvent any security or access controls;</li>
            <li>monitor or test the Technology;</li>
            <li>interfere with the operation or hosting of the Technology. You acknowledge that no internet security is perfect and Your Content may be exposed in case of a breach.</li>
        </ul>       
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">14. Disclaimer of Warranties and Limitation of Liability</h2>
          <p className="text-black-500 font-bold">
           Disclaimer of Warranties:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>The Services are provided “as is” and “as available,” without any representations or warranties of any kind, express or implied. MST Blockchain disclaims all warranties, including but not limited to:</li>
            <li>Merchantability,</li>
            <li>Fitness for a particular purpose ,</li>
            <li>Non-infringement ,</li>
            <li>Accuracy or reliability of the platform or its content.</li>
            </ul>
<br/>
            <p className="text-black-500 font-bold">
           Limitation of Liability:
          </p>
          <p className="text-black-500">
            To the maximum extent permitted by law, MST Blockchain and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, even if MST Blockchain has been advised of the possibility of such damages.
          </p>
          
        </div>


         <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">15. Feedback</h2>
          <p className="text-black-500">
            Any feedback or ideas you provide regarding MST Blockchain’s services will become the exclusive property of MST Blockchain. You agree to assign any rights you have in such feedback to MST Blockchain and to take any further actions required to perfect MST Blockchain’s rights in such feedback.
          </p>
          
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">16. Availability</h2>
          <p className="text-black-500">
            MST Blockchain will use commercially reasonable efforts to ensure the availability of the services; however, there is no guarantee that the services will always be accessible or uninterrupted. Planned maintenance notifications will be provided where possible, and you accept the risks associated with potential unavailability of services.
          </p>
          
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">17. Representations and Warranties</h2>
          <p className="text-black-500 font-bold">
            General
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>You have the legal right and authority to enter into this Agreement;</li>
            <li>This Agreement is legally binding and enforceable on your behalf;</li>
            <li>You have the legal authority to perform the obligations under this Agreement.</li>
            </ul>

<br/>
            <p className="text-black-500 font-bold">
           Compliance with Laws
          </p>
          <p className="text-black-500">
            You are solely responsible for ensuring that your use of MST Blockchain services complies with all applicable laws and regulations. MST Blockchain is not responsible for helping you comply with any specific law or regulation. You represent that your use of the services, including any content you upload or generate through the services, will comply with all laws, including those governing cross-border data transmissions and financial transactions.</p>
          
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">18. Prohibited Activities</h2>
          <p className="text-black-500">
            Users are strictly prohibited from engaging in the following activities on the platform:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>Money laundering, fraud, or any illegal financial activity.</li>
            <li>Uploading malicious software or hacking attempts.</li>
            <li>Exploiting vulnerabilities in the Services for unauthorized access or gain.</li>
            <li>Spamming, phishing, or any form of social engineering.</li>
            </ul>
            <p className="text-black-500">Violations of these restrictions may result in immediate suspension or termination of your Account and potential legal action.</p>
        </div>


        
        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">19. Indemnification</h2>
          <p className="text-black-500">
            You agree to indemnify, defend, and hold harmless MST Blockchain, its affiliates, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of:
          </p>
          <ul className="list-disc pl-6 text-black-500 space-y-2 font-normal">
            <li>Your use of the Services,</li>
            <li>Your violation of this Agreement,</li>
            <li>Your infringement of any third-party rights, including intellectual property rights, or</li>
            <li>Any fraudulent or illegal activities conducted by you through the Services.</li>
            </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">20. Governing Law and Dispute Resolution</h2>
          <p className="text-black-500">
            This Agreement shall be governed by and construed in accordance with the laws of Bengaluru. Any disputes arising out of or related to this Agreement shall be subject to the exclusive jurisdiction of the courts located in Bengaluru.
          </p>
        </div>

         <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">21. Force Majeure</h2>
          <p className="text-black-500">
            MST Blockchain shall not be held liable for any delays or failures in performance caused by events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, strikes, government actions, or technical failures.
          </p>
          <p className="text-black-500">
            If such events occur, MST Blockchain will make reasonable efforts to resume Services as soon as possible.
          </p>
        </div>

         <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">22. Severability</h2>
          <p className="text-black-500">
            If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
          </p>
        </div>

         <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">23. Assignment</h2>
          <p className="text-black-500">
            You may not transfer or assign your rights or obligations under this Agreement without MST Blockchain’s prior written consent. MST Blockchain reserves the right to assign its rights and obligations to a third party in connection with a merger, acquisition, or sale of assets.
          </p>
        </div>

         <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">24. Amendments</h2>
          <p className="text-black-500">
            MST Blockchain reserves the right to modify these Terms and Conditions at any time. Users will be notified of significant changes through email or an in-app notification. Continued use of the Services after the effective date of the amended terms constitutes your acceptance of the changes.
          </p>
        </div>






        

      </section>
    </div>
  );
};

export default TermsPage;
'use client';

import { Navbar } from '@/components/navbar';
import { ArrowLeftFromLine } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 max-w-4xl mt-10">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-8">
          <strong>Last updated:</strong> May 31, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Pixelate Solutions (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage our custom development services. By using our site or contracting us for development work, you agree to the terms outlined in this policy.
          </p>
          <p>
            Pixelate Solutions performs a variety of custom development services, including but not limited to web development, AI integration, and software consulting. We may deliver a final product, fulfill partial work, or provide contracted hours to assist with your development needs. We respect your privacy and do not collect, share, or sell any data without your explicit authorization.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We only collect information that you voluntarily provide when you:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Request a quote or proposal through our contact form;</li>
            <li>Sign up for a newsletter or mailing list (if you opt in);</li>
            <li>Contact us via email or phone;</li>
            <li>Engage our services and provide data necessary to fulfill that engagement.</li>
          </ul>
          <p>
            <strong>Types of information we may collect:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Personal Identifiers:</strong> Name, email address, phone number, company name, and billing information (if necessary for invoicing).</li>
            <li><strong>Project Data:</strong> Specifications, documents, code repositories, or any proprietary content you provide so that we can fulfill development work.</li>
            <li><strong>Usage Data:</strong> Non‐personally identifiable information about how you use our website (for example, pages visited, time spent on pages). We do not collect usage data unless you consent (e.g., via analytics opt-in).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect in the following ways:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>To Provide Services:</strong> We use your project data and personal identifiers to design, develop, test, deploy, and maintain custom solutions or applications based on your requirements.</li>
            <li><strong>Communication:</strong> We use your contact information (email, phone) to respond to inquiries, send proposals, invoices, or updates related to your project.</li>
            <li><strong>Billing & Invoicing:</strong> If you engage us for paid services, we may process billing information (e.g., credit card details) to complete transactions. All payment transactions are handled via secure, PCI-compliant third-party providers.</li>
            <li><strong>Improving Our Services:</strong> We may analyze aggregated, anonymized usage data (only with your consent) to improve our website’s user experience and optimize our internal processes.</li>
          </ul>
          <p>
            We do <em>not</em> sell, rent, or trade your personal information with any third parties unless you explicitly authorize us to do so.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
          <p className="mb-4">
            We will never share your personal or project data with any third parties except in the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>With Your Consent:</strong> If you expressly authorize us to share data with subcontractors, partners, or other service providers (for instance, when we engage a specialized designer or a third-party API provider).</li>
            <li><strong>Legal Compliance:</strong> If required by law, regulation, or a subpoena, we may disclose your information. We will notify you unless legally prohibited.</li>
            <li><strong>Protecting Rights:</strong> To protect our rights, privacy, safety, or property, or that of you or others.</li>
          </ul>
          <p>
            In all other cases, your data remains strictly confidential and used solely for fulfilling our contractual obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies & Tracking Technologies</h2>
          <p className="mb-4">
            Our website may use cookies and similar tracking technologies to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Enable basic website functionality (e.g., remembering if you are logged in, language preferences).</li>
            <li>Analyze site traffic and performance (if you opt in to analytics).</li>
          </ul>
          <p>
            You can choose to deny cookies in your browser settings. Denying cookies may limit some features of the site, such as signing in or saving form data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
          <p className="mb-4">
            We may use third-party service providers to facilitate our operations, such as:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Hosting & Infrastructure:</strong> Cloud hosting providers (e.g., AWS, Azure, Google Cloud) to store and serve content or run applications.</li>
            <li><strong>Payment Processors:</strong> Secure, PCI-compliant gateway services (e.g., Stripe, PayPal) to handle online payments. We never see or store your full payment credentials.</li>
            <li><strong>Analytics & Monitoring:</strong> Optional analytics tools (e.g., Google Analytics) if you consent. Any collected usage data is anonymized and aggregated.</li>
          </ul>
          <p>
            These third parties have access to your information only to perform services on our behalf and are contractually obligated not to disclose or use it for other purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
          <p className="mb-4">
            We take reasonable steps to protect your information from unauthorized access, alteration, disclosure, or destruction. Measures include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Secure hosting environments with firewalls and regular software updates.</li>
            <li>Encrypted data transmission using HTTPS/TLS for all web traffic.</li>
            <li>Access controls and role-based permissions for our team members.</li>
            <li>Regular backups and secure storage of project artifacts.</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we continuously evaluate and improve our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
          <p>
            Our services and website are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child under 13, please contact us at the address below so we can delete it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Email:</strong> admin@pixelate.solutions</li>
            <li><strong>Address:</strong><br />
                <p className='pl-10'>
                Pixelate Solutions<br />
                8319 Pamela Street<br />
                Shelby Township, MI 48316 USA
                </p>
            </li>
            <li><strong>Phone:</strong>+1 (616) 320-1776</li>
          </ul>
        </section>
        <div className='w-full border-t my-10'/>
        <Link href="/" passHref className='shadow-md border rounded-lg px-4 pt-4 pb-2'>
          <div className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8">
            <ArrowLeftFromLine className="w-5 h-5 mr-2" />
            <span className="">Return Home</span>
          </div>
        </Link>
      </main>
    </>
  );
};

// pages/TermsOfService.tsx
'use client';

import { Navbar } from '@/components/navbar';
import { ArrowLeftFromLine } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 max-w-4xl mt-10">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-8">
          <strong>Last updated:</strong> May 31, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            These Terms of Service (“<em>Terms</em>”) govern your access to and use of the
            website and services provided by Pixelate Solutions (“<em>we</em>,” “<em>us</em>,”
            or “<em>our</em>”). By visiting our website or engaging our custom development
            services, you agree to be bound by these Terms. If you do not agree with any part
            of these Terms, you must not access or use our services.
          </p>
          <p>
            Pixelate Solutions provides custom software development, web development, AI
            integration, and consulting services. We deliver final products, perform partial
            work, or provide contracted hours on development projects as requested by our
            clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services and Engagement</h2>
          <p className="mb-4">
            We offer a range of services including, but not limited to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Custom Web Development and Design</li>
            <li>AI Strategy, Integration, and Custom Solutions</li>
            <li>Partial Development Work or Hourly Contracting</li>
            <li>Ongoing Maintenance, Support, and Consulting</li>
          </ul>
          <p>
            Prior to beginning any work, we will provide a written proposal or statement of
            work (“<em>SOW</em>”) outlining project scope, deliverables, timeline, and fees.
            Once you accept the SOW, we will commence services in accordance with that
            agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Client Obligations</h2>
          <p className="mb-4">
            To facilitate our work, you agree to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide accurate and complete information, specifications, and materials in a timely manner;</li>
            <li>Grant necessary access to systems, repositories, or platforms as required for development;</li>
            <li>Review and approve deliverables or provide feedback promptly to avoid delays;</li>
            <li>Maintain responsibility for any third-party licensing, hosting, or subscription costs unless otherwise specified in the SOW;</li>
            <li>Ensure your personnel comply with any security or access protocols we establish.</li>
          </ul>
          <p>
            Failure to meet client obligations may result in project delays, additional fees, or suspension of services until the issue is resolved.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
          <p className="mb-4">
            Unless otherwise stated in the SOW, all fees are due within thirty (30) days of
            the invoice date. We may require an initial deposit (typically 50%) before
            commencing work. Remaining balances are due upon delivery of milestones or
            final deliverables, as outlined in the SOW.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Invoices not paid within thirty (30) days are subject to a late fee of 1.5% per month;</li>
            <li>Payments shall be made via credit card, bank transfer, or another method
              explicitly approved by Pixelate Solutions;</li>
            <li>All fees are exclusive of applicable taxes; you are responsible for any
              sales, VAT, or other taxes imposed by governmental authorities.</li>
          </ul>
          <p>
            If you fail to make any payment when due, we may suspend work or terminate the agreement
            after providing fifteen (15) days’ written notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            <strong>5.1 Ownership of Deliverables:</strong>  
            Upon final payment, all deliverables (code, designs, documentation) created
            specifically for your project (“<em>Work Product</em>”) will be deemed
            <em>work made for hire</em> and you will own all rights, title, and interest,
            subject to our rights in any pre-existing materials.
          </p>
          <p className="mb-4">
            <strong>5.2 Pre-existing Materials:</strong>  
            We retain ownership of any intellectual property, tools, libraries, frameworks,
            or templates that existed prior to or were developed outside the scope of your
            project (“<em>Pre-existing Materials</em>”). We grant you a perpetual,
            non-exclusive, worldwide, royalty-free license to use Pre-existing Materials as
            incorporated into the Work Product.
          </p>
          <p>
            <strong>5.3 Third-Party Components:</strong>  
            If the Work Product includes third-party software or components, you must comply
            with any separate license terms associated with those components. We will notify
            you in advance if any third-party licenses apply.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
          <p className="mb-4">
            Each party acknowledges that it may receive or have access to confidential
            information of the other party. “<em>Confidential Information</em>” includes
            non-public business information, trade secrets, technical data, and project
            details. Both parties agree to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Maintain confidentiality and not disclose Confidential Information to any
              third party without prior written consent;</li>
            <li>Use Confidential Information solely for the purpose of fulfilling obligations
              under these Terms;</li>
            <li>Take reasonable measures to protect Confidential Information from unauthorized access.</li>
          </ul>
          <p>
            Confidential Information does not include information that is publicly known,
            independently developed, or rightfully obtained from a third party without
            restriction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Warranties & Disclaimers</h2>
          <p className="mb-4">
            <strong>7.1 Our Warranties:</strong>  
            We warrant that the services will be performed in a professional and
            workmanlike manner consistent with industry standards. For ninety (90) days
            after delivery, we will address any material defects in the Work Product at no
            additional cost, provided such defects are not caused by misuse or unauthorized
            modifications.
          </p>
          <p className="mb-4">
            <strong>7.2 Disclaimers:</strong>  
            Except as expressly set forth in these Terms, we disclaim all other warranties,
            express or implied, including but not limited to merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
          <p>
            You acknowledge that technology products may have unknown vulnerabilities, and
            we do not guarantee uninterrupted or error-free performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, in no event shall Pixelate Solutions
            and its officers, directors, employees, or agents be liable for:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Any indirect, incidental, special, consequential, or punitive damages;</li>
            <li>Any loss of profits, revenue, data, or business opportunities;</li>
            <li>Any claim arising from third-party actions or services not under our control.</li>
          </ul>
          <p>
            Our total aggregate liability for any claim arising out of or related to these
            Terms or the services shall not exceed the total fees paid by you to Pixelate
            Solutions under the applicable SOW in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Pixelate Solutions and its
            affiliates, officers, directors, employees, and agents from and against any and
            all claims, liabilities, damages, losses, or expenses (including reasonable
            attorney’s fees) arising out of or relating to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Your breach of these Terms;</li>
            <li>Your violation of any applicable laws or regulations;</li>
            <li>Your infringement of any third-party intellectual property or privacy rights.</li>
          </ul>
          <p>
            We will promptly notify you in writing of any claim for which indemnification is
            sought and give you an opportunity to control the defense and settlement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p className="mb-4">
            Either party may terminate the SOW upon written notice if the other party
            materially breaches these Terms and fails to cure such breach within thirty (30)
            days of receiving written notice.
          </p>
          <p className="mb-4">
            Upon termination:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>You will pay for all work completed up to the termination date;</li>
            <li>We will deliver any partially completed Work Product, subject to payment;</li>
            <li>Licenses granted for any Pre-existing Materials will survive termination as
              set forth in Section 5.2;</li>
            <li>Sections regarding Confidentiality, Intellectual Property, Limitation of Liability,
              Indemnification, and Governing Law will survive termination.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the
            State of Michigan, without regard to its conflict of laws principles. Any dispute
            arising under or related to these Terms shall be resolved in the state or federal
            courts located in Ingham County, Michigan, and both parties consent to the exclusive
            jurisdiction of such courts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Changes to These Terms</h2>
          <p>
            We may modify these Terms from time to time. When we do, we will post the updated
            version on this page and update the “Last updated” date. Your continued use of our
            services after any changes indicates your acceptance of the new Terms. If you do not
            agree to the changes, you must stop using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about these Terms, please contact us:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Email:</strong> admin@pixelate.solutions</li>
            <li><strong>Address:</strong><br />
              <p className="pl-10">
                Pixelate Solutions<br />
                8319 Pamela Street<br />
                Shelby Township, MI 48316 USA
              </p>
            </li>
            <li><strong>Phone:</strong> +1 (616) 320-1776</li>
          </ul>
        </section>

        <div className="w-full border-t my-10" />

        <Link href="/" passHref className='shadow-md border rounded-lg px-4 pt-4 pb-2'>
          <div className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <ArrowLeftFromLine className="w-5 h-5 mr-2" />
            <span>Return Home</span>
          </div>
        </Link>
      </main>
    </>
  );
};

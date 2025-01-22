import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Terms and Conditions
      </h1>
      <div className="space-y-8">
        <section>
          <p className="text-gray-700 leading-relaxed">
            Welcome to BRT Logistics website. By using our website, you agree to
            comply with and be bound by the following terms and conditions.
            Please review these terms carefully. If you do not agree with these
            terms, you should not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use of the Website</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website, you agree to use it only for
            lawful purposes and in a manner consistent with these terms and
            applicable laws. You must not:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              Engage in any activity that disrupts or interferes with the
              websites functionality.
            </li>
            <li className="mb-2">
              Attempt to gain unauthorized access to any part of the website or
              related systems.
            </li>
            <li className="mb-2">
              Use the website to transmit any harmful, offensive, or illegal
              content.
            </li>
          </ul>
        </section>

        {/* <section>
          <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
          <p className="text-gray-700 leading-relaxed">
            If you create an account on our website, you are responsible for
            maintaining the confidentiality of your login credentials and for
            all activities that occur under your account. You agree to notify us
            immediately of any unauthorized use of your account.
          </p>
        </section> */}

        <section>
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this website, including text, graphics, logos, and
            images, is the property of BRT Logistics or its content suppliers
            and is protected by intellectual property laws. You may not
            reproduce, distribute, or modify any content without our prior
            written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To the fullest extent permitted by law, BRT Logistics shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the website or services. This includes, but
            is not limited to, loss of data, profits, or business opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">SMS Program Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By opting into our SMS program, you consent to receive text messages
            related to our services. Message frequency may vary, and message and
            data rates may apply. You can opt out at any time by Chossing "NO"
            chekcbox shown. For assistance, reply “HELP” or contact us directly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these terms at any time. Any changes
            will be effective immediately upon posting on our website. Your
            continued use of the website after changes have been made
            constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these terms, please contact us at:
          </p>
          <p className="text-gray-700">
            Email:
            <a
              href="mailto:sam.hr@brtlog.com"
              className="text-teal-600 underline">
              sam.hr@brtlog.com
            </a>
          </p>
          <p className="text-gray-700">Phone: +1 (347) 263-8089</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;

import Link from "next/link";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Terms and Conditions
      </h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            SMS Terms & Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Terms of Service related to SMS communication must either be
            included in the privacy policy or be a stand-alone document. If the
            customer has a Terms and Conditions page, this information should be
            included here, not in the privacy policy. The document must include
            the following:
          </p>
          <h3 className="text-xl font-semibold mt-4">
            1. SMS Consent Communication:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The information (Phone Numbers) obtained as part of the SMS consent
            process will not be shared with third parties for marketing
            purposes.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            2. Types of SMS Communications:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If you have consented to receive text messages from BRT Logistics,
            you may receive messages related to the following:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Appointment reminders</li>
            <li>Follow-up messages</li>
            <li>Billing inquiries</li>
            <li>Promotions or offers (if applicable)</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">3. Message Frequency:</h3>
          <p className="text-gray-700 leading-relaxed">
            Message frequency may vary depending on the type of communication.
            Example: You may receive up to 2 SMS messages per week regarding
            your appointments or account status.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            4. Potential Fees for SMS Messaging:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Standard message and data rates may apply depending on your carriers
            pricing plan. These fees may vary if the message is sent
            domestically or internationally.
          </p>
          <h3 className="text-xl font-semibold mt-4">5. Opt-In Method:</h3>
          <p className="text-gray-700 leading-relaxed">
            You may opt-in to receive SMS messages from BRT Logistics in the
            following ways:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Verbally, during a conversation</li>
            <li>By submitting an online form</li>
            <li>By filling out a paper form</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">6. Opt-Out Method:</h3>
          <p className="text-gray-700 leading-relaxed">
            You can opt out of receiving SMS messages at any time by replying
            STOP to any SMS message you receive or by contacting us directly.
          </p>
          <h3 className="text-xl font-semibold mt-4">7. Help:</h3>
          <p className="text-gray-700 leading-relaxed">
            If you are experiencing any issues, you can reply with the keyword
            HELP or visit our{" "}
            <Link href="/contact" className="text-teal-600 underline">
              support page
            </Link>
            .
          </p>
          <p className="mx-3 my-2 font-bold">Additional Options:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              If you do not wish to receive SMS messages, you can choose not to
              check the SMS consent box on our forms.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">
            8. Standard Messaging Disclosures:
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Message and data rates may apply.</li>
            <li>You can opt-out at any time by texting STOP.</li>
            <li>
              For assistance, text HELP or visit our Privacy Policy and Terms
              and Conditions pages.
            </li>
            <li>Message frequency may vary.</li>
          </ul>
        </section>
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
              {" "}
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

// pages/privacy-policy.tsx
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className=" px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="container mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Phone Numbers and SMS Consent
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <strong>Privacy Policy statement:</strong> SMS opt-in or phone
              numbers for the purpose of SMS are not being shared with any third
              party and affiliate company for marketing purposes
            </li>
            <li className="mb-2">
              <strong>Purpose of Collection:</strong> Phone numbers are
              collected to send SMS notifications and updates regarding our
              services.
            </li>
            <li className="mb-2">
              <strong>No Third-Party Sharing:</strong> We do not share your
              phone number with third parties unless required by law or to
              fulfill the service request.
            </li>
            <li>
              <strong>Security Measures:</strong> We use secure methods to store
              and protect your phone number.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            The Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            BRT Logistics collects personal information that you voluntarily
            submit to us when you complete an application, online form, or
            survey. The personal information we request may include your name,
            contact information (including mailing address, email address, and
            phone number), as well as details about your past employment,
            driving record, criminal history, and other information relevant to
            recruiters and potential employers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            This service uses cookies that are small data files that assign you
            a unique identifier. Cookies allow your mobile device to “talk” with
            the service and permit us to administer our service more
            efficiently, providing a more tailored user experience. You can set
            your browser to notify you when receiving a cookie or to block
            cookies, but doing so may limit some functionality. We also use
            small pieces of code called “web beacons” to collect anonymous
            advertising metrics such as counting page views and promotion views.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Use of Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By submitting your application, you grant us consent to disclose
            your information to recruiters and potential employers. We are not
            responsible for the accuracy or completeness of the information you
            provide but simply provide the information you submit at the request
            of employers. We may also use your information to communicate with
            you through direct email, text messages, or newsletters.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you submit a testimonial or review to us, you agree that we may
            publish it with your name or company logo. You may terminate this
            permission by providing us with 30 days’ written notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Controlling Your Personal Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You may opt out of receiving SMS or text messages by replying “STOP”
            to any message you receive from us. Additionally, you can update or
            correct your personal information by contacting us directly at our
            support email or phone number.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We use encryption and secure transmission to protect your personal
            information. However, no method of transmission over the internet is
            100% secure. We encourage you to keep your personal information safe
            and secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not intended for children under the age of 18. If
            we inadvertently collect information from a child under 18, we will
            promptly delete it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">International Users</h2>
          <p className="text-gray-700 leading-relaxed">
            Our site and services are hosted in the United States. If you are
            accessing our site from outside the U.S., your information will be
            subject to U.S. laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy periodically. If changes are made,
            the “Last Updated” date will be modified. Please review this page
            periodically to ensure you are informed of any changes.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

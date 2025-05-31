import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 px-6 py-12">
      <h1 className="md:text-4xl text-3xl font-bold mb-8 text-center">
        Cookie Policy
      </h1>
      <div className="container mx-auto space-y-8">
        <section>
          <p className="text-gray-700 leading-relaxed">
            BRT Logistics uses cookies to enhance your experience on our website
            and provide better services. This Cookie Policy explains what
            cookies are, how we use them, and your choices regarding their use.
            By using our website, you consent to the use of cookies as described
            in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files that are placed on your device
            (computer, smartphone, or tablet) by a website when you visit it.
            They help the website recognize your device and store information
            about your preferences or past actions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p className="text-gray-700 leading-relaxed">We use cookies to:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              Improve website functionality and user experience.
            </li>
            <li className="mb-2">
              Remember your preferences, such as language and region.
            </li>
            <li className="mb-2">
              Track website performance and analytics to understand how users
              interact with our site.
            </li>
            <li className="mb-2">
              Provide targeted advertisements and measure the effectiveness of
              our marketing campaigns.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <strong>Essential Cookies:</strong> These cookies are necessary
              for the website to function properly. They cannot be disabled.
            </li>
            <li className="mb-2">
              <strong>Performance Cookies:</strong> These cookies collect
              information about how users interact with the website, helping us
              improve its functionality.
            </li>
            <li className="mb-2">
              <strong>Functional Cookies:</strong> These cookies remember your
              preferences to enhance your experience on our website.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> These cookies are used to
              deliver targeted advertisements and track their performance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Some cookies are placed by third parties, such as analytics or
            advertising providers. These third-party cookies help us understand
            website performance and deliver relevant advertisements. We do not
            control these cookies, and their use is governed by the third
            parties privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            You can manage or disable cookies through your browser settings.
            However, please note that disabling cookies may affect the
            functionality of our website. For more information on managing
            cookies, refer to your browsers help section.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Updates to This Cookie Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Please review this page periodically to stay
            informed about how we use cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Cookie Policy, please contact
            us at:
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

export default CookiePolicy;

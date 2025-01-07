import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const TermAndConditionPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>Term And Condition</title>
        <meta
          name="about"
          content="Đây là trang Term And Condition của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="flex flex-col items-center bg-gray-50 min-h-screen py-8 px-4">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            Term And Condition
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              Blackscreen.info
            </Link>{" "}
            . These Terms and Conditions govern your access and use of our
            services. By using the website, you agree to the terms outlined
            below. Please read them carefully.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              By accessing or using our website, you confirm that you agree to
              abide by these Terms and Conditions. If you do not agree, please
              discontinue use of the site immediately.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">2. Use of Services</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              You must use the website only for lawful purposes and in
              compliance with applicable laws and regulations. Prohibited
              activities include, but are not limited to, unauthorized access,
              distribution of harmful software, and misuse of the website or its
              content.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              You may be required to create an account to access certain
              features. You are responsible for safeguarding your account
              credentials and for all activities carried out under your account.
              We reserve the right to suspend or terminate accounts that violate
              these Terms.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            4. Intellectual Property
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              All content, including text, images, graphics, logos, and designs,
              is the intellectual property of{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                Blackscreen.info
              </Link>{" "}
              and protected by copyright laws. You are prohibited from
              reproducing, distributing, or using our content without prior
              written consent.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">5. Privacy</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              Your use of the website is subject to our Privacy Policy, which
              explains how we collect, use, and protect your personal
              information.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              We are not liable for any damages, losses, or disruptions caused
              by the use or inability to use the website. This includes
              technical issues, unauthorized access, or any other circumstance
              beyond our control.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">7. Third-Party Links</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              Our website may contain links to external websites. We are not
              responsible for the content, policies, or practices of third-party
              sites and encourage you to review their terms before engaging.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            8. Modifications to Terms
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              We reserve the right to update these Terms and Conditions at any
              time. Continued use of the website after changes implies
              acceptance of the updated terms.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              These Terms and Conditions are governed by the laws, and any
              disputes shall be resolved in accordance with these laws.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            10. Contact Information
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              For questions or concerns about these Terms and Conditions, please
              contact us at: Email: screenspaceinco@gmal.com Phone: 0938 137 131
            </p>
          </div>
          <h2 className="text-xl mb-4">
            Thank you for visiting{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              Blackscreen.info
            </Link>{" "}
            !
          </h2>
        </div>
      </div>
    </>
  );
};

export default TermAndConditionPage;

import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="about"
          content="Đây là trang Privacy Policy của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="flex flex-col items-center bg-gray-50 min-h-screen py-8 px-4">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            <Link to={"https://blackscreen.info/"} className="font-bold">
              Blackscreen.info
            </Link>{" "}
            is committed to protecting your privacy and personal information.
            This privacy policy explains how we collect, use, and safeguard your
            data when you access or use our services.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">Information Collected</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              We may collect personal information such as your name, email,
              phone number, and other details when you register, contact us, or
              use our services. Additionally, non-personal data such as IP
              address, browser type, and browsing behavior may also be collected
              to enhance user experience.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-4">
            Purpose of Information Use
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              To provide and improve the quality of our services. To send
              notifications, newsletters, or relevant updates. To ensure the
              security and protection of user information.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-4">Information Security</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, loss,
              or unwanted disclosure.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              We do not share your personal information with third parties
              unless required by law or with your explicit consent.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-4">User Rights</h2>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mt-2">
              You have the right to access, modify, or request the deletion of
              your personal information at any time by contacting us via our
              support email.
            </p>
          </div>
          <h2 className="text-xl mb-4">
            If you have any questions about this privacy policy, please contact
            us at{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              Blackscreen.info
            </Link>.{" "}
            <br></br>
            Note: This privacy policy of{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              Blackscreen.info
            </Link>{" "}
            may be updated from time to time, please check regularly for the
            latest version.
          </h2>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

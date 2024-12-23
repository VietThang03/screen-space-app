import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const location = useLocation();
  const canonicalUrl = `http://localhost:5173${location.pathname}`;
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            eros nec lectus scelerisque tempus nec non odio. Mauris eu risus vel
            lacus tincidunt ultricies.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            The Versatility of the Black Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Darken Without Powering Down
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt, magna ac interdum lacinia, odio justo pharetra elit,
              vitae pulvinar risus lorem eu nisi.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 Power Saving and Environmental Impact
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Vestibulum sit amet metus eget risus malesuada dapibus a eget
              odio. Integer fermentum, neque vitae venenatis cursus, eros justo
              pretium ex, eget luctus ligula lorem sit amet ex.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            Utilizing the Black Screen for Different Purposes
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Conceal Your PC's Activity
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Cras pellentesque, lectus at interdum efficitur, libero purus
              fringilla nulla, eget egestas magna lorem vitae ligula. Nullam id
              fringilla lorem.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">2.2 Enhance Focus</h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Suspendisse a leo at magna tincidunt molestie. Donec euismod leo
              vitae tellus tempus, a luctus ligula vehicula.
            </p>
          </div>
          {/* Section 3 */}
          <h2 className="text-xl font-semibold mb-4">
            Utilizing the Black Screen for Different Purposes
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Conceal Your PC's Activity
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Cras pellentesque, lectus at interdum efficitur, libero purus
              fringilla nulla, eget egestas magna lorem vitae ligula. Nullam id
              fringilla lorem.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">2.2 Enhance Focus</h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Suspendisse a leo at magna tincidunt molestie. Donec euismod leo
              vitae tellus tempus, a luctus ligula vehicula.
            </p>
          </div>
          {/* Section 4 */}
          <h2 className="text-xl font-semibold mb-4">
            Utilizing the Black Screen for Different Purposes
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Conceal Your PC's Activity
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Cras pellentesque, lectus at interdum efficitur, libero purus
              fringilla nulla, eget egestas magna lorem vitae ligula. Nullam id
              fringilla lorem.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">2.2 Enhance Focus</h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Suspendisse a leo at magna tincidunt molestie. Donec euismod leo
              vitae tellus tempus, a luctus ligula vehicula.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

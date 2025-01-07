import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta
          name="about"
          content="Đây là trang About của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="bg-gray-50 p-6 md:p-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            About us
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            — your go-to destination for screen testing and troubleshooting. Our
            platform provides an easy and effective way to check screen errors,
            color accuracy, and much more. Whether you're facing issues with
            black, white, blue, green, red, yellow, orange, pink, or purple
            screens, we offer downloadable black screen images and tools to help
            you diagnose and resolve these problems swiftly.
          </p>
          <p className="text-gray-600 mb-6">
            At{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , we understand the frustration that comes with screen malfunctions.
            Our mission is to make screen diagnostics simpler and more
            accessible to everyone, offering a reliable and user-friendly
            experience. With our comprehensive resources and expertise, we are
            here to assist you in maintaining the highest screen quality for
            your devices.
          </p>
          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <Link
                to={"https://blackscreen.info/"}
                className="text-blue-500 underline"
              >
                Screen Space App
              </Link>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 0938 137 131
            </p>
            <p>
              <span className="font-semibold">Company:</span> ScreenSpace
              Innovations Technology Co., Ltd
            </p>
            <p>
              <span className="font-semibold">Gmail:</span>{" "}
              <a
                href="mailto:screenspaceinco@gmal.com"
                className="text-blue-500 underline"
              >
                screenspaceinco@gmal.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Address:</span> HaNoi, VietNam
            </p>
            <p>
              Discover how we can help improve your screen experience today!
            </p>
            <p>
              <span className="font-semibold">Tags:</span> #ScreenSpaceApp,
              #Background, #Blackscreen, #Redscreen, #Greenscreen, #Bluescreen
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

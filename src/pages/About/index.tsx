import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const canonicalUrl = `http://localhost:5173${location.pathname}`;
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
            Black Screen is a term used to describe a screen without any
            display. Check screen errors, color accuracy, and download black
            screen images at
            <Link to="/" className="text-blue-500 underline ml-1">
              Screen Space App
            </Link>
            . It's a useful tool to diagnose and resolve screen-related issues
            conveniently.
          </p>
          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <Link to="/" className="text-blue-500 underline">
                Screen Space App
              </Link>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 0938 137 131
            </p>
            <p>
              <span className="font-semibold">Introduce:</span>{" "}
              <Link to="/" className="text-blue-500 underline">
                Screen Space Contact
              </Link>
            </p>
            <p>
              <span className="font-semibold">Company:</span> Công Ty TNHH ABC
            </p>
            <p>
              <span className="font-semibold">Tags:</span> #Screen, #Background,
              #Blackscreen
            </p>
            <p>
              <span className="font-semibold">Key words:</span> White screen,
              Black screen, Blue screen, Green screen, Red screen, Yellow
              screen, Orange screen, Pink screen, Purple screen, Zoom Lighting
            </p>
            <p>
              <span className="font-semibold">Address:</span> HaNoi, VietNam
            </p>
            <p>
              <span className="font-semibold">Gmail:</span>{" "}
              <a
                href="mailto:Blackscreenspace@gmail.com"
                className="text-blue-500 underline"
              >
                screenspaceapp@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

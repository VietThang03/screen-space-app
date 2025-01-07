import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const WhiteScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[1]); // Trạng thái màu hiện tại
  const handleColorChange = (color: {
    name: string;
    color: string;
    path?: string;
  }) => {
    setActiveColor(color);
    navigate(color.path!);
  };
  return (
    <>
      <Helmet>
        <title>{activeColor ? activeColor.name : "Home"}</title>
        <meta
          name="home"
          content="Đây là trang white screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {colors.map((colorObj, index) => (
          <ColorBox
            key={index}
            color={colorObj.color}
            name={colorObj.name}
            activeColor={activeColor.name === colorObj.name}
            handleColorChange={() => handleColorChange(colorObj)}
          />
        ))}
      </div>
      <ScreenDisplay activeColor={activeColor} />

      <div className="flex flex-col items-center bg-gray-50 min-h-screen py-8 px-4">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            The Beauty of the White Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>
            , where the simplicity and brilliance of the white screen take
            center stage. We believe that clarity and minimalism are essential
            for creating impactful visual experiences. Our platform is dedicated
            to providing versatile functionalities that revolve around the
            concept of the white screen. From optimizing lighting to enhancing
            creativity,{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            offers a comprehensive solution for your digital needs
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. Unlocking the Potential of the White Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Pure, Clear, and Versatile Visuals
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The white screen provides a pristine and clean canvas, ensuring
              your visuals stand out with maximum clarity. Whether you're
              editing photos, designing graphics, or just seeking a pure
              backdrop, the white screen serves as an ideal foundation for
              precision and creativity.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 Perfect Lighting for Your Projects
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              With its neutral brightness, the white screen ensures optimal
              lighting conditions. Whether you're capturing stunning portraits,
              using it as a light source, or setting up a photography studio,
              the screen offers balanced illumination, enabling enhanced visual
              compositions.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the White Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Testing Touch Interfaces and Identifying Dead Spots
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The white screen is a valuable tool for testing device touch
              screens, allowing you to identify dead zones with ease. Its
              consistent background makes spotting touch irregularities
              effortless and accurate.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Multipurpose Backdrop for Creativity
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Use the white screen as a flexible tool for various creative
              tasks. From being a background for product photography to acting
              as a clean slate for brainstorming sessions, it provides unmatched
              versatility for your needs. Join us at{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              and explore the endless possibilities that a white screen can
              bring to your creative and professional endeavors!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteScreenPage;

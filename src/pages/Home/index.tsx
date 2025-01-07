import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[0]); // Trạng thái màu hiện tại
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
          content="Đây là trang chủ của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="flex flex-wrap justify-center gap-4 p-4 cursor-pointer">
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
            The Power of the Black Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where the elegance and depth of the black screen take center
            stage. We believe that the simplicity and sophistication of a black
            screen open the door to countless creative possibilities. Our
            platform is designed to showcase the versatility of black screens,
            from enhancing focus to creating captivating visual effects.{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            is your go-to destination for optimizing your digital experience
            with the power of darkness.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. Unlocking the Potential of the Black Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Deep Contrast and Visual Focus
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              A black screen provides unmatched contrast, making it ideal for
              highlighting bright visuals and focusing on key elements. Whether
              you're testing graphics, watching media, or displaying content,
              the black screen ensures that every detail pops with clarity and
              vibrance.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 Reducing Eye Strain and Maximizing Comfort
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              he dark background of a black screen is gentle on the eyes,
              especially in low-light environments. It minimizes glare and
              reduces eye fatigue, making it perfect for extended use during
              presentations, design work, or casual browsing.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Black Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Background for Photography and Visual Design
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The black screen serves as a seamless backdrop for photography,
              eliminating distractions and enhancing the subject. It's also a
              favorite for graphic designers who need a neutral space for
              experimenting with light and colors.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Testing Display Quality and Pixel Accuracy
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The black screen is ideal for testing the quality of monitors,
              TVs, and smartphones. It helps identify dead pixels and uneven
              lighting, ensuring your device delivers the best performance
              possible. Join us at{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              to experience the versatility and power of the black screen in
              transforming your creative and professional projects. Let the
              depth of darkness inspire your next big idea!
            </p>
          </div>       
        </div>
      </div>
    </>
  );
};

export default HomePage;

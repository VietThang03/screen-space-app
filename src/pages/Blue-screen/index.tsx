import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BlueScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[2]); // Trạng thái màu hiện tại
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
          content="Đây là trang blue screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
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
            The Calm of the Blue Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where the calmness and versatility of the blue screen take the
            spotlight. The blue screen is more than just a backdrop—it's a
            creative tool used across industries for its unique properties.
            Whether for video editing, visual effects, or enhancing your digital
            workspace, a blue screen offers endless possibilities. Join us as we
            uncover the benefits of integrating a blue screen into your
            projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. Unlocking the Potential of the Blue Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 A Foundation for Creative Editing
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The blue screen is widely recognized for its role in chroma key
              compositing, a technique used to superimpose subjects onto
              different backgrounds. From blockbuster movies to home video
              projects, the blue screen provides a stable, clean, and adaptable
              canvas for seamless editing.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">1.2 Gentle Visual Comfort</h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The soft hue of the blue screen is easy on the eyes, making it an
              excellent choice for extended use. Its calming tone reduces visual
              fatigue, creating an ideal environment for tasks that require
              focus and concentration.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Blue Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Professional Video and Photo Background
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The blue screen is a favorite in the entertainment industry,
              providing a flexible background for video production and
              photography. Whether you're working on a high-budget project or a
              personal creative endeavor, the blue screen ensures precision and
              adaptability for your visuals.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Testing Visual Effects and Lighting
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The blue screen is a valuable tool for experimenting with lighting
              setups and testing visual effects. Its color consistency and
              non-reflective surface make it a reliable option for fine-tuning
              your creative workflows. Discover the power of the blue screen
              with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              and unlock a world of possibilities for your creative and
              professional projects. Whether you're crafting cinematic
              masterpieces or improving your digital environment, the blue
              screen is your perfect companion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueScreenPage;

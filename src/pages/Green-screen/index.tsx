import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const GreenScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[3]); // Trạng thái màu hiện tại
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
          content="Đây là trang green screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
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
            Unleash Imagination with Green Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where the versatility and innovation of the green screen take
            center stage. A staple in the world of visual effects and creative
            content, the green screen is an essential tool for professionals and
            hobbyists alike. Whether you're crafting cinematic scenes, enhancing
            your presentations, or exploring creative possibilities, the green
            screen provides unmatched functionality. Let's dive into its
            incredible features and applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. The Power of the Green Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Seamless Background Replacement
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The green screen is best known for its role in chroma key
              technology, enabling seamless background replacement. Whether
              you're filming a video, taking photographs, or streaming online,
              the green screen allows you to transport your subjects into
              virtually any environment, limited only by your imagination.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 Vibrant and High-Contrast Surface
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The bright and distinct green of the screen provides excellent
              contrast, ensuring accurate subject isolation during editing. This
              makes it a preferred choice for professionals in the film, gaming,
              and content creation industries.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Green Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Professional Video Production
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              From blockbuster movies to online tutorials, the green screen is a
              key player in creating dynamic video content. It enables
              filmmakers and content creators to add stunning visuals,
              animations, and exotic locations without ever leaving their
              studio.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Live Streaming and Virtual Presentations
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The green screen is a favorite for streamers and professionals
              delivering virtual presentations. It allows users to create custom
              virtual backgrounds, adding a polished and professional touch to
              their online presence.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.3 Creative Photography and Effects
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The green screen opens up endless possibilities for photographers,
              allowing them to experiment with creative compositions and
              backgrounds. It’s the perfect tool for both professional shoots
              and fun, imaginative projects. Step into the world of infinite
              creativity with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              . Whether you're a filmmaker, a content creator, or simply
              exploring the art of visual storytelling, the green screen is your
              gateway to bringing imaginative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenScreenPage;

import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const YellowScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[5]); // Trạng thái màu hiện tại
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
          content="Đây là trang yellow screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
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
            Energize Your Design with Yellow Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where brightness and creativity converge in the vibrant hue of the
            yellow screen. Known for its cheerful and energetic qualities, the
            yellow screen is a versatile tool for a wide range of creative and
            professional applications. Whether you’re looking to create warm
            visuals, test lighting, or explore new design possibilities, the
            yellow screen adds a unique touch to any project. Let’s uncover its
            benefits and uses!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. The Power of the Yellow Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Bright and Energetic Backdrops
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              A yellow screen brings a lively and optimistic energy to your
              visuals. Its radiant color makes it ideal for projects that aim to
              evoke happiness, enthusiasm, or a sense of freshness. Whether
              you’re working on branding, videos, or photoshoots, the yellow
              screen ensures a warm and welcoming aesthetic.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 Enhanced Contrast and Illumination
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The yellow screen offers excellent illumination properties,
              reflecting light evenly and enhancing the brightness of your
              subjects. It’s perfect for projects where lighting precision and a
              clean, vibrant background are essential.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Yellow Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Advertising and Marketing Campaigns
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Yellow is often associated with positivity and attention-grabbing
              visuals, making it an excellent choice for advertisements and
              branding campaigns. The yellow screen can help create uplifting
              and eye-catching content that resonates with your audience.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Creative Photography and Videography
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              For photographers and videographers, the yellow screen provides a
              bold and unique backdrop that stands out. It’s ideal for fun,
              playful themes, product shoots, or projects that require an
              energetic and dynamic visual tone.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.3 Lighting and Design Experiments
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The yellow screen is a great tool for exploring color theory and
              design ideas. Its vibrant hue works well for testing how colors
              interact, especially in warm-toned compositions. It’s also
              excellent for adjusting lighting setups that emphasize brightness
              and contrast.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-medium">
              Brighten Your Vision with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Dive into the world of vibrant creativity with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              . Whether you’re working on professional projects, experimenting
              with new ideas, or simply exploring the artistic possibilities of
              a yellow backdrop, this dynamic tool will bring your ideas to
              life. Let the energy of yellow inspire your next masterpiece!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default YellowScreenPage;

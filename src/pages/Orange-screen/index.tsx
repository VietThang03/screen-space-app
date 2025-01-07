import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OrangeScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[6]); // Trạng thái màu hiện tại
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
          content="Đây là trang orange screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
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
            Bold and Bright Orange Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where the warmth and vibrancy of orange take center stage. Known
            for its balance between energy and comfort, the orange screen is a
            versatile tool for enhancing visuals, testing lighting, and creating
            unique creative projects. Whether you’re aiming for bold artistic
            effects or a cozy ambiance, the orange screen offers countless
            possibilities to bring your ideas to life.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. The Dynamic Power of the Orange Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Warm and Inviting Visuals
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              An orange screen adds a sense of warmth, energy, and friendliness
              to your visuals. Its vibrant yet approachable tone makes it
              perfect for themes that evoke optimism, enthusiasm, or creativity.
              From casual projects to professional campaigns, the orange screen
              creates a dynamic and welcoming aesthetic.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 Perfect for Balance and Harmony
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Orange is a color that bridges the gap between bold and subtle,
              making it a fantastic choice for striking the right balance in
              your designs. The orange screen provides an ideal backdrop for
              projects that require both vibrancy and harmony, ensuring your
              subjects stand out without overwhelming the viewer.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Orange Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Marketing and Branding Projects
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Orange is often associated with innovation and energy, making it a
              popular choice for branding and marketing campaigns. The orange
              screen can help create visuals that capture attention, build
              excitement, and connect with your audience in a memorable way.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Artistic Photography and Videography
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              For photographers and videographers, the orange screen offers a
              unique and creative canvas. Whether you’re capturing product
              shots, portraits, or cinematic scenes, its warm tones add depth
              and personality to your visuals, making them truly stand out.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.3 Lighting and Color Experiments
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The orange screen is an excellent tool for experimenting with
              light and color combinations. It works well for testing how
              different shades interact, especially when blending warm and cool
              tones. It also enhances the interplay of shadows and highlights,
              making it a favorite among designers and visual artists.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              Ignite Your Creativity with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Step into a world of warmth and inspiration with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              . Whether you’re designing compelling campaigns, exploring
              artistic concepts, or crafting visuals with a welcoming vibe, the
              orange screen is your ultimate partner. Let its vibrant energy
              fuel your creativity and transform your projects into
              masterpieces!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrangeScreenPage;

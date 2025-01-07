import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PurpleScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[8]); // Trạng thái màu hiện tại
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
          content="Đây là trang purple screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
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
            Mystique of the Purple Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where the charm and sophistication of purple take center stage.
            Known for its regal, creative, and mysterious qualities, the purple
            screen is a versatile and imaginative tool for enhancing visuals,
            adding depth, and bringing a unique flair to any project. Whether
            you're designing dreamy aesthetics or exploring bold, artistic
            themes, the purple screen offers endless possibilities.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. The Unique Appeal of the Purple Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 A Canvas for Creativity and Luxury
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              A purple screen provides a rich and dynamic backdrop for your
              projects. With its vibrant and captivating tones, it creates an
              atmosphere of elegance and mystique, making it perfect for a
              variety of moods. Whether you're working on photography,
              videography, or graphic design, the purple screen offers a
              versatile foundation that exudes sophistication and depth.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">1.2 Mysterious Yet Regal</h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Purple is a color that carries an air of mystery while also being
              associated with royalty and luxury. The purple screen is a perfect
              choice for projects that require an elevated or enigmatic vibe. It
              brings a sense of grandeur and intrigue to your visuals, appealing
              to audiences with a taste for the refined and the dramatic.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Purple Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Fashion and High-End Photography
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The purple screen is a favorite for high-fashion and luxury
              photography, offering a regal backdrop that enhances clothing,
              jewelry, and accessories. It complements both bold and subtle
              designs, adding a touch of opulence to any shoot. Whether it’s a
              runway show or a beauty campaign, the purple screen creates a
              captivating visual atmosphere.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Artistic and Cinematic Projects
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Suspendisse a leo at magna tincidunt molestie. Donec euismod leo
              vitae tellus tempus, a luctus ligula vehicula.For filmmakers,
              animators, and visual artists, the purple screen creates an ideal
              setting for imaginative storytelling. Whether you’re working on
              fantasy films, abstract animations, or experimental art, the
              purple screen adds a layer of drama and intrigue. Its bold hue is
              perfect for evoking emotions, whether it’s wonder, mystery, or
              elegance.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.3 Creative Branding and Marketing
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Purple is often used in branding to convey creativity, luxury, and
              innovation. The purple screen can help you craft bold, distinctive
              visuals that stand out in the market. Whether for high-end product
              photography, artistic campaigns, or unique brand identities, the
              purple backdrop provides a memorable and sophisticated touch that
              resonates with your audience.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-medium">
              Add a Touch of Purple with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Immerse yourself in the world of elegance, creativity, and mystery
              with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              . Whether you're designing luxurious themes, bold artistic
              statements, or exploring enigmatic concepts, the purple screen
              allows you to bring your vision to life. Let its regal and
              versatile qualities inspire your next creative endeavor and
              captivate your audience!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurpleScreenPage;

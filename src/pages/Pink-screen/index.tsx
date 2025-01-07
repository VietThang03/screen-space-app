import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PinkScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[7]); // Trạng thái màu hiện tại
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
          content="Đây là trang pink screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
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
            Creative Magic with Pink Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where the charm and sophistication of pink take center stage.
            Known for its soft, romantic, and playful qualities, the pink screen
            is a versatile and creative tool for enhancing visuals, adding
            personality, and bringing a unique flair to any project. Whether
            you're designing dreamy aesthetics or exploring bold, trendy themes,
            the pink screen offers endless possibilities.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. The Unique Appeal of the Pink Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Soft and Versatile Aesthetics
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              A pink screen adds a gentle and captivating visual tone to your
              projects. Its warm and inviting hue is perfect for creating a
              variety of moods, from elegance and romance to fun and vibrancy.
              Whether you're working on photography, videography, or graphic
              design, the pink screen provides an ideal backdrop for a wide
              range of styles.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 A Blend of Sophistication and Playfulness
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Pink is a color that can seamlessly balance sophistication and
              playfulness. The pink screen is a perfect choice for projects that
              require a modern, trendy, or whimsical vibe. It brings an
              uplifting and dynamic quality to your visuals that resonates with
              diverse audiences.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Pink Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Fashion and Beauty Projects
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The pink screen is a go-to choice for fashion and beauty shoots,
              adding a touch of glamour and style to your visuals. It
              complements skin tones beautifully and enhances product shots,
              making it a favorite in the fashion and cosmetic industries.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Romantic and Lifestyle Themes
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              For romantic or lifestyle projects, the pink screen creates an
              enchanting atmosphere. Whether it's for wedding visuals,
              love-themed campaigns, or cozy, personal stories, the pink
              backdrop enhances the mood and brings a heartfelt touch to your
              content.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.3 Creative Branding and Marketing
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Pink is increasingly popular in modern branding and marketing
              campaigns, symbolizing creativity, innovation, and individuality.
              The pink screen can help you craft bold, eye-catching visuals that
              leave a lasting impression and connect with your audience
              emotionally.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-medium">
              Add a Touch of Pink with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Dive into the world of creativity and charm with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              . Whether you’re designing romantic themes, bold statements, or
              playful concepts, the pink screen empowers you to bring your
              vision to life. Let its warmth and versatility inspire your
              projects and captivate your audience!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinkScreenPage;

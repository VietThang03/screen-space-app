import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/ArrayColor";
import ColorBox from "../../components/ColorBox";
import ScreenDisplay from "../../components/ScreenDisplay";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const RedScreenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonicalUrl = `https://blackscreen.info${location.pathname}`;

  const [activeColor, setActiveColor] = useState(colors[4]); // Trạng thái màu hiện tại
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
          content="Đây là trang red screen của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
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
            The Energy of the Red Screen
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to{" "}
            <Link to={"https://blackscreen.info/"} className="font-bold">
              blackscreen.info
            </Link>{" "}
            , where the bold and striking nature of the red screen takes the
            spotlight. Known for its vibrancy and versatility, the red screen is
            a powerful tool for creative professionals and enthusiasts looking
            to make a statement. From dynamic visual effects to unique lighting
            tests, the red screen offers distinctive advantages across various
            applications. Let’s explore how a red screen can transform your
            creative projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6 mt-8">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold mb-4">
            1. The Power of the Red Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.1 Bold and Eye-Catching Visuals
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              A red screen creates a striking background that commands
              attention. Its vivid hue makes it ideal for emphasizing subjects,
              creating dramatic contrasts, or experimenting with bold artistic
              expressions. Whether you're crafting promotional materials or
              experimenting with edgy designs, the red screen adds undeniable
              impact.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              1.2 Unique Lighting and Color Effects
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The rich tones of a red screen can influence the mood and
              atmosphere of your visuals, making it perfect for projects that
              require warmth, passion, or intensity. It also provides a unique
              way to test lighting setups and explore creative color grading
              techniques.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold mb-4">
            2. Practical Applications of the Red Screen
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.1 Creative Photography and Cinematic Effects
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The red screen is a fantastic choice for artistic photography or
              film projects that require an unconventional and eye-catching
              backdrop. It can be used to enhance themes of energy, urgency, or
              power, providing a visually arresting canvas for your subjects.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.2 Experimental Visual Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              For designers and visual artists, the red screen serves as an
              excellent tool for experimenting with contrasting elements,
              shadows, and highlights. Its bold color makes it particularly
              useful for testing how other hues interact with bright, saturated
              tones.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">
              2.3 Branding and Marketing Campaigns
            </h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Red is a color often associated with excitement and passion,
              making the red screen an effective tool for branding and
              promotional campaigns. Whether you're designing ads, creating
              logos, or shooting commercials, the red screen can help evoke
              strong emotions and leave a lasting impression. Explore the bold
              possibilities with{" "}
              <Link to={"https://blackscreen.info/"} className="font-bold">
                blackscreen.info
              </Link>{" "}
              . Whether you're creating high-energy visuals, testing new ideas,
              or pushing the boundaries of your artistic vision, the red screen
              provides a unique and powerful platform for innovation. Let the
              intensity of red inspire your next big project!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedScreenPage;

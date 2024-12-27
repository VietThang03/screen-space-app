import { Link } from "react-router-dom";

const HeaderApp = () => {
  return (
    <>
      <header className="w-full bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold text-gray-800">
            Screen Space App
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <Link to="/about" className="hover:text-black transition">
              About us
            </Link>
            <Link to="/privacy-policy" className="hover:text-black transition">
              Privacy Policy
            </Link>
            <Link
              to="/term-and-condition"
              className="hover:text-black transition"
            >
              Terms and Conditions
            </Link>  
            {/* <Link
              to="/cms-blog"
              className="hover:text-black transition"
            >
              Blog
            </Link>   */}
          </nav>
        </div>

        {/* Responsive Navigation */}
        <div className="md:hidden flex justify-center bg-gray-50 border-t">
          <nav className="flex space-x-4 text-sm text-gray-600 py-2">
            <Link to="/about" className="hover:text-black transition">
              About us
            </Link>
            <Link to="/privacy-policy" className="hover:text-black transition">
              Privacy Policy
            </Link>
            <Link
              to="/term-and-condition"
              className="hover:text-black transition"
            >
              Terms and Conditions
            </Link>     
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderApp;

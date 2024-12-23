const FooterApp = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Contact Section */}
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-700">Contact</p>
        </div>

        <hr className="border-gray-300 my-4" />

        {/* Copyright Section */}
        <div>
          <p className="text-sm text-gray-500">
            © 2024{" "}
            <span className="font-semibold text-gray-700">Screen Space App</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;

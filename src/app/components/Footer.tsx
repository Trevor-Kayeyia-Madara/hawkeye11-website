const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-6 text-white mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {currentYear} PlaceholderCompany. All rights reserved.
        </p>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
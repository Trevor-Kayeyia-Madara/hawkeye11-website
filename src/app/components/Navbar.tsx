import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            PlaceholderBrand
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
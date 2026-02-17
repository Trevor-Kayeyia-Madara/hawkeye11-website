import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <h1 className="text-6xl font-bold text-amber-400 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-300 mb-8 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-amber-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-amber-300 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </main>
  );
}

import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-4 text-red-600">
        404
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-700">
        Oops! Page Not Found
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-base sm:text-lg md:text-xl bg-blue-600 hover:bg-blue-700 text-white rounded shadow-md transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

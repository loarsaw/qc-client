import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold">quickcourse.xyz</h2>
        <p className="text-center">Reinvent you{`&apos`}re learning experience.</p>
      </div>

      <div className="flex-1 flex flex-col bg-white justify-center items-center">
        <h2 className="text-2xl font-semibold mb-5">SignUp Page</h2>
        <form className="w-4/5 max-w-md">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <form className="w-4/5 max-w-md">
          <div className="mb-4"></div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex justify-center">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            className="dark:invert"
          />
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Login to your account
        </h1>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Don not have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

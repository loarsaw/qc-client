"use client";
import { useRouter } from "next/navigation";

const NavBar = () => {
//   const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (darkMode) {
//       document.documentElement.classList.remove("dark");
//     } else {
//       document.documentElement.classList.add("dark");
//     }
//   };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md flex h-20 justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        quickcourse.xyz
      </h1>
      <div className="flex items-center space-x-4">
        {/* <button
                    onClick={toggleDarkMode}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button> */}
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

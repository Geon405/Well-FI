import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/react-router";

function Navbar() {
  return (
    <>
      <div className="p-4 shadow dark:border flex justify-between items-center bg-white dark:bg-gray-900">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">WELL-FI</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link></li>
            <li><Link to="/budget" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Budget</Link></li>
            <li><Link to="/investments" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Investments</Link></li>
            <li><Link to="/expenses" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Expenses</Link></li>
            <li><Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Profile</Link></li>
          </ul>
          <div className="ml-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
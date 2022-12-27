import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 px-2 lg:flex-none">
        <Link href="/" className="text-lg font-bold">Ambery Harris</Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Mini demos
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a>TicTacToe</a>
              </li>
              <li>
                <a>File storage</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

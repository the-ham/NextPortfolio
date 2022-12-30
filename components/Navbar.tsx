import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar z-50 bg-none">
      <div className="flex-1 px-2 lg:flex-none">
        <Link href="/" className="text-lg font-bold">Ambery Harris</Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost hover:btn-primary rounded-btn">
              Mini demos
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow-lg bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <Link href="/tictactoe">TicTacToe</Link>
              </li>
              <li>
                <Link href="/todo">Todo&apos;s</Link>
              </li>
              <li>
                <a>File storage</a>
              </li>
              <li>
                <Link href="/palette">Palette</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/future/image";
import React, { useState } from "react";
import IcUser from "./assets/ic-user.png";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
const DropdownMenu = ({ handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="position-relative ">
      {/* Dropdown Button */}
      <button onClick={toggleDropdown} className="border-0 bg-transparent">
        <Image src={IcUser} alt="avatar" className="user-img" />
      </button>

      {/* Dropdown Items */}
      {isDropdownOpen && (
        <ul className="position-absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-xl z-10">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link href="/profile">
              <a className=" ">
                <FormattedMessage id="profile" />
              </a>
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link href="/orders">
              <a className=" ">
                <FormattedMessage id="orders" />
              </a>
            </Link>
          </li>

          <li className="px-4 py-2">
            <button
              className="btn btn-danger text-light w-full"
              onClick={handleLogout}
            >
              <FormattedMessage id="logout" />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;

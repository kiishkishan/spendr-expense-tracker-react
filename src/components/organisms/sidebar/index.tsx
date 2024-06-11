import { Link } from "react-router-dom";
import { logoImage } from "../../../assets/images";
import { SidebarNavigatorLink } from "../../molecules";
import { BiSolidDashboard } from "react-icons/bi";
import { GiTakeMyMoney, GiPayMoney } from "react-icons/gi";
import { BsInboxesFill } from "react-icons/bs";
import { MdOutlineHelp } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard"); // Default active link is "Dashboard"

  return (
    <div
      className="bg-white h-screen flex flex-col justify-start items-center border-r border-gray-200
      w-full sm:w-48 md:w-[280px] shadow-custom-shadow"
    >
      <Link to="/" className="items-center mb-12 p-2">
        <img src={logoImage} alt="Logo" className="my-4 p-1 w-44" />
      </Link>
      <div className="w-full mb-16 justify-items-end">
        <ul className="space-y-4">
          <SidebarNavigatorLink
            icon={BiSolidDashboard}
            navigateTo="/dashboard"
            navName="Dashboard"
            isActive={activeLink === "/dashboard"}
            onClick={() => setActiveLink("/dashboard")}
          />
          <SidebarNavigatorLink
            icon={GiTakeMyMoney}
            navigateTo="/income"
            navName="Income"
            isActive={activeLink === "/income"}
            onClick={() => setActiveLink("/income")}
          />
          <SidebarNavigatorLink
            icon={BsInboxesFill}
            navigateTo="/categories"
            navName="Categories"
            isActive={activeLink === "/categories"}
            onClick={() => setActiveLink("/categories")}
          />
          <SidebarNavigatorLink
            icon={GiPayMoney}
            navigateTo="/expenses"
            navName="Expenses"
            isActive={activeLink === "/expenses"}
            onClick={() => setActiveLink("/expenses")}
          />
        </ul>
      </div>
      <div className="bg-gray-200 w-3/4 h-0.5 mb-10" />
      <div className="w-full">
        <ul className="space-y-6">
          <SidebarNavigatorLink
            icon={MdOutlineHelp}
            navigateTo="/help"
            navName="Help"
            isActive={activeLink === "/help"}
            onClick={() => setActiveLink("/help")}
          />
          <SidebarNavigatorLink
            icon={IoLogOut}
            navigateTo="/logout"
            navName="Logout"
            isActive={activeLink === "/logout"}
            onClick={() => setActiveLink("/logout")}
          />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

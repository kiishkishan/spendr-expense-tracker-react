import React from "react";
import { Heading3 } from "../../atoms";
import { Link } from "react-router-dom";

type SidebarNavigaorLinkProps = {
  navigateTo: string;
  icon: string;
  navName: string;
  isActive: boolean;
  parentClassName?: string;
};

const SidebarNavigatorLink: React.FC<SidebarNavigaorLinkProps> = ({
  navigateTo,
  icon,
  navName,
  isActive,
  parentClassName,
}) => {
  return (
    <li
      className={`flex flex-row justify-between flex-wrap group hover:bg-lightBaseOfPrimary transition duration-300" ${parentClassName}`}
    >
      <Link
        to={navigateTo}
        className="flex flex-row w-11/12 justify-evenly items-center mx-auto text-right"
      >
        <img src={icon} alt="Dashboard Icon" className="w-fit h-fit" />
        <Heading3
          children={navName}
          className="text-primary text-right"
          medium
        />
      </Link>
      {isActive && <div className="min-w-1 bg-primary" />}
    </li>
  );
};

export default SidebarNavigatorLink;

import React from "react";
import { Heading5 } from "../../atoms";
import { Link } from "react-router-dom";

type SidebarNavigatorLinkProps = {
  navigateTo: string;
  icon: React.ElementType; // Use React.ElementType to accept a component
  navName: string;
  isActive: boolean;
  parentClassName?: string;
  onClick: () => void;
};

const SidebarNavigatorLink: React.FC<SidebarNavigatorLinkProps> = ({
  navigateTo,
  icon: Icon, // Rename prop to Icon to use it as a component
  navName,
  isActive,
  parentClassName,
  onClick,
}) => {
  return (
    <li
      className={`group flex flex-row justify-start items-center relative
      hover:bg-gray-100 transition duration-300 transform hover:scale-105 
      ${isActive && "bg-gray-100"}
      ${parentClassName}`}
      onClick={onClick}
    >
      <Link
        to={navigateTo}
        className="flex flex-row w-full items-center py-2 px-8"
      >
        <div
          className={`w-8 h-8 p-1.5 flex items-center justify-center rounded-md ${
            isActive ? "bg-primary" : "bg-gray-200"
          }`}
        >
          <Icon
            className={`w-full h-full ${
              isActive ? "text-white" : "text-gray-500 group-hover:text-primary"
            }`}
          />
        </div>
        <div className="ml-4">
          <Heading5
            children={navName}
            className={`${
              isActive
                ? "!text-primary"
                : "!text-gray-500 !group-hover:text-primary opacity-70 group-hover:opacity-100"
            }`}
            medium
          />
        </div>
      </Link>
      {isActive && (
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary" />
      )}
    </li>
  );
};

export default SidebarNavigatorLink;

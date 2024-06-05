import {
  logoImage,
  sideBarCategoriesIcon,
  sideBarDashboardIcon,
  sidebarIncomeIcon,
} from "../../../assets/images";
import { SidebarNavigatorLink } from "../../molecules";

const SideBar = () => {
  return (
    <div
      className="bg-white h-screen flex flex-col justify-start items-center border-r border-gray-200
      w-full sm:w-48 md:w-64 lg:w-[280px] shadow-custom-shadow"
    >
      <div className="items-center mb-20 p-4">
        <img src={logoImage} alt="Logo" className="my-4 p-2 w-fit h-fit" />
      </div>
      <div className="w-full">
        <ul className="space-y-8">
          <SidebarNavigatorLink
            icon={sideBarDashboardIcon}
            navigateTo="/dashboard"
            navName="Dashboard"
            isActive={true}
          />
          <SidebarNavigatorLink
            icon={sidebarIncomeIcon}
            navigateTo="/income"
            navName="Income"
            isActive={false}
          />
          <SidebarNavigatorLink
            icon={sideBarCategoriesIcon}
            navigateTo="/categories"
            navName="Categories"
            isActive={false}
          />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

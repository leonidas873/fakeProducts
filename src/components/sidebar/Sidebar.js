import SidebarSelect from "./sidebarSelect/SidebarSelect";
import "./sidebar.css";
import PriceRange from "./priceRange/PriceRange";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <SidebarSelect selectType="category" colour="dark" />
      <SidebarSelect selectType="sort" colour="light" />
      <PriceRange/>
    </div>
  );
};

export default Sidebar;

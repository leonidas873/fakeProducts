import Drawer from "@material-ui/core/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawerSidebar } from "../../redux/actions/styleActions";
import SidebarSelect from "./sidebarSelect/SidebarSelect";
import PriceRange from "./priceRange/PriceRange";
import "./sidebar.css";



const DrawerSidebar = () => {
  
  const showSidebar = useSelector(
    (state) => state.styleStates.toggleDrawerSidebar
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Drawer
        anchor="left"
        open={showSidebar}
        onClose={() => {
          dispatch(toggleDrawerSidebar(false));
        }}
        
      >
        <div className="drawerSidebarContent">
          <SidebarSelect selectType="category" colour="dark" />
          <SidebarSelect selectType="sort" colour="light" />
          <PriceRange/>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerSidebar;

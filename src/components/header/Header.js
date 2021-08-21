import "./header.css";
import { useDispatch} from "react-redux";
import {
  toggleDrawerMainNav,
  toggleDrawerSidebar,
} from "../../redux/actions/styleActions";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import {  useState } from "react";
import { setSearchQuery } from "../../redux/actions/productsActions";




const Header = () => {
  

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    dispatch(setSearchQuery(searchValue));
   
  };


  return (
    <div className="header">
      <GiHamburgerMenu
        className="header__icon"
        onClick={() => {
          dispatch(toggleDrawerSidebar(true));
        }}
      />
      <div className="header__search">
        <input
          className="header__search-input"
          type="text"
          placeholder="Enter product name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="header__search-btn" onClick={onSearch}>
          <FiSearch />
        </button>
      </div>
      <BiDotsVerticalRounded
        className="header__icon"
        onClick={() => {
          dispatch(toggleDrawerMainNav(true));
        }}
      />
    </div>
  );
};
export default Header;

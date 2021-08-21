import { useEffect, useState } from "react";
import "./sidebarSelect.css";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { useDispatch } from "react-redux";
import { setCategory, setSortType } from "../../../redux/actions/productsActions";

const SidebarSelect = ({ selectType,colour }) => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [selectTitleColor,setSelectTitleColor] = useState("white")
  const category = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const sort = [
    "name: A-Z",
    "name: Z-A",
    "price: low to high",
    "price: high to law",
  ];
  useEffect(() => {
    setOptions(selectType == "category" ? category : sort);
    if(colour == "dark"){
        setSelectTitleColor("rgb(0, 96, 115)");
    } else if(colour == "light") {
        setSelectTitleColor("rgb(0, 192, 230)")
    }
  }, [selectType,colour]);
  
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
      setShowOptions(showOptions ? false : true);
     
  }

const onOptionClick = (e) => {
  setShowOptions(showOptions ? false : true);
  if (selectType === "category") {
    dispatch(setCategory(e.target.innerHTML))
  } else if (selectType === "sort") {
    dispatch(setSortType(e.target.innerHTML))
  }
}

  return (
    <div className="select">
      <div className="select__name" style={{backgroundColor:selectTitleColor}} onClick={toggleOptions}>{selectType}{showOptions ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
      {showOptions && options.map((option) => 
        <div className="select__option" onClick={onOptionClick} key={option} >{option}</div>
      )}
    </div>
  );
};

export default SidebarSelect;

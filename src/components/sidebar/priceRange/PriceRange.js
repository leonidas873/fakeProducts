import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import '../sidebar.css';
import { useSelector,useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {setPriceRange} from '../../../redux/actions/productsActions';
const useStyles = makeStyles({
  root: {
    width: 200,
    alignSelf:'center',
    margin:'20px 0px 10px 0px'
  },
});



const PriceRange = () => {
  const classes = useStyles();
  const priceRange = useSelector(state=>state.allProducts.priceRange);
  const minMaxPrice = useSelector(state=>state.allProducts.minMaxPrice);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(minMaxPrice);
  
  useEffect(()=>{
        setValue(minMaxPrice);
  },[minMaxPrice])
  
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setPriceRange(value));

  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        min={minMaxPrice[0]}
        max={minMaxPrice[1]} 
      />
       
      <div className="priceBoxes">
          <div className="priceBox">{Math.min(...value)}$</div>
          <div className="priceBox">{Math.max(...value)}$</div> 
      </div>
    </div>
  );
}


export default PriceRange;
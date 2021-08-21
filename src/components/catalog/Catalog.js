import "./catalog.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAllProducts } from "../../API";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllProducts,
  setOpenModal,
  setMinMaxPrice,
} from "../../redux/actions/productsActions";
import { Route, useHistory } from "react-router-dom";
import Modal from "./Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 440,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "17px",
    cursor: "pointer",
  },
}));

const Catalog = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const searchQuery = useSelector((state) => state.allProducts.searchQuery);

  const history = useHistory();

  useEffect(() => {
    fetchAllProducts().then((res) => {
      dispatch(setAllProducts(res));
      dispatch(setMinMaxPrice(res));
    });
  }, [dispatch]);

  const classes = useStyles();

  const onProductClick = (productId) => {
    history.push(`/${productId}`);
    dispatch(setOpenModal(allProducts, productId, true));
  };

 // searched 
 let filteredProducts = allProducts.filter((product) =>
    product.title.toUpperCase().includes(searchQuery.toUpperCase())
  );
// price filter
const priceRange = useSelector(state => state.allProducts.priceRange);
  Boolean(priceRange[0]) ? filteredProducts = filteredProducts.filter(product=>
    product.price >= priceRange[0] && product.price <= priceRange[1]
    ) : filteredProducts = filteredProducts;
    console.log(priceRange)
// category filter
const category = useSelector(state => state.allProducts.category);
category ? filteredProducts = filteredProducts.filter(product => 
  product.category === category
  ) : filteredProducts=filteredProducts;

// sort map
const sortType = useSelector(state => state.allProducts.sortType);

switch(sortType) {
  case "name: A-Z" :
    filteredProducts = filteredProducts.sort((a,b)=>a.title < b.title ? -1 : 1);
    break;
  case "name: Z-A" :
    filteredProducts = filteredProducts.sort((a,b)=>a.title < b.title ? 1 : -1);   
    break;
  case "price: low to high" :
    filteredProducts = filteredProducts.sort((a,b)=> a.price - b.price);
    break;
  case "price: high to law" :
  filteredProducts = filteredProducts.sort((a,b)=> b.price - a.price);
  break; 
}

  return (
    <div className="catalog">
      <Grid container spacing={2} className="catalog__container">
        {filteredProducts.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="catalog__card"
            key={product.id}
            onClick={() => {
              onProductClick(product.id);
            }}
          >
            <Paper className={classes.paper}>
              <img className="product__image" src={product.image} alt="" />
              <h4 className="product__title">{product.title}</h4>
              <p className="product__category">
                Cateory:{" "}
                <span className="product__category-text">
                  {product.category}
                </span>
              </p>
              <p className="product__price">Price: ${product.price}</p>
            </Paper>
          </Grid>
        ))}
        <Route path="/:productId">
          <Modal />
        </Route>
      </Grid>
    </div>
  );
};

export default Catalog;

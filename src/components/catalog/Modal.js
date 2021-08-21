import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOpenModal } from "../../redux/actions/productsActions";
import "./catalog.css";
import { withStyles } from "@material-ui/styles";
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { fetchSingleProduct } from "../../API";
import { useState,useEffect } from "react";

const DialogContent = withStyles((theme) => ({
  root: {
    
    width:'70vw',
    maxWidth:800,
    height:470,
    display:'flex',
    overFlowX:'none'

  },
}))(MuiDialogContent);



const Modal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const { productId } = useParams();
  const [product,setProduct] = useState(false);


  const handleClose = () => {
    dispatch(setOpenModal(allProducts, productId, false));
    history.push('/');
  };
 
  useEffect(()=>{
    fetchSingleProduct(productId).then(res=>setProduct(res))
  },[productId])


  return (
    <div>
      <Dialog maxWidth={'xl'} onClose={handleClose} open={()=>Boolean(product.openModal)}>
        <DialogContent  >
          {!product ? 
          <div className="modal__gif-wrapper">
<img className="modal__gif" src="https://www.nrilegalservices.com/wp-content/themes/nri-legal-theme/images/loading.gif" alt=""/>
          </div>
           : 
          <>
          <div className="modal__left-side">
            <p className="modal__price">Cost: ${product.price}</p>
            <img className="modal___image" src={product.image} alt="" />
          </div>
          <div className="modal__right-side">
            <h4 className="modal__title">{product.title}</h4>
            <p className="modal__category">Category: <span style={{color:'rgb(142, 142, 235)'}}>{product.category}</span></p>
            <h5 className="modal__description">description</h5>
            <p className="modal__description-text">{product.description}</p>
          </div>
          </> }
          <CloseIcon className="modal__close-btn" onClick={handleClose}/>
          </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;

import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../Store/cart';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(state => state.cart.total);

  const showCartHandler = () => {
    dispatch(cartActions.show());
    
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotal}</span>
    </button>
  );
};

export default CartButton;

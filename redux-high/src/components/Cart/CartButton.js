import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../Store/store';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showData = useSelector(state => state.showCart);

  const showCartHandler = () => {
    dispatch(cartActions.show());
    console.log(showData);
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

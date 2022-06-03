import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import CartItem from '../Cart/CartItem';

import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../Store/cart';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addCartItemArray = useSelector(state => state.cart.addCartItem);
  const { title, price, description } = props;

  const addToCartHandler = () => {
    // console.log(dispatch(cartActions.addCartItem()))
    console.log(addCartItemArray);
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

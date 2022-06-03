import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const counterIncrement = () => {
    dispatch(counterActions.increment());
  };

  const counterDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={counterDecrement}>-</button>
          <button onClick={counterIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

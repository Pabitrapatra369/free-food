import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handlClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" min-h-screen">
      <h1 className="font-bold text-center ">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="font-bold text-center bg-black text-white p-2 "
          onClick={handlClearCart}
        >
          Clear Cart
        </button>
        {cartItems.lenght === 0 && (
          <h1>Cart is empty Add some items to the cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

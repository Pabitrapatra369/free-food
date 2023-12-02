import { useState, useContext } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStarus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btn, setbtn] = useState("login");
  const onlineStatus = useOnlineStarus();
  const { loggedInUser } = useContext(userContext);
  // console.log(loggedInUser);
  //cosnt is changig is beacause of  rerendering of the header component once aging

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className=" sticky flex justify-between bg-violet-950 shadow-lg  ">
      <div>
        <img src={LOGO} alt="image" className="w-20 m-5" />
      </div>
      <div className="">
        <ul className="flex p-10 gap-4 text-white">
          <li>online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Gocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <button
            className=""
            onClick={() => {
              if (btn == "login") setbtn("logout");
              else setbtn("login");
            }}
          >
            {btn}
          </button>
          <li className="font-bold">Hi,{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const itemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" font-semibold w-full border-b-2 border-violet-300 p-3 flex justify-between"
        >
          <div>
            <span>{item.card.info.name}</span>
            <br />
            <span>price:Rs.{item.card.info.price / 100}/-</span>

            <p>{item.card.info.description} </p>
          </div>
          <div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="h-20 w-20 rounded-lg"
            />
            <button
              className=" bg-violet-600 text-white w-14 text-center rounded-lg font-semibold "
              onClick={() => handleAddItem(item)}
            >
              add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default itemList;

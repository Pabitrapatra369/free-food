import useRestaurantManu from "../utils/useRestaurantmanu";
import { useParams } from "react-router-dom";
import Shimmmer from "./Shimmer";
import Image, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ResCatagory from "./ResCatagory";

const RestaurantManu = () => {
  const [showindex, setshowindex] = useState(0);

  const { resId } = useParams();
  // console.log(resId);

  const resInfo = useRestaurantManu(resId); //custom hook

  if (resInfo === null) return <Shimmmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  const catagories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(catagories);

  return (
    <div className=" w-full  bg-violet-400">
      <div className=" w-full flex justify-center min-h-screen   ">
        <div className=" w-[60%] text-start ">
          <div className=" h-32 flex-col items-center  rounded-lg bg-violet-500 p-4 ">
            <h1 className=" text-2xl font-bold">{name} </h1>

            <h3 className="text-2xl">
              {cuisines.join(",")} - {costForTwoMessage}
            </h3>
          </div>

          <div className="  ">
            <div>
              {/* Old catarory manu */}
              {/* <ul className="">
              {itemCards.map((item) => (
                <li
                  key={item.card.info.id}
                  className=" w-full h-[150px] bg-violet-400 flex justify-between items-center font-semibold "
                >
                  <div>
                    {item.card.info.name} -Rs.{" "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </div>
                  <div>
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      className="h-20 w-20 rounded-lg"
                    />
                    <p className=" bg-violet-600 text-white w-14 text-center rounded-lg font-semibold ">
                      add +
                    </p> 
                    
                    
                  </div>
                </li>
              ))}
            </ul> */}
            </div>
            {/*   catatories accordians */}
            {catagories.map((category, index) => (
              <ResCatagory
                key={category?.card?.card.title}
                data={category?.card?.card}
                showitems={index == showindex ? true : false}
                setshowindex={() => {
                  if (index === setshowindex(index))
                    return !setshowindex(index);
                  // else true;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantManu;

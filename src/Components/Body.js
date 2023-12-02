import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RastaurantCards";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStarus from "../utils/useOnlineStatus";

import userContext from "../utils/userContext";
const Body = () => {
  const [ListOfrestaurants, setListOfRestaurants] = useState([]);
  const [FilterdRestaurants, setFilterdRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //ww can heare use live data
    setFilterdRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //ww can heare use live data
  };
  //conditinal rendering
  //  if( ListOfrestaurants.length === 0) {
  //   //we can use shimmer
  //   return <h1>Loading....</h1>;
  // }
  // console.log("body rendered");

  const onlinestatus = useOnlineStarus();

  if (onlinestatus === false)
    return (
      <h1>
        Oops !! Looks Like you are Offline check your internet Connectivity.{" "}
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(userContext);

  return ListOfrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" w-full min-h-full bg-violet-300 pl-4">
      <div className="flex justify-between mx-2">
        <div>
          <input
            type="text"
            className=" border border-solid border-3 border-blue-800 bottom-3 rounded-lg m-2 "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className=" bg-green-700 rounded-lg w-20 hover:bg-green-950 text-white"
            onClick={() => {
              const filteredList = ListOfrestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterdRestaurants(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className=" bg-violet-400 rounded-xl hover:bg-violet-600 px-2"
          onClick={() => {
            const filteredList = ListOfrestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button>
          <label>User Name : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </button>
      </div>
      <div className=" ">
        <div className=" flex flex-wrap">
          {
            //not using key(not acceptable)<<<<<Index<<<<<<<<<<<Unique Id (is best)
            FilterdRestaurants.map(function (res) {
              return (
                <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                  <RestaurantCard resdata={res?.info} />
                </Link>
              );
            })
          }
        </div>
        {/* <ResurantCard resdata={resList[0]}/>
                <ResurantCard resdata={resList[1]}/>
                <ResurantCard resdata={resList[3]}/>
                <ResurantCard resdata={resList[4]}/>
                <ResurantCard resdata={resList[5]}/>
                <ResurantCard resdata={resList[6]}/>
                <ResurantCard resdata={resList[7]}/>
                <ResurantCard resdata={resList[8]}/> */}
      </div>
    </div>
  );
};
export default Body;

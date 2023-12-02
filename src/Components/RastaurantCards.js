import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // const {resname,rescusine,address}= props;
  const { resdata } = props;
  // console.log(resdata);
  const { cloudinaryImageId, name, cuisines, avgRating } = resdata;

  return (
    <div className=" text w-[200px] h-[260px] p-4 m-4 bg-violet-600 hover:bg-violet-700 hover:scale-105 duration-400  text-white border-solid border-2 border-violet-100 shadow-slate-950 rounded-lg">
      <div className="res-img">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="image"
          className=" h-[150px] w-[160px] object-cover overflow-hidden rounded-lg content-center"
        />
      </div>
      <h2 className=" text-sm font-bold ">{name}</h2>
      <h3 className=" text-xs overflow-hidden">{cuisines.join(",")}</h3>
      {/* <h3 className=" text-xs ">{costForTwoString} FOR TWO</h3> */}
      <h4 className=" text-xs">{avgRating} ⭐</h4>
    </div>
  );
};
//this is higher order funciion
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

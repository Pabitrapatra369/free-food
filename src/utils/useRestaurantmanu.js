import { useState } from "react";
import { MANU_API } from "../utils/constants";
import { useEffect } from "react";
const useRestaurantManu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MANU_API + resId);
    const json = await data.json();
    // console.log(json);
    setresInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantManu;

import { useState } from "react";
import List from "./ItemList";
const ResCatagory = ({ data, showitems, setshowindex }) => {
  //   console.log(data);
  //   const [showitems, setshowitems] = useState(false);

  const ClickHandler = () => {
    // setshowitems(!showitems);
    // console.log("chicked");
    setshowindex();
  };

  return (
    <div>
      {/* Accordian Header  */}
      <div className=" bg-violet-500 p-4  m-2 shadow-slate-200 rounded-lg font-bold">
        <div
          className="flex justify-between cursor-pointer"
          onClick={ClickHandler}
        >
          <span>
            {data.title}({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>

        {showitems && (
          <List key={data?.itemCards?.card?.info?.id} items={data.itemCards} />
        )}
      </div>
      {/* Accordian Body  */}
    </div>
  );
};

export default ResCatagory;

import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] rounded-lg flex flex-col gap-3 h-[400px] hover:border-2 border-green-400 bg-white p-4 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-2xl font-semibold ">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-green-600 font-bold text-lg">{price}/-</div>
        <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-500 transition-all font-bold"
        onClick={() => {
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          );
        }}
      >
        Add to Dish
      </button>
    </div>
  );
}

export default Card;

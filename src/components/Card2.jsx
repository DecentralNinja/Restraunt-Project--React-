import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] flex bg-white shadow-md rounded-3xl p-2 mt-6">
      <div className="w-[60%] h-full flex bg-white">
        <div className="w-[50%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[50%] h-full p-2 pl-3">
          <div className="font-bold">{name}</div>
          <div className="h-[40px] w-[100px] flex rounded-xl mt-2 shadow-md bg-white border-2 border-green-400">
            <button
              className="h-full w-[35px]  text-green-500 text-1xl flex cursor-pointer justify-center items-center"
              onClick={(item) => {
                qty > 1 ? dispatch(DecrementQty(id)) : 1;
              }}
            >
              -
            </button>
            <div className="h-full w-[35px] text-green-500 flex bg-gray-200 justify-center items-center">
              {qty}
            </div>
            <button
              onClick={() => {
                dispatch(IncrementQty(id));
              }}
              className="h-full w-[35px] text-green-500 text-1xl cursor-pointer flex justify-center items-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col items-end p-3 ">
        <h3 className="font-bold text-green-500 text-[19px]">Rs {price}/-</h3>
        <RiDeleteBin6Line
          className="text-red-500 text-[19px] mt-3 cursor-pointer"
          onClick={() => {
            id;
            dispatch(RemoveItem(id));
          }}
        />
      </div>
    </div>
  );
}

export default Card2;

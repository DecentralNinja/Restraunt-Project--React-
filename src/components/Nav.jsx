import React, { useContext, useEffect } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, cate, setCate, showCart, setshowCart } =
    useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);

  let items = useSelector((state) => state.cart);
  return (
    <>
      <div className="w-full px-5 md:px-8 flex justify-between items-center h-[80px] md:[100px] ">
        <div className="bg-white rounded-md shadow-md w-[50px] h-[50px] md:h-[60px] md:w-[60px] flex items-center justify-center">
          <IoFastFoodSharp className="w-[30px] h-[30px] text-green-600" />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[55%] h-[50px] md:w-[70%] md:h-[60px]   gap-4 bg-white p-5 flex items-center rounded-md shadow-md"
        >
          <FaSearch className="text-green-500 w-[20px] h-[20px]" />
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="outline-none w-[100%] text-[18px]"
            placeholder="Search Items...."
          />
        </form>
        <div
          onClick={() => {
            setshowCart(true);
          }}
          className="bg-white w-[50px] h-[50px] md:h-[60px] cursor-pointer md:w-[60px]  shadow-md rounded-md flex items-center justify-center relative "
        >
          <span className="absolute top-0 right-2 text-green-600 font-bold text-[16px]">
            {items.length}
          </span>
          <FiShoppingBag className="w-[30px] h-[30px] text-green-600" />
        </div>
      </div>
    </>
  );
}

export default Nav;

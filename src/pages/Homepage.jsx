import React, { useContext, useState } from "react";
import { Nav } from "../page";
import { categories } from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../Context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Homepage() {
  let { cate, setCate, input, setInput, showCart, setshowCart } =
    useContext(dataContext);

  function filterCateg(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  let item = useSelector((state) => state.cart);
  let subTotal = item.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 mt-5 w-[100%] px-2">
          {categories.map((item) => {
            return (
              <div
                className="bg-white rounded-md w-[150px] hover:bg-green-200 cursor-pointer transition-all duration-300 h-[150px] flex flex-col items-start px-4 py-5 justify-start"
                onClick={() => filterCateg(item.name)}
              >
                {item.icon}
                <h1 className="text-lg font-semibold mt-5">{item.name}</h1>
              </div>
            );
          })}
        </div>
      )}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center py-8">
        {cate.length > 1 ? (
          cate.map((item) => (
            <Card
              id={item.id}
              name={item.food_name}
              image={item.food_image}
              key={item.id}
              price={item.price}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-green-500 font-semibold text-[20px] mt-5">
            No Dish Found
          </div>
        )}
      </div>

      <div
        className={` w-full md:w-[40vw] flex flex-col items-center  h-[100%] fixed top-0 right-0 bg-white p-6 transition-all duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-600 text-[18px] font-semibold">
            Order Items
          </span>
          <RxCross2
            className="text-green-600 text-[30px] cursor-pointer hover:text-green-800 font-semibold"
            onClick={() => setshowCart(false)}
          />
        </header>
        {item.length > 0 ? (
          <>
            <div
              id="scrollbar"
              className="w-full mt-4 flex flex-col gap-5 h-[380px] overflow-y-auto "
            >
              {item.map((ite) => (
                <Card2
                  name={ite.name}
                  price={ite.price}
                  image={ite.image}
                  id={ite.id}
                  qty={ite.qty}
                />
              ))}
            </div>
            <div className="w-full border-t-2 border-gray-600 border-b-2  mt-3 flex flex-col gap-3 p-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-green-600 font-semibold text-lg">
                  Rs{subTotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md text-gray-600 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-green-600 font-semibold text-lg">
                  Rs{deliveryFee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-green-600 font-semibold text-lg">
                  Rs{taxes}/-
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center px-2 py-2">
              <span className="text-lg text-gray-600 font-semibold">Total</span>
              <span className="text-green-600 font-semibold text-lg">
                Rs{total}/-
              </span>
            </div>
            <button
              className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-500 transition-all font-bold"
              onClick={toast.success("Item Added")}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-green-500 font-semibold text-[20px] mt-5">
            Empty Card
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;

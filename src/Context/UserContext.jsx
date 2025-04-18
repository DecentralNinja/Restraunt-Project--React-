import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();
function UserContext({ children }) {

    let [input, setInput] = useState("")
    let [cate, setCate] = useState(food_items)
    const [showCart, setshowCart] = useState(false)
    let data = {
        input,
        setInput,
        cate,
        setCate,
        showCart, 
        setshowCart
    };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;

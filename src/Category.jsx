import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { MdOutlineLunchDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


export const categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmall className="w-[60px] h-[60px] text-green-600"/>
    }, 
    {
        id: 2,
        name: "Breakfast",
        icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    }, 
    {
        id: 3,
        name: "Soups",
        icon: <TbSoup className="w-[60px] h-[60px] text-green-600"/>
    }, 
    {
        id: 4,
        name: "Pasta",
        icon: <GiNoodles className="w-[60px] h-[60px] text-green-600"/>
    }, 
    {
        id: 5,
        name: "Main Course",
        icon: <MdOutlineLunchDining className="w-[60px] h-[60px] text-green-600"/>
    }, 
    {
        id: 6,
        name: "Pizza",
        icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    }, 
    {
        id: 7,
        name: "Burger",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    }, 
]
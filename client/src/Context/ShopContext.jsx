import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext = createContext();
import { toast } from "react-toastify"
import {useNavigate} from "react-router-dom"

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setsearch] = useState("");
    const [showsearch, setshowsearch] = useState(false);
    const [cart, setcart] = useState({});
    const navigate = useNavigate();

    const addtocart = async (itemId, size) => {
        if (size) {
            let cartData = structuredClone(cart);
            if (cartData[itemId]) {
                if (cartData[itemId][size]) {
                    cartData[itemId][size] += 1;
                }
                else {
                    cartData[itemId][size] = 1;
                }
            }
            else {
                cartData[itemId] = {};
                cartData[itemId][size] = 1;
            }
            setcart(cartData);
        }
        else {
            toast.error("Please Select Product Size ")
        }
    }

    const getcartcount = () => {
        let total = 0;
        for (const items in cart) {
            for (const item in cart[items]) {
                try{
                    if(cart[items][item] > 0){
                        total+= cart[items][item];
                    }
                }catch(error){

                }

            }
        }
        return total;
    }
    useEffect(() => { }, [cart])

    const updatequantity = async (itemId, size , quantity)=>{
       let cartdata = structuredClone(cart);
       cartdata[itemId][size] = quantity;
       setcart(cartdata);
    }

    const getcartamount = ()=>{
        let total = 0;
        for (const items in cart){
            let iteminfo = products.find((product)=> product._id === items);
            for (const item in cart[items]){
                if(cart[items][item] > 0){
                    total += iteminfo.price * cart[items][item];
                }
            }
        }
        return total;
    }

    const value = {
        navigate , getcartamount, updatequantity, cart, addtocart,getcartcount, products, currency, delivery_fee, search, setsearch, showsearch, setshowsearch
       
    }



    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [itemCart, setItemCart] = useState({});

    const addToCart = (itemId) => {
        if (!itemCart[itemId]) {
            setItemCart((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setItemCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setItemCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in itemCart) {
            if (itemCart[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * itemCart[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        itemCart,
        setItemCart,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
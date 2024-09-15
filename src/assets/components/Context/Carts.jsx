import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = (props) => {
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}
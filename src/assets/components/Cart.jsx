import { useContext } from "react";
import { CartContext } from "./Context/Carts";

function Cart() {
    const cart = useContext(CartContext);
   const total = cart.items.reduce((a, b) => a + b.price, 0)
    
    return (
            <div className="text-center"><h1 className="text-2xl p-2 font-medium">Cart</h1>
        <div>
            <div className="text-center list-none">
        {
            cart && cart.items.map((item) => <li>{item.name}- ${item.price}</li>)
        }</div>
            <div><h5 className="font-bold p-2 ">Total Bill: ${total}</h5></div>
            </div>
        </div>
    )
};

export default Cart;
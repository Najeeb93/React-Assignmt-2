import { useContext } from "react";
import { CartContext } from "./Context/Carts";

function Item(props) {
    const cart = useContext(CartContext);

    
    return (
        <div className="w-[100%] flex justify-center mt-4">
        <div>
            <h4 className="text-2xl font-bold">{props.name}</h4>
            <p className="text-3xl p-5">Price: ${props.price}</p>
            <button onClick={() => cart.setItems([...cart.items, {name: props.name, price: props.price}, ])} className="p-3 border-4 rounded-md">Add to Cart</button>
        </div>
        </div>
    )
}


export default Item;
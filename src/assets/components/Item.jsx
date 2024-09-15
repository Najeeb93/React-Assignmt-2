

function Item(props) {
    return (
        <div className="w-[100%] flex justify-center mt-7">
        <div>
            <h4 className="text-4xl font-bold">{props.name}</h4>
            <p className="text-3xl p-6">Price: ${props.price}</p>
            <button className="p-3 border-4 rounded-md">Add to Cart</button>
        </div>
        </div>
    )
}


export default Item;
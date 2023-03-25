export default function ItemCard(props) {
    return (<div className="hover:border-solid hover:border-2 hover:border-yellow-500 bg-neutral-900 rounded-lg w-64 p-2">
        <img className="rounded-lg my-1 ml-2" src={props.src} alt={props.alt} /> 
        <p className="text-white text-center"> {props.title} </p>
        <div className="flex justify-between pr-2 pl-2 text-white border-solid border-2 border-yellow-500 rounded-lg p-0.5 hover:bg-amber-400 hover:text-black">
            <p>${props.price}</p>
            <button>Order</button >
        </div>
    </div>
    );
}
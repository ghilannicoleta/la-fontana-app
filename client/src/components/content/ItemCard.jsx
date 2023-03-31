export default function ItemCard({ item }) {
  return (
    <div className=" w-64 rounded-lg border-2 border-solid border-transparent p-2 hover:border-yellow-500">
      <img className="my-1 rounded-lg" src={item.src} alt={item.alt} />
      <p className="p-2"> {item.title} </p>
      <div className="flex justify-between rounded-lg border-2 border-solid border-yellow-500 p-2 pr-2 pl-2 hover:bg-amber-400 hover:text-black">
        <p>$ {item.price}</p>
        <button type="button">Order</button>
      </div>
    </div>
  );
}

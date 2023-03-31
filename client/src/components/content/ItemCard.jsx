export default function ItemCard({ item }) {
  return (
    <div className="w-64 rounded-lg p-2 hover:border-2 hover:border-solid hover:border-yellow-500">
      <img className="my-1 rounded-lg" src={item.src} alt={item.alt} />
      <p className="text-center text-white"> {item.title} </p>
      <div className="flex justify-between rounded-lg border-2 border-solid border-yellow-500 p-0.5 pr-2 pl-2 text-white hover:bg-amber-400 hover:text-black">
        <p>${item.price}</p>
        <button type="button">Order</button>
      </div>
    </div>
  );
}

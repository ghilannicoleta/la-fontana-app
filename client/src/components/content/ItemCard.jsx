export default function ItemCard({ item }) {
  return (
    <div className=" w-64 rounded-lg border-2 border-solid border-transparent p-2  transition hover:border-colorYellow  hover:delay-100">
      <img className="my-1 rounded-lg" src={item.src} alt={item.title} />
      <p className="p-2"> {item.title} </p>
      <div className="flex justify-between  rounded-lg border-2 border-solid border-colorYellow p-2 pr-2 pl-2 transition hover:bg-colorYellow hover:text-stone hover:delay-100">
        <p>$ {item.price}</p>
        <button type="button">Order</button>
      </div>
    </div>
  );
}

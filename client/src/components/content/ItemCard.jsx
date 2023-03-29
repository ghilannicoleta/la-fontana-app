export default function ItemCard({ src, alt, title, price }) {
  return (
    <div className="w-64 rounded-lg p-2 hover:border-2 hover:border-solid hover:border-yellow-500">
      <img className="my-1 ml-2 rounded-lg" src={src} alt={alt} />
      <p className="text-center text-white"> {title} </p>
      <div className="flex justify-between rounded-lg border-2 border-solid border-yellow-500 p-0.5 pr-2 pl-2 text-white hover:bg-amber-400 hover:text-black">
        <p>${price}</p>
        <button type="button">Order</button>
      </div>
    </div>
  );
}

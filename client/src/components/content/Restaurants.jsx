export default function Restaurants({ city, number, address, hours }) {
  return (
    <div className="border-gray-500 mx-auto w-4/5 rounded-lg border-2 border-gray p-4">
      <div className="grid grid-cols-2">
        <h1 className="underline-offset-6 text-3xl"> {city} </h1>
        <p> &#128222; {number} </p>
        <h2 className="text-yellow"> &#128205; {address} </h2>
        <p> &#128338; {hours} </p>
      </div>
      <div className="grid justify-end">
        <button
          type="button"
          className="rounded-lg border-2 border-solid border-colorYellow p-2 pr-2 pl-2  hover:bg-colorYellow hover:text-stone hover:delay-100"
        >
          BOOK NOW!
        </button>
      </div>
    </div>
  );
}

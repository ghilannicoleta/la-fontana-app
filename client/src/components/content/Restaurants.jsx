export default function Restaurants({ city, number, address, hours }) {
  return (
    <div className="border-gray-500 mx-auto w-4/5 rounded-lg border-2 border-gray p-4 ">
      <div className="grid grid-cols-3">
        <div>
          <h1 className="underline-offset-6 mt-2 text-3xl"> {city} </h1>
          <h2 className="mt-1 text-yellow"> &#128205; {address} </h2>
        </div>
        <div className="grid content-end justify-center gap-2">
          <p className="mt-2"> &#128222; {number} </p>
          <p> &#128338; {hours} </p>
        </div>
        <div className="mt-1.5 grid justify-end gap-2">
          <button
            type="button"
            className="h-[60px] w-[200px] rounded-lg border-2 border-solid border-colorYellow p-2 transition  hover:bg-colorYellow hover:text-stone hover:delay-200"
          >
            BOOK NOW !
          </button>
        </div>
      </div>
    </div>
  );
}

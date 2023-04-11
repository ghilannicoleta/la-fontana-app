import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function Shop() {
  const producstList = [
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3d76892dac0eaf90981e4767187ecd14.jpg",
      title: "Nuggets",
      price: 9.99,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/509a150d3ec0c7a26b3b2965be1aeeba.jpg",
      title: "Chicken fillet",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/6ba3972d4ef53f3bb3f0bd8b766233e3.jpg",
      title: "Potato balls",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/2abc64f1982fde346f0e18225972ab0f.jpg",
      title: "Chicken lasagna",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/4729757d63233687999f596807e83fcd.jpg",
      title: "Beef lasagna",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e88948c695ba13e572b3774fc137cd1f.jpg",
      title: "Chicken cutlet",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/b5f336f1cbdf1b48096fc3718151edc0.jpg",
      title: "Homemade cutlet",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/4729757d63233687999f596807e83fcd.jpg",
      title: "Chicken meatballs",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/563d591b04de9cc1904acf3e7640376b.jpg",
      title: "Chicken sausages",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3589038fa2517a1dce1479f6d1fd72f0.jpg",
      title: "Dye baked",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/895e832513bb6f1b85b17332b182d995.jpg",
      title: "Stuffed pepper with meat",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/585d1404066dc09089440c43a8f211d5.jpg",
      title: "Stuffed pepper with",
      price: 10.28,
    },
  ];

  return (
    <div>
      <div className="mx-auto flex w-5/6 border-b pt-10 pb-4 text-4xl font-semibold">
        Discover our products
      </div>
      <div className="grid grid-cols-2 gap-4 pt-10 sm:grid-cols-5">
        {producstList.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
      <div className="flex justify-center pt-9">
        <Link to="/menu">
          <button
            type="button"
            className="rounded-lg border-2 border-solid border-colorYellow py-3 px-14 text-lg font-bold transition  hover:bg-colorYellow hover:text-stone hover:delay-200"
          >
            BACK TO MENU
          </button>
        </Link>
      </div>
    </div>
  );
}

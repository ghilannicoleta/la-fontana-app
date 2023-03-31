import ItemCard from "./ItemCard";

export default function Content() {
  const arrItemCard = [
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/458d6f79cac9387227ac51300775d91d.jpg",
      alt: "pizza",
      title: "Pizza Margherita",
      price: 12.99,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/be45637985ce751c07c4bd2eeef1574e.jpg",
      alt: "pizza",
      title: "Pizza BBQ",
      price: 12.99,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/c4ef1b6501bc9e4f3fb71a23fd83c41c.jpg",
      alt: "pizza",
      title: "Pizza Capricciosa",
      price: 12.99,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/f494ff3debcec408b7f54a839dc56eef.jpg",
      alt: "pizza",
      title: "Pizza Neapolitan",
      price: 12.99,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/d9d19417a969ec3b40068eeb7fa192c0.jpg",
      alt: "pizza",
      title: "Pizza Fattoria",
      price: 12.99,
    },
  ];

  const arrContentItemCard = [
    {
      title: "Pizza",
    },
    {
      title: "Breakfast",
    },
    {
      title: "Snaks",
    },
    {
      title: "Salads",
    },
    {
      title: "Soups",
    },
    {
      title: "Main Dishes",
    },
    {
      title: " Bakery",
    },
    {
      title: "Dessert",
    },
    {
      title: " Beverages",
    },
    {
      title: "Alcohol",
    },
  ];
  return arrContentItemCard.map((product) => (
    <div className="mx-auto w-4/5">
      <div className="flex justify-between border-b border-gray-500 pb-4 pt-10">
        <div className="text-4xl font-bold">{product.title}</div>
        <a href="replace" className="mt-4"> GO TO MENU {product.title.toUpperCase()}</a>
      </div>
      <div className="flex pt-10">
        {arrItemCard.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  ));
}

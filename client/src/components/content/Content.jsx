import ItemCard from "./ItemCard";

export default function Content() {
  const itemsList = [
    {
      title: "Pizza",
      products: [
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
      ],
    },
    {
      title: "Breakfast",
      products: [
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9095009f478f6326d4fa0a06db12e6fd.jpg",
          alt: "eggs",
          title: "Sandwich Krok-Madam",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3d03584def7cfc5e50b685a256090c6a.jpg",
          alt: "breakfast",
          title: "English Breakfast",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8aa550d27ce60f294c6aaea3d58c37f1.jpg",
          alt: "shakshuka",
          title: "Shakshuka",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/53415d7b1abdc9f16b6f9b62ec1a95d5.jpg",
          alt: "omelette",
          title: "Omelette",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e163869668ebafecee1bbd0d5543afec.jpg",
          alt: "crullers",
          title: "Crullers",
          price: 12.99,
        },
      ],
    },
    {
      title: "Desserts",
      products: [
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e096f3a0e4a4f1d0a34b398cdda342da.jpg",
          alt: "mousse",
          title: "Vegan Pistachio Mousse",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8c4f48473dfd742e9aeab53399683320.jpg",
          alt: "fondant",
          title: "Fondant",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/dd289b0114fe374210d33dddf69d57e7.jpg",
          alt: "cheesecake",
          title: "Caramel cheesecake",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/d934fd0c7f987cedea5b72bf9c03f50a.jpg",
          alt: "tiramisu",
          title: "Tiramisu",
          price: 12.99,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/49d19276396dc896143ce8e6292d7235.jpg",
          alt: "tart",
          title: "Apple tart",
          price: 12.99,
        },
      ],
    },
  ];

  return itemsList.map((product) => (
    <div className="mx-auto w-8/12">
      <div className="border-gray-500 flex justify-between border-b pb-4 pt-10">
        <div className="text-4xl font-bold">{product.title}</div>
        <a href="replace" className="mt-4">
          {" "}
          GO TO MENU {product.title.toUpperCase()}
        </a>
      </div>
      <div className="flex pt-10">
        {product.products.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  ));
}

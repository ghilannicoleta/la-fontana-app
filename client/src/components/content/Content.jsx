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
          price: 12.22,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/be45637985ce751c07c4bd2eeef1574e.jpg",
          alt: "pizza",
          title: "Pizza BBQ",
          price: 15.59,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/c4ef1b6501bc9e4f3fb71a23fd83c41c.jpg",
          alt: "pizza",
          title: "Pizza Capricciosa",
          price: 15.04,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/f494ff3debcec408b7f54a839dc56eef.jpg",
          alt: "pizza",
          title: "Pizza Neapolitan",
          price: 15.04,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/d9d19417a969ec3b40068eeb7fa192c0.jpg",
          alt: "pizza",
          title: "Pizza Fattoria",
          price: 15.59,
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
          price: 8.39,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3d03584def7cfc5e50b685a256090c6a.jpg",
          alt: "breakfast",
          title: "English Breakfast",
          price: 9.49,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8aa550d27ce60f294c6aaea3d58c37f1.jpg",
          alt: "shakshuka",
          title: "Shakshuka",
          price: 10.69,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/53415d7b1abdc9f16b6f9b62ec1a95d5.jpg",
          alt: "omelette",
          title: "Omelette",
          price: 8.84,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e163869668ebafecee1bbd0d5543afec.jpg",
          alt: "crullers",
          title: "Crullers",
          price: 9.39,
        },
      ],
    },
    {
      title: "Dessert",
      products: [
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e096f3a0e4a4f1d0a34b398cdda342da.jpg",
          alt: "mousse",
          title: "Vegan Pistachio Mousse",
          price: 5.57,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8c4f48473dfd742e9aeab53399683320.jpg",
          alt: "fondant",
          title: "Fondant",
          price: 5.79,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/dd289b0114fe374210d33dddf69d57e7.jpg",
          alt: "cheesecake",
          title: "Caramel cheesecake",
          price: 4.29,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/d934fd0c7f987cedea5b72bf9c03f50a.jpg",
          alt: "tiramisu",
          title: "Tiramisu",
          price: 4.57,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/49d19276396dc896143ce8e6292d7235.jpg",
          alt: "tart",
          title: "Apple tart",
          price: 3.39,
        },
      ],
    },
    {
      title: "Starters",
      products: [
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8b82bc37943b3a33aca46a59374cb788.jpg",
          alt: "starters",
          title: "Chicken pate with croutons",
          price: 5.49,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9a9d105937fcfd0744da3a49976d508f.jpg",
          alt: "starters",
          title: "Salmon bruschetta",
          price: 4.95,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/022e17cce84bb9273af9f34faaade736.jpg",
          alt: "starters",
          title: "Baked peppers bruschetta",
          price: 3.02,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/b1509027de39c4cf544d1374631d51e8.jpg",
          alt: "starters",
          title: "Cheese triangles",
          price: 4.12,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/c6c45589a7be0858704d2267d76459a8.jpg",
          alt: "starters",
          title: "Chicken sandwich",
          price: 4.94,
        },
      ],
    },
    {
      title: "Beverages",
      products: [
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/dda783ad6ca58bb4daab0c0f5ca1fdee.jpg",
          alt: "beverages",
          title: "Pomegranate tea",
          price: 3.49,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e5a1dcca3bdceb501376241497370ac5.jpg",
          alt: "beverages",
          title: "Orange fresh",
          price: 4.05,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3d074ae3ffd8b591e3118a26b6bec517.jpg",
          alt: "beverages",
          title: "Apple punch",
          price: 3.02,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/85323931c6a4ce157579e40b96b90203.jpg",
          alt: "beverages",
          title: "Lemonade",
          price: 4.72,
        },
        {
          src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/2c737fbb956ee4dc9eef3c62b8884dee.jpg",
          alt: "beverages",
          title: "Cola cherry",
          price: 3.99,
        },
      ],
    },
  ];

  return itemsList.map((product) => (
    <div className="mx-auto w-5/6">
      <div className="flex justify-between border-b pb-4 pt-10">
        <div className="text-4xl font-bold">{product.title}</div>
        <a href="replace" className="mt-4">
          {" "}
          GO TO MENU {product.title.toUpperCase()}
        </a>
      </div>
      <div className="grid grid-cols-5 gap-1 pt-10">
        {product.products.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  ));
}

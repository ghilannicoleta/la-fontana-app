export default function FooterContent() {
  const footerList = [
    {
      title: "Company",
      items: ["Career", "Feedback", "Contacts"],
    },
    {
      title: "Company",
      items: ["Gift Card", "Corporate clients", "Kids parties", "Banquets"],
    },
    {
      title: "Delivery",
      items: ["London", "Manchenster", "Liverpool", "Comrat", "Birmingham"],
    },
  ];
  return (
    <div className="flex justify-around border-t-4 border-colorYellow pt-20">
      {footerList.map((item) => (
        <div className="className='w-1/6 pt-6 ">
          <div className="text-colorYellow">{item.title}</div>
          <ul className="py-6">
            {item.items.map((el) => (
              <li className="text-amber-400 cursor-pointer  transition hover:text-colorYellow hover:delay-100">
                {el}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

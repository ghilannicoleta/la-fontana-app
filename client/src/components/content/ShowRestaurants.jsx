import Restaurants from "./Restaurants";

export default function ShowRestaurants() {
  const infoRestaurats = [
    {
      city: "London",
      number: "0784 967 53",
      address: "10 Teape Close",
      hours: "9:00-23:00",
    },
    {
      city: "Manchester",
      number: "0614 967 531",
      address: "3 Westbourne Terrace, Hyde Park Gardens",
      hours: "10:00-22:30",
    },
    {
      city: "Birmingham",
      number: "0614 967 531",
      address: "25-29 Coventry St",
      hours: "10:00-22:30",
    },
    {
      city: "London",
      number: "0784 967 53",
      address: "10 Teape Close",
      hours: "9:00-23:00",
    },
    {
      city: "Liverpool",
      number: "0614 967 531",
      address: "182 Grays Inn Rd",
      hours: "10:00-22:30",
    },
    {
      city: "Manchester",
      number: "0614 967 531",
      address: "4 St James's Market",
      hours: "10:00-22:3",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3">
      <h1 className="flex justify-center text-4xl font-bold pt-16 mb-12">
        Our restaurants
      </h1>
      {infoRestaurats.map((el) => (
        <Restaurants
          city={el.city}
          number={el.number}
          address={el.address}
          hours={el.hours}
        />
      ))}
    </div>
  );
}

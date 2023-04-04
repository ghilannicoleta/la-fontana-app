import Restaurants from "./Restaurants";

export default function ShowRestaurants() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <Restaurants
        city="London"
        number="0784 967 531"
        address="10 Teape Close"
        hours="9:00-23:00"
      />
      <Restaurants
        city="Manchester"
        number="0614 967 531"
        address="3 Westbourne Terrace, Hyde Park Gardens"
        hours="10:00-22:30"
      />
      <Restaurants
        city="Birmingham"
        number="0614 967 531"
        address="25-29 Coventry St"
        hours="10:00-22:30"
      />
      <Restaurants
        city="London"
        number="0614 967 531"
        address="69-73 St John St"
        hours="10:00-22:30"
      />
      <Restaurants
        city="Liverpool"
        number="0614 967 531"
        address="182 Grays Inn Rd"
        hours="10:00-22:30"
      />
      <Restaurants
        city="Manchester"
        number="0614 967 531"
        address="4 St James's Market"
        hours="10:00-22:30"
      />
    </div>
  );
}

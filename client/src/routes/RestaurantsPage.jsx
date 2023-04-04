import ShowRestaurants from "../components/content/ShowRestaurants";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  return (
    <div className="App">
      <Navigation />
      <ShowRestaurants />
      <Footer />
    </div>
  );
}

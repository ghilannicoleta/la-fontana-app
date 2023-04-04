import Shop from "../components/content/Shop";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  return (
    <div className="App">
      <Navigation />
      <Shop />
      <Footer />
    </div>
  );
}

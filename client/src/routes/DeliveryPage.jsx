import Footer from "../components/footer/Footer";
import Delivery from "../components/navigation/Delivery";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  return (
    <div className="App">
      <Navigation />
      <Delivery />
      <Footer />
    </div>
  );
}

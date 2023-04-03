import Content from "../components/content/Content";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

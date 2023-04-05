import Footer from "../components/footer/Footer";
import Login from "../components/navigation/Login";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  return (
    <div className="App">
      <Navigation />
      <Login />
      <Footer />
    </div>
  );
}

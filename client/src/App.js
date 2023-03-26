import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

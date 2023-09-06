import Footer from "./Components/Navbar/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import CategorySection from "./Pages/CategorySection/CategorySection";
import Hero from "./Pages/Hero/Hero";
import NoticesSection from "./Pages/NoticesSection/NoticesSection";
import Text from "./utilitis/Text/Text";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <NoticesSection />
      <Footer />
    </>
  );
}

export default App;

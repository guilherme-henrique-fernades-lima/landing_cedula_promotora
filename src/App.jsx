//Page sections
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import CallToAction from "./pages/CallToAction";
import Mission from "./pages/Mission";
import Policy from "./pages/Policy";

// import FloatButtonToTop from "../src/components/FloatButtonToTop";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Mission />
      <Services />
      <CallToAction />
      <Contact />
      <Policy />
      <Footer />
      {/* <FloatButtonToTop /> */}
    </>
  );
}

export default App;

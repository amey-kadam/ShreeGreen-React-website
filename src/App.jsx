// App.jsx
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import Features from './components/sections/Features'
import GlobalPresence from './components/sections/GlobalPresence'


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      {/* <GlobalPresence/> */}
      <Footer />
    </div>
  );
};

export default App;


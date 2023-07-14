import './App.css';
import TheHeader from '@/components/header/TheHeader';
import HeroSection from '@/components/hero/HeroSection';
import TheFooter from '@/components/footer/TheFooter';
import Blog from '@/components/blog/Blog';
import VisionAndTeam from '@/components/visionAndTeam/VisionAndTeam';
import Faq from './components/faq/Faq';

function App() {
  return (
    <>
      <TheHeader />
      <main id="main-content" className="inert-target">
        <HeroSection h1Text="AfroTreff 13.0" pText="July 14, 2023" linkText="Register" />
        {/* <Button text="button" /> */}
        <Faq />
        <VisionAndTeam />
        <Blog />
      </main>
      <TheFooter />
    </>
  );
}

export default App;

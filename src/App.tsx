import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/sections/Header';
import Banner from '@/components/sections/Banner';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import MouseFollower from '@/components/ui/MouseFollower';
import SiteLoader from '@/components/ui/SiteLoader';
import Message from '@/components/ui/Message';
import Projects from '@/components/sections/Projects';

function App() {
  return (
    <ThemeProvider>
      <MouseFollower/>
      <SiteLoader/>
      <Message/>
      <Header />
      <Banner/>
      <Services/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

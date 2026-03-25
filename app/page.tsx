import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Signature from './components/Signature';
import Collection from './components/Collection';
import SensoryNotes from './components/SensoryNotes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Story />
      {/* <Signature /> */}
      <Collection />
      {/* <SensoryNotes /> */}
      {/* <Gallery /> */}
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

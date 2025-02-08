import heroBg from './assets/images/heroBg.png';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <>
      {/* Hero Section */}
      <div
        className='bg-no-repeat bg-center w-full'
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", }}
      >
        <Hero />
      </div>

      <Features />
    </>
  );
}

export default App;

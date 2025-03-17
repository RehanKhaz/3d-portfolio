import Header from "./sections/Header"
import Hero from "./sections/Hero";
import About from './sections/About'
import Projects from "./sections/Projects";
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Education from "./sections/Education";

const App = () => {
  return (

    <main className="min-h-dvh w-screen overflow-x-hidden p-0 m-0 ">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
)
}

export default App;
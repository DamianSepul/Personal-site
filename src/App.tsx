import { RootLayout } from "./layouts/RootLayout";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <RootLayout>
      <Hero />
      <Projects />
      <Contact />
    </RootLayout>
  );
}

export default App;

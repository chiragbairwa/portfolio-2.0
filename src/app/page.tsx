import Welcome from "./components/welcome"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"

export default function Home() {
  return (
    <main>
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

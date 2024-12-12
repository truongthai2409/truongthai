import { Fragment } from "react"
import "./i18n/i18n"
import Heads from "./layout/Heads"
import Home from "./layout/Home"
import About from "./layout/About"
import Projects from "./layout/Projects"
import Contact from "./layout/Contact"
import Footer from "./layout/Footer"
import Translate from "./compoments/Translate"

function App() {
  return (
    <Fragment>
      <Heads/>
      <Translate/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default App

import { Fragment } from "react"
import Heads from "./compoments/Heads"
import Home from "./compoments/Home"
import About from "./compoments/About"
import Projects from "./compoments/Projects"
import Contact from "./compoments/Contact"
import Footer from "./compoments/Footer"

function App() {
  return (
    <Fragment>
      <Heads></Heads>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </Fragment>
  )
}

export default App

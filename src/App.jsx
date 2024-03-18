import { Fragment } from "react"
import Heads from "./layout/Heads"
import Home from "./layout/Home"
import About from "./layout/About"
import Projects from "./layout/Projects"
import Contact from "./layout/Contact"
import Footer from "./layout/Footer"

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

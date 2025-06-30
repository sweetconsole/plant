import {Header, Intro, Collection, AboutUs, Products, Reviews, Subscribe, Follow, Footer} from "./components"
import { Container } from "./components/ui"
import "./App.scss"

const App = () => {
  return (
    <Container>
      <Header />

      <main>
        <Intro />
        <Collection />
        <AboutUs />
        <Products />
        <Reviews />
        <Subscribe />
        <Follow />
      </main>

      <Footer />
    </Container>
  )
}

export default App

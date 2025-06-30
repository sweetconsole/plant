import Header from "./components/Header/Header.js"
import Intro from "./components/Intro/Intro";
import Collection from "./components/Collection/Collection";
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Subscribe from "./components/Subscribe/Subscribe";
import Follow from "./components/Follow/Follow";
import Footer from "./components/Footer/Footer.js"
import Container from "./components/ui/Container/Container";
import './App.scss'

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

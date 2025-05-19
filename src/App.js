import './App.css'
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Home from './pages/Home.js'

const App = () => {
   return (
     <div className="App Container">
       <Header />
       <Home />
       <Footer />
     </div>
   )
}

export default App

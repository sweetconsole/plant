import './App.css'
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home.js'

const App = () => {
   return (
      <Router >
         <div className="App Container">
            <Header />

            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />

            <Footer />
         </div>
      </Router>
   )
}

export default App

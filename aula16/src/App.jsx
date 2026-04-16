
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sobre from './routes/Sobre'
import Nav from './components/Nav'
import Home from './routes/Home'
import Erro from './routes/Erro'
import Footer from './components/Footer'

function App() {


  return (
    <Router>
      <Nav/>
        <Routes>
              <Route path="*" element={<Erro/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
        <Footer/>
    </Router>
  )

}

export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Portfolio from './components/page/Portfolio'

function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

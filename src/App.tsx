import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import FirstPage from "./pages/FirstPage"
import SecondPage from "./pages/SecondPage"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/second" element={<SecondPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

import Navbar from "./components/navbar"
import { publicRouter } from "./routers"
import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {
          publicRouter.map((route, index) => (
            <Route key={index} 
                   path={route.path} 
                   element={route.elememt} 
            />
          ))
        }
      </Routes>
    </Router> 
  )
}
export default App

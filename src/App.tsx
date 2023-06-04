import { Route, Routes, Link } from "react-router-dom"
import { Home } from "./components/Home"
import { Page2 } from "./components/Page2"
import { Page3 } from "./components/Page3"

export function App() {
  return (
    <>
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page2">Page2</Link></li>
            <li><Link to="/page3">Page3</Link></li>
          </ul>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>    
  )
}

export default App

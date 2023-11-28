import LandingPage from "./pages/LandingPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter basename='/drawing-to-you-web'>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App

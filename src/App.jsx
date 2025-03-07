import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage"
=======
=======
>>>>>>> Stashed changes
import GalleryPage from "./pages/GalleryPage"


>>>>>>> Stashed changes


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/gallery" element={<GalleryPage/>} />
          

=======
          <Route path="/gallery" element={<GalleryPage/>} />
          
>>>>>>> Stashed changes
=======
          <Route path="/gallery" element={<GalleryPage/>} />
          
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </>
  )
}

export default App;

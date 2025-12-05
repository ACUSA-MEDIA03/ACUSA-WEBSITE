import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PublicationPage from "./pages/PublicationsPage";
import DetailPage from "./pages/DetailPage"

import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage"





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/publication" element={<PublicationPage/>} />
          <Route path="/publication/:title/:id" element={<DetailPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

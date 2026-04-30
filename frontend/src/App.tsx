import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import TattooPage from "./pages/TattooPage";
import GalleryPage from "./pages/GalleryPage"
import FAQPage from "./pages/FAQPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="tattoo" element={<TattooPage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="contact" element={<ContactPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App

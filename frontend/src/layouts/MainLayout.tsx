import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

function MainLayout() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
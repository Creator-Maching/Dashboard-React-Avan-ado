import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import wallpaper from "./assets/images/wallpaper.jpg";

export default function Layout() {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <Nav />

      <main className="flex-1 p-4" style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

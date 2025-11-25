import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Chuva from "./pages/Chuva";
import Ondas from "./pages/Ondas";
import Temperatura from "./pages/Temperatura";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="chuva" element={<Chuva />} />
          <Route path="ondas" element={<Ondas />} />
          <Route path="temperatura" element={<Temperatura />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

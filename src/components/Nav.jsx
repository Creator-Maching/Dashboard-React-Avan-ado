import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="p-4 flex justify-center gap-10 bg-blue-600 text-white">
      <Link
        className="font-bold bg-red-600 hover:bg-black/20 px-3 py-1 rounded transition"
        to="/chuva"
      >
        Chuva
      </Link>

      <Link
        className="font-bold bg-red-600 hover:bg-black/20 px-3 py-1 rounded transition"
        to="/ondas"
      >
        Ondas
      </Link>

      <Link
        className="font-bold bg-red-600 hover:bg-black/20 px-3 py-1 rounded transition"
        to="/temperatura"
      >
        Temperatura
      </Link>
    </nav>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";

export default function Ondas() {
  const [waveData, setWaveData] = useState([]);
  const [loading, setLoading] = useState(true);

  const LAT = -22.9068;
  const LNG = -43.1729;
  const STORMGLASS_KEY =
    "3633ad28-c9eb-11f0-a148-0242ac130003-3633addc-c9eb-11f0-a148-0242ac130003";

  useEffect(() => {
    async function fetchWaves() {
      try {
        const res = await axios.get(
          `https://api.stormglass.io/v2/weather/point?lat=${LAT}&lng=${LNG}&params=waveHeight`,
          { headers: { Authorization: STORMGLASS_KEY } }
        );

        const waves = res.data.hours
          .filter(item => item.waveHeight && item.waveHeight.noaa !== undefined)
          .map(item => ({
            time: item.time.replace("T", " ").slice(0, 16),
            wave: item.waveHeight.noaa,
          }));

        // salva o dado novo
        localStorage.setItem("waveData", JSON.stringify(waves));

        setWaveData(waves);
        setLoading(false);

      } catch (error) {
        console.warn("Erro na API — carregando último dado salvo:", error);

        // tenta carregar salva
        const saved = localStorage.getItem("waveData");
        if (saved) {
          setWaveData(JSON.parse(saved));
        }

        setLoading(false);
      }
    }

    fetchWaves();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-blue-800 bg-white p-2 rounded">
        Altura das Ondas (m)
      </h3>

      <div className="bg-white shadow rounded p-4">

        {loading ? (
          <p className="text-center text-gray-500">
            Carregando dados das ondas...
          </p>
        ) : waveData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={waveData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="wave"
                stroke="#00bcd4"
                name="Ondas"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">
            Nenhum dado disponível no momento. A API pode estar atualizando.
          </p>
        )}

      </div>
    </div>
  );
}

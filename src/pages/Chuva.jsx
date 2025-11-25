import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";

export default function Chuva() {
  const [dailyRainData, setDailyRainData] = useState([]);
  const [loading, setLoading] = useState(true);

  const CITY = "Rio de Janeiro";
  const WEATHER_API_KEY = "7499b14d506b4600fda9fa15553df01f";

  useEffect(() => {
    async function fetchRain() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const processed = res.data.list.map((item) => ({
          time: item.dt_txt,
          rain: item.rain ? item.rain["3h"] : 0,
        }));

        const dailyRain = processed.reduce((acc, cur) => {
          const day = cur.time.split(" ")[0];
          acc[day] = (acc[day] || 0) + cur.rain;
          return acc;
        }, {});

        const rainArray = Object.keys(dailyRain).map((day) => ({
          day,
          rain: dailyRain[day],
        }));

        // salva para fallback futuro
        localStorage.setItem("rainData", JSON.stringify(rainArray));

        setDailyRainData(rainArray);
        setLoading(false);

      } catch (err) {
        console.warn("Erro na API, usando dados salvos:", err);

        const saved = localStorage.getItem("rainData");
        if (saved) {
          setDailyRainData(JSON.parse(saved));
        }

        setLoading(false);
      }
    }

    fetchRain();
  }, []);

  return (
    <main className="container p-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-blue-800 bg-white p-2 rounded">
        Pluviosidade Diária (mm) - {CITY}
      </h3>

      <div className="bg-white shadow rounded p-4">
        {loading ? (
          <p className="text-center text-gray-500">
            Carregando dados de chuva...
          </p>
        ) : dailyRainData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyRainData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="rain"
                stroke="#2196f3"
                name="Chuva"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">
            Nenhum dado disponível. A API pode estar atualizando.
          </p>
        )}
      </div>
    </main>
  );
}

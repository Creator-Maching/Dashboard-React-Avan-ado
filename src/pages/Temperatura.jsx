import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";

export default function Temperatura() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const CITY = "Rio de Janeiro";
  const WEATHER_API_KEY = "7499b14d506b4600fda9fa15553df01f";

  useEffect(() => {
    async function fetchTemp() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const processed = res.data.list.map((item) => ({
          time: item.dt_txt,
          temp: item.main.temp,
        }));

        // salva no localStorage
        localStorage.setItem("temperatureData", JSON.stringify(processed));

        setWeatherData(processed);
        setLoading(false);

      } catch (error) {
        console.warn("Erro na API — usando dados salvos:", error);

        const saved = localStorage.getItem("temperatureData");

        if (saved) {
          setWeatherData(JSON.parse(saved));
        }

        setLoading(false);
      }
    }

    fetchTemp();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-blue-800 bg-white p-2 rounded">
        Temperatura (°C) — {CITY}
      </h3>

      <div className="bg-white shadow rounded p-4">

        {loading ? (
          <p className="text-gray-500 text-center">
            Carregando dados de temperatura...
          </p>
        ) : weatherData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#ff7300"
                name="Temperatura"
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

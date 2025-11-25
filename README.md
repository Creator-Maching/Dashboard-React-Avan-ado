
<img width="1340" height="609" alt="Captura de tela 2025-11-25 162640" src="https://github.com/user-attachments/assets/f7d69388-a22c-4348-8103-4ec60d4a3177" />

🌦️ Dashboard de Monitoramento Ambiental
React • APIs Reais • Gráficos com Recharts • TailwindCSS • Vite

Este projeto é um dashboard moderno para visualização de dados ambientais, como:

🌧️ Pluviosidade (chuva diária)

🌊 Altura das ondas

🌡️ Temperatura

Os dados são consumidos de APIs reais, processados e exibidos em gráficos Recharts dentro de uma interface leve construída com React + Tailwind + Vite.


📌 Funcionalidades

Dashboard com navegação por rotas (React Router DOM)

Consumo das APIs:

OpenWeatherMap (chuva e temperatura)

StormGlass (ondas)

Gráficos responsivos com Recharts

Layout fixo com Header, Navbar e Footer

Páginas individuais:

/chuva

/ondas

/temperatura

Tratamento de dados antes de exibir no gráfico

Tela de fallback quando os dados ainda não carregaram


| Tecnologia             | Uso                     |
| ---------------------- | ----------------------- |
| **React 19**           | Interface e componentes |
| **React Router DOM 7** | Rotas e navegação       |
| **Axios**              | Requisições HTTP        |
| **Recharts**           | Gráficos                |
| **TailwindCSS**        | Estilização             |
| **Vite**               | Ambiente e build        |
| **GitHub Pages**       | Deploy                  |

Deploy com GitHub Pages + Vite

🔑 APIs utilizadas
🌧️ OpenWeatherMap

Docs: https://openweathermap.org/api

🌊 StormGlass

Docs: https://stormglass.io


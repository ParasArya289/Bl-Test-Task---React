import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import "./World.css";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const worldstats = [
  {
    value: "311,677",
    country: "USA",
  },
  {
    value: "130,759",
    country: "Spain",
  },
  {
    value: "124,566",
    country: "Italy",
  },
  {
    value: "111,700",
    country: "Germany",
  },
  {
    value: "123,129",
    country: "France",
  },
  {
    value: "81,402",
    country: "China",
  },
  {
    value: "76,102",
    country: "Iran",
  },
];
const World = () => {
  return (
    <div className="world">
      <h2>World Map</h2>
      <div className="worldContainer">
        <div className="worldstats">
          <div className="value">
            {worldstats.map(({ value }) => (
              <div key={value}>{value}</div>
            ))}
          </div>
          <div className="country">
            {worldstats.map(({ country }) => (
              <div key={country}>{country}</div>
            ))}
          </div>
        </div>
        <div className="piechart">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
              <Pie
                data={data}
                cx={60}
                cy={60}
                innerRadius={50}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="totalcase">
            1,218,087
            <div>Total Case</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;

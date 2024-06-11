import React from "react";
import "./Stats.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Today",
    Death: 4000,
    Recover: 2400,
    amt: 2400,
  },
  {
    name: "Today",
    Death: 3000,
    Recover: 1398,
    amt: 2210,
  },
  {
    name: "Today",
    Death: 2000,
    Recover: 9800,
    amt: 2290,
  },
  {
    name: "Today",
    Death: 2780,
    Recover: 3908,
    amt: 2000,
  },
  {
    name: "Today",
    Death: 1890,
    Recover: 4800,
    amt: 2181,
  },
  {
    name: "Today",
    Death: 2390,
    Recover: 3800,
    amt: 2500,
  },
  {
    name: "Today",
    Death: 3490,
    Recover: 4300,
    amt: 2100,
  },
];

const Stats = ({ data1 }) => {
  return (
    <div className="bar">
      <div className="statsinfo">
        Covid-19 Statistics
        <div>as of 05 April 2020, 09:41 PM</div>
      </div>
      <div className="barchart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Recover"
              fill="#BBDB8B"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Death"
              fill="#E74338"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;

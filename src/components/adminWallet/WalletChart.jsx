import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const WalletChart = ({ data }) => {
  return (
    <div className="h-[500px] mt-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <XAxis dataKey="course" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="purchases"
            stroke="#98eac8"
            strokeWidth={5}
            name="Purchases"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletChart;

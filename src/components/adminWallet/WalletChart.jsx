import React from "react";
import {
  CartesianGrid,
  Label,
  // Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const WalletChart = ({ data, x, y, name, xTitle, yTitle, position }) => {
  return (
    <div className="h-[500px] mt-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 45,
            right: 30,
            left: 20,
            bottom: 45,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={x}>
            <Label
              value={xTitle}
              angle={0}
              position="insideBottomRight"
              offset="-18"
            />
          </XAxis>
          <YAxis>
            <Label value={yTitle} angle={0} position={position} offset="-44" />
          </YAxis>
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey={y}
            stroke="#98eac8"
            strokeWidth={5}
            name={name}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletChart;

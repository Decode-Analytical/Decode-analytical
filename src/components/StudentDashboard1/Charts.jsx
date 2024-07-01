import React from 'react'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid,Legend,DefaultLegendContent, ReferenceLine, Tooltip, Area } from 'recharts'

const Charts = () => {
    const data = [
        {
          "Name": "Jan",
          "Visited": 3500,
          "pv": 8800,
          "amt": 3200
        },
        {
          "name": "Feb",
          "Visited": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Mar",
          "Visited": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Apr",
          "Visited": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "May",
          "Visited": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Jun",
          "Visited": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "Name": "Jul ",
          "Visited": 3450,
          "pv": 4900,
          "amt": 2400
        },
        {
          "name": "Sep",
          "Visited": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
          "Name": "Oct ",
          "Visited": 2700,
          "pv": 4800,
          "amt": 2500
        },
        {
          "Name": "Nov ",
          "Visited": 4500,
          "pv": 4200,
          "amt": 2300
        },
        {
          "Name": "Dec ",
          "Visited": 3500,
          "pv": 4000,
          "amt": 2500
        },
      ]
      // console.log(data);
    return (
        <>
            <div className='bg-white bg-shadow rounded-md p-4 w-[100%]' style={{ width: '100%', height: '500px' }}>
                <ResponsiveContainer  width="100%" height="100%">
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorVisited" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <ReferenceLine x="Apr" stroke="red" label="97%" />
                        <Area type="monotone" dataKey="Visited" stroke="#8884d8" fillOpacity={1} fill="url(#colorVisited)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>

            </div>
        </>
    )
}

export default Charts

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';

interface UsageChartProps {
  data: ChartDataPoint[];
}

const UsageChart: React.FC<UsageChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: -30,
          bottom: -10,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#9ca3af" axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" axisLine={false} tickLine={false} />
        <Tooltip
            contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '12px',
            }}
        />
        <Area type="monotone" dataKey="puffs" stroke="#007BFF" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default UsageChart;

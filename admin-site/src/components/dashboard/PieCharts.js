import React from 'react';
import * as Chart from 'recharts';

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

export default function PieCharts() {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <Chart.ResponsiveContainer>
                <Chart.PieChart>
                    <Chart.Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Chart.Tooltip />
                </Chart.PieChart>
            </Chart.ResponsiveContainer>
        </div>
    );
}

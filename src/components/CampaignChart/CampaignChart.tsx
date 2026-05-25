'use client'

import {
    AreaChart, Area, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import './CampaignChart.scss'

const data = [
    { name: 'Mon', sent: 45, replied: 30 },
    { name: 'Tue', sent: 100, replied: 60 },
    { name: 'Wed', sent: 125, replied: 70 },
    { name: 'Thu', sent: 135, replied: 78 },
    { name: 'Fri', sent: 110, replied: 75 },
    { name: 'Sat', sent: 90, replied: 65 },
    { name: 'Sun', sent: 88, replied: 62 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="chart-tooltip">
                <p className="chart-tooltip__label">{label}</p>
                <p className="chart-tooltip__val green">Sent: <strong>{payload[1].value}</strong></p>
                <p className="chart-tooltip__val purple">Replied: <strong>{payload[0].value}</strong></p>
            </div>
        )
    }
    return null
}

const CampaignChart = () => {
    return (
        <div className="chart-card">
            <h3>Campaign Performance</h3>
            <p className="sub">Last 7 days outreach activity</p>

            {/* ✅ ResponsiveContainer replaces fixed width={500} */}
            {/* Replace your ResponsiveContainer with this */}
            <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="gradSent" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00e5a0" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#00e5a0" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="gradReplied" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6c63ff" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#6c63ff" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="var(--chart-line)"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                            ticks={[0, 35, 70, 105, 140]}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: 'var(--chart-line)', strokeWidth: 2, strokeDasharray: '4 4' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="replied"
                            stroke="#6c63ff"
                            strokeWidth={2}
                            fill="url(#gradReplied)"
                            dot={false}
                            activeDot={{ r: 6, stroke: 'var(--bg-card)', strokeWidth: 2 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="sent"
                            stroke="#00e5a0"
                            strokeWidth={2}
                            fill="url(#gradSent)"
                            dot={false}
                            activeDot={{ r: 6, stroke: 'var(--bg-card)', strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default CampaignChart
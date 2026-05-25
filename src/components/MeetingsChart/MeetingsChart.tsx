'use client'

import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, Cell,
    Rectangle, ResponsiveContainer
} from 'recharts'
import './MeetingsChart.scss'

const data = [
    { name: 'Mon', meetings: 2 },
    { name: 'Tue', meetings: 4 },
    { name: 'Wed', meetings: 3 },
    { name: 'Thu', meetings: 6 },
    { name: 'Fri', meetings: 5 },
    { name: 'Sat', meetings: 3.5 },
    { name: 'Sun', meetings: 5 },
]

const MeetingsTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="chart-tooltip">
                <p className="chart-tooltip__label">{label}</p>
                <p className="chart-tooltip__val">
                    Meetings: <strong>{payload[0].value}</strong>
                </p>
            </div>
        )
    }
    return null
}

const CustomCursor = (props: any) => {
    const { x, width, height } = props
    const isDark = document.body.getAttribute('data-theme') === 'dark'

    return (
        <Rectangle
            x={x}
            y={0}
            width={width}
            height={height}
            fill={isDark ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0.07)'}
            radius={[6, 6, 0, 0]}
        />
    )
}

const MeetingsChart = () => {
    return (
        // ✅ outer wrapper has NO overflow:hidden — chart needs to breathe
        <div className="chart-card meetings-chart-card">
            <h3>Meetings Booked</h3>
            <p className="sub">AI-generated meetings per day</p>

            {/* ✅ explicit pixel height so ResponsiveContainer has something to measure */}
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={data}
                        barSize={22}
                        barCategoryGap="35%"
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="rgba(255,255,255,0.06)"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#8b8fa8', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#8b8fa8', fontSize: 12 }}
                            ticks={[0, 2, 4, 6, 8]}
                        />
                        <Tooltip
                            content={<MeetingsTooltip />}
                            cursor={<CustomCursor />}
                        />
                        <Bar dataKey="meetings" radius={[6, 6, 0, 0]}>
                            {data.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={index % 2 === 0 ? '#00e5a0' : '#6c63ff'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default MeetingsChart
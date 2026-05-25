import type { LucideIcon } from 'lucide-react'
import './StatCard.scss'

interface StatCardProps {
    title: string
    value: string
    trend: string
    isPositive: boolean
    Icon: LucideIcon
    iconBg: string
}

const StatCard = ({ title, value, trend, isPositive, Icon, iconBg }: StatCardProps) => (
    <div className="stat-card">
        <div className="stat-card__header">
            <span className="stat-card__title">{title}</span>
            <div className="stat-card__icon-box" style={{ backgroundColor: iconBg }}>
                <Icon size={18} />
            </div>
        </div>
        <div className="stat-card__body">
            <h2 className="stat-card__value">{value}</h2>
            <span className={`stat-card__trend ${isPositive ? 'positive' : 'negative'}`}>
                {trend}
            </span>
        </div>
    </div>
)

export default StatCard
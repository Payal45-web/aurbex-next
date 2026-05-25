import { Bot, Download, UserPlus, Settings, BarChart3, MessageSquare, Users, Calendar } from 'lucide-react'
import StatCard from '@/components/StatCard/StatCard'
import './AIAgents.scss'

const AgentCard = ({ name, role, campaign, leads, replied, meetings, replyRate }: any) => (
    <div className="agent-card">
        <div className="agent-card__header">
            <div className="header-left">
                <div className="bot-icon-bg"><Bot size={20} /></div>
                <div className="info">
                    <div className="name-row">
                        <h4>{name}</h4>
                        <span className="status-badge">ACTIVE</span>
                    </div>
                    <p className="role">{role}</p>
                    <p className="campaign">Campaign: {campaign}</p>
                </div>
            </div>
            <Settings size={18} className="settings-icon" />
        </div>

        <div className="agent-card__stats-grid">
            <div className="mini-stat">
                <span className="label"><Users size={12} /> Leads</span>
                <span className="value">{leads}</span>
            </div>
            <div className="mini-stat">
                <span className="label"><MessageSquare size={12} /> Replied</span>
                <span className="value">{replied}</span>
            </div>
            <div className="mini-stat">
                <span className="label"><Calendar size={12} /> Meetings</span>
                <span className="value">{meetings}</span>
            </div>
        </div>

        <div className="agent-card__progress">
            <div className="progress-label">
                <span><BarChart3 size={12} /> Reply Rate</span>
                <span>{replyRate}%</span>
            </div>
            <div className="progress-bar">
                <div className="fill" style={{ width: `${replyRate}%` }}></div>
            </div>
        </div>

        <div className="agent-card__actions">
            <button className="btn-view">View Performance</button>
            <button className="btn-edit">Edit Settings</button>
        </div>
    </div>
)

const AIAgents = () => {
    return (
        <div className="ai-agents-page">
            <header className="ai-agents-page__header">
                <div className="title-area">
                    <h1>AI Agents</h1>
                    <p>Manage your AI-powered lead database with intelligent engagement scoring</p>
                </div>
                <div className="action-area">
                    <button className="btn-secondary"><Download size={16} /> Export CSV</button>
                    <button className="btn-primary"><UserPlus size={16} /> Import Leads</button>
                </div>
            </header>

            <div className="ai-agents-page__stats">
                <StatCard title="Active Agents" value="3" trend="Running 24/7" isPositive={true} Icon={Bot} iconBg="rgba(108, 99, 255, 0.1)" />
                <StatCard title="Leads Handled" value="1,160" trend="+12% this week" isPositive={true} Icon={Bot} iconBg="rgba(108, 99, 255, 0.1)" />
                <StatCard title="Messages Sent" value="387" trend="+23% today" isPositive={true} Icon={Bot} iconBg="rgba(108, 99, 255, 0.1)" />
                <StatCard title="Meetings Booked" value="41" trend="This month" isPositive={true} Icon={Bot} iconBg="rgba(108, 99, 255, 0.1)" />
            </div>

            <div className="agents-grid">
                <AgentCard name="Sarah AI" role="Email Specialist" campaign="SaaS Founders - US" leads="450" replied="89" meetings="12" replyRate={19.43} />
                <AgentCard name="Marcus AI" role="LinkedIn Automation" campaign="EdTech Decision Makers" leads="320" replied="67" meetings="8" replyRate={24.43} />
                <AgentCard name="Emma AI" role="Multi-Channel Outreach" campaign="SaaS Founders - US" leads="450" replied="89" meetings="12" replyRate={19.43} />
                <AgentCard name="David AI" role="Lead Qualifier" campaign="EdTech Decision Makers" leads="320" replied="67" meetings="8" replyRate={24.43} />
            </div>
        </div>
    )
}

export default AIAgents
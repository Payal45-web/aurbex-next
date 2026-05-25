import { Target, Calendar, MessageSquare, BarChart3, ArrowUpRight } from 'lucide-react'
import StatCard from '@/components/StatCard/StatCard'
import CampaignChart from '@/components/CampaignChart/CampaignChart'
import MeetingsChart from '@/components/MeetingsChart/MeetingsChart'
import './Dashboard.scss'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <div className="dashboard__titles">
                    <h1>AI GTM Command Center</h1>
                    <p>Your autonomous AI agents are running your outbound pipeline 24/7</p>
                </div>
                <button className="dashboard__create-btn">
                    <span>Create new Campaigns</span>
                    <div className="icon-box"><ArrowUpRight size={16} /></div>
                </button>
            </header>

            <div className="dashboard__stat-grid">
                <StatCard title="Active Campaigns" value="12" trend="+3 this week" isPositive={true} Icon={Target} iconBg="rgba(108, 99, 255, 0.1)" />
                <StatCard title="Meetings Booked" value="47" trend="+12 this week" isPositive={true} Icon={Calendar} iconBg="rgba(0, 229, 160, 0.1)" />
                <StatCard title="Reply Rate" value="34%" trend="+5% vs last week" isPositive={true} Icon={MessageSquare} iconBg="rgba(0, 229, 160, 0.1)" />
                <StatCard title="Pipeline Value" value="$284K" trend="+$45K this week" isPositive={true} Icon={BarChart3} iconBg="rgba(255, 167, 38, 0.1)" />
            </div>

            <div className="dashboard__charts-grid">
                <CampaignChart />
                <MeetingsChart />
            </div>

            <div className="dashboard__bottom-grid">
                <div className="dashboard__card active-campaigns">
                    <div className="card-header">
                        <h3>Active Campaigns</h3>
                        <span className="view-all">View All</span>
                    </div>
                    <div className="campaign-item">
                        <div className="item-info">
                            <h4>SaaS Founders - US</h4>
                            <div className="stats">
                                <span>Leads: <strong>450</strong></span>
                                <span>Replied: <strong>89</strong></span>
                                <span>Meetings: <strong>12</strong></span>
                            </div>
                        </div>
                        <span className="status-tag">ACTIVE</span>
                    </div>
                    <div className="campaign-item">
                        <div className="item-info">
                            <h4>EdTech Decision Makers</h4>
                            <div className="stats">
                                <span>Leads: <strong>450</strong></span>
                                <span>Replied: <strong>89</strong></span>
                                <span>Meetings: <strong>12</strong></span>
                            </div>
                        </div>
                        <span className="status-tag">ACTIVE</span>
                    </div>
                </div>

                <div className="dashboard__card agent-activity">
                    <div className="card-header">
                        <h3>AI Agent Activity</h3>
                        <span className="live-tag">● Live</span>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon purple"><Calendar size={14} /></div>
                        <div className="activity-text">
                            <h4>Sarah AI</h4>
                            <p>Booked 4 meetings today</p>
                        </div>
                        <span className="activity-time">2 min ago</span>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon green"><MessageSquare size={14} /></div>
                        <div className="activity-text">
                            <h4>Marcus AI</h4>
                            <p>Generated 300 personalized messages</p>
                        </div>
                        <span className="activity-time">15 min ago</span>
                    </div>
                    <div className="activity-item">
                        <div className="activity-icon blue"><MessageSquare size={14} /></div>
                        <div className="activity-text">
                            <h4>Emma AI</h4>
                            <p>Connected with 12 new leads on LinkedIn</p>
                        </div>
                        <span className="activity-time">26 min ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
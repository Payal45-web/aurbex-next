import { Search, Mail, Star, Cast, MoreHorizontal } from 'lucide-react'
import StatCard from '@/components/StatCard/StatCard'
import './Leads.scss'

const Leads = () => {
    const leads = [
        { name: 'Sarah Johnson', company: 'TechFlow Inc.', aiScore: '9.8', source: 'SaaS Founders - US', status: 'Replied', lastActivity: '2 hours ago', color: '#6c63ff' },
        { name: 'Michael Chen', company: 'DataSync Solutions', aiScore: '9.8', source: 'EdTech Decision Makers', status: 'Meeting Booked', lastActivity: '2 hours ago', color: '#a855f7' },
        { name: 'Emily Rodriguez', company: 'CloudScale', aiScore: '9.8', source: 'Enterprise CTOs', status: 'Engaged', lastActivity: '2 hours ago', color: '#ec4899' },
        { name: 'David Kim', company: 'InnovateSaaS', aiScore: '9.8', source: 'SaaS Founders - US', status: 'Opened', lastActivity: '2 hours ago', color: '#3b82f6' },
    ]

    return (
        <div className="leads-page">
            <header className="leads-page__header">
                <div className="title-area">
                    <h1>Lead Management</h1>
                    <p>AI-powered lead database with intelligent engagement scoring</p>
                </div>
                <div className="action-area">
                    <button className="btn-export">Export CSV</button>
                    <button className="btn-import">Import Leads</button>
                </div>
            </header>

            <div className="leads-page__stats">
                <StatCard title="Total Leads" value="2418" trend="+284 this week" isPositive={true} Icon={Cast} iconBg="rgba(108, 99, 255, 0.1)" />
                <StatCard title="Engaged" value="423" trend="15.7% rate" isPositive={true} Icon={Cast} iconBg="rgba(0, 229, 160, 0.1)" />
                <StatCard title="Replied" value="189" trend="6.6% rate" isPositive={true} Icon={Cast} iconBg="rgba(0, 229, 160, 0.1)" />
                <StatCard title="Meetings Booked" value="47" trend="24.9% conv" isPositive={true} Icon={Cast} iconBg="rgba(255, 167, 38, 0.1)" />
            </div>

            <div className="leads-table-container">
                <div className="table-controls">
                    <div className="search-box">
                        <Search size={18} />
                        <input type="text" placeholder="Search" />
                    </div>
                    <button className="btn-export">Export CSV</button>
                </div>

                <table className="leads-table">
                    <thead>
                        <tr>
                            <th>Lead Name</th>
                            <th>Company</th>
                            <th>Channels</th>
                            <th>AI Score</th>
                            <th>Campaign Source</th>
                            <th>Current Status</th>
                            <th>Last Activity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead, index) => (
                            <tr key={index}>
                                <td className="lead-name-cell">
                                    <div className="avatar" style={{ backgroundColor: lead.color }}>
                                        {lead.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span>{lead.name}</span>
                                </td>
                                <td>{lead.company}</td>
                                <td className="channels-cell"><Mail size={14} /></td>
                                <td>
                                    <div className="ai-score-badge">
                                        <Star size={12} fill="#ffa726" color="#ffa726" />
                                        <span>{lead.aiScore}</span>
                                    </div>
                                </td>
                                <td>{lead.source}</td>
                                <td>
                                    <span className={`status-text ${lead.status.toLowerCase().replace(' ', '-')}`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td>{lead.lastActivity}</td>
                                <td><MoreHorizontal size={18} className="action-icon" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leads
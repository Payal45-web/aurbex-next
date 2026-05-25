import { Calendar, Video, Settings, Clock, BarChart3, CheckSquare, Percent } from 'lucide-react'
import StatCard from '@/components/StatCard/StatCard'
import './Meetings.scss'

const upcomingMeetingsData = [
    { id: 1, title: 'Product Demo - TechFlow', status: 'CONFIRMED', host: 'Sarah Johnson', company: 'TechFlow Inc', time: 'Today, 2:00 PM', platform: 'Zoom', duration: '30 min', bookedBy: 'Sarah AI Agent' },
    { id: 2, title: 'Product Demo - TechFlow', status: 'CONFIRMED', host: 'Sarah Johnson', company: 'TechFlow Inc', time: 'Today, 2:00 PM', platform: 'Zoom', duration: '30 min', bookedBy: 'Sarah AI Agent' },
    { id: 3, title: 'Product Demo - TechFlow', status: 'CONFIRMED', host: 'Sarah Johnson', company: 'TechFlow Inc', time: 'Today, 2:00 PM', platform: 'Zoom', duration: '30 min', bookedBy: 'Sarah AI Agent' },
]

const Meetings = () => {
    return (
        <div className="meetings-page">
            <header className="meetings-page__header">
                <div className="title-area">
                    <h1>Meeting Scheduler</h1>
                    <p>Optimize your sales pipeline with AI-driven booking automation</p>
                </div>
                <button className="btn-settings">
                    <Settings size={16} /><span>Schedule Settings</span>
                </button>
            </header>

            <div className="meetings-page__stats">
                <StatCard title="Total Meetings" value="47" trend="+23% vs last month" isPositive={true} Icon={CheckSquare} iconBg="rgba(108, 99, 255, 0.1)" />
                <StatCard title="Scheduled Today" value="12" trend="3 remaining" isPositive={true} Icon={Clock} iconBg="rgba(0, 229, 160, 0.1)" />
                <StatCard title="Avg. Show Rate" value="87%" trend="Top 5% of users" isPositive={true} Icon={Percent} iconBg="rgba(168, 85, 247, 0.1)" />
                <StatCard title="Sales Conv." value="34%" trend="+4% this week" isPositive={true} Icon={BarChart3} iconBg="rgba(245, 158, 11, 0.1)" />
            </div>

            <div className="integrations-panel">
                <div className="integrations-panel__header">
                    <div className="icon-wrapper"><Calendar size={18} /></div>
                    <div>
                        <h3>Calendar Integrations</h3>
                        <p>AI agents automatically book meetings based on your real-time availability</p>
                    </div>
                </div>
                <div className="integrations-grid">
                    <div className="integration-card connected">
                        <Calendar size={20} className="brand-icon google" />
                        <div className="info">
                            <span className="info__name">Google Calendar</span>
                            <span className="info__status">Fully Connected</span>
                        </div>
                    </div>
                    <div className="integration-card connected">
                        <Video size={20} className="brand-icon zoom" />
                        <div className="info">
                            <span className="info__name">Zoom Video</span>
                            <span className="info__status">Auto-link generation</span>
                        </div>
                    </div>
                    <div className="integration-card connected">
                        <Video size={20} className="brand-icon meet" />
                        <div className="info">
                            <span className="info__name">Google Meet</span>
                            <span className="info__status">Active Workspace</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="upcoming-section">
                <h2>Upcoming Meetings</h2>
                <div className="meetings-list">
                    {upcomingMeetingsData.map((meeting) => (
                        <div key={meeting.id} className="meeting-row-card">
                            <div className="meeting-row-card__details">
                                <div className="title-line">
                                    <h3>{meeting.title}</h3>
                                    <span className="status-tag">{meeting.status}</span>
                                </div>
                                <div className="host-line">
                                    <span>{meeting.host} • {meeting.company}</span>
                                </div>
                                <div className="meta-line">
                                    <span className="meta-item"><Calendar size={14} /> {meeting.time}</span>
                                    <span className="meta-item"><Video size={14} /> {meeting.platform}</span>
                                    <span className="meta-item"><Clock size={14} /> {meeting.duration}</span>
                                </div>
                                <div className="agent-line">
                                    Booked by <span className="agent-name">{meeting.bookedBy}</span>
                                </div>
                            </div>
                            <div className="meeting-row-card__actions">
                                <button className="btn-secondary">Reschedule</button>
                                <button className="btn-secondary">Cancel</button>
                                <button className="btn-primary">Join Call</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Meetings
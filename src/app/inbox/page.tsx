'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send, Sparkles, Edit3, CheckCircle2, Clock, ThumbsUp } from 'lucide-react'
import StatCard from '@/components/StatCard/StatCard'
import './Inbox.scss'

const LinkedinIcon = ({ size = 14, className = "" }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
)
const conversationData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        company: 'TechFlow Inc',
        snippet: `Thanks for reaching out! I'd be interested...`, // Fixed with backticks
        sentiment: 'POSITIVE',
        time: '2h ago',
        type: 'email'
    },
    {
        id: 2,
        name: 'Michael Chen',
        company: 'TechFlow Inc',
        snippet: `Thanks for reaching out! I'd be interested...`, // Fixed with backticks
        sentiment: 'POSITIVE',
        time: '4h ago',
        type: 'linkedin'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        company: 'TechFlow Inc',
        snippet: `Thanks for reaching out! I'd be interested...`, // Fixed with backticks
        sentiment: 'NEUTRAL',
        time: '1d ago',
        type: 'email'
    },
    {
        id: 4,
        name: 'David Kim',
        company: 'TechFlow Inc',
        snippet: `Thanks for reaching out! I'd be interested...`, // Fixed with backticks
        sentiment: 'NEGATIVE',
        time: '2d ago',
        type: 'linkedin'
    },
]

const Inbox = () => {
    const [selectedId, setSelectedId] = useState(1)
    const [activeFilter, setActiveFilter] = useState('all')
    const [messageText, setMessageText] = useState('')

    const activeChat = conversationData.find(c => c.id === selectedId) || conversationData[0]

    return (
        <div className="inbox-page">
            <header className="inbox-page__header">
                <div className="title-area">
                    <h1>Multi-Channel Inbox</h1>
                    <p>Unified engagement center with AI-powered personalized suggestions</p>
                </div>
            </header>

            <div className="inbox-page__stats">
                <StatCard title="Unread" value="12" trend="Require attention" isPositive={false} Icon={Mail} iconBg="rgba(108, 99, 255, 0.1)" />
                <StatCard title="Sentiment" value="67%" trend="+5% positive" isPositive={true} Icon={ThumbsUp} iconBg="rgba(0, 229, 160, 0.1)" />
                <StatCard title="Avg Reply" value="2.4h" trend="System speed" isPositive={true} Icon={Clock} iconBg="rgba(168, 85, 247, 0.1)" />
                <StatCard title="AI Handled" value="45" trend="Autonomous replies" isPositive={true} Icon={CheckCircle2} iconBg="rgba(245, 158, 11, 0.1)" />
            </div>

            <div className="inbox-workspace">
                <div className="inbox-sidebar">
                    <div className="channel-filters">
                        <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
                        <button className={`filter-btn ${activeFilter === 'email' ? 'active' : ''}`} onClick={() => setActiveFilter('email')}><Mail size={14} /></button>
                        <button className={`filter-btn ${activeFilter === 'linkedin' ? 'active' : ''}`} onClick={() => setActiveFilter('linkedin')}><LinkedinIcon size={14} /></button>
                        <button className={`filter-btn ${activeFilter === 'chat' ? 'active' : ''}`} onClick={() => setActiveFilter('chat')}><MessageSquare size={14} /></button>
                    </div>

                    <div className="threads-container">
                        {conversationData
                            .filter(item => activeFilter === 'all' || item.type === activeFilter)
                            .map((thread) => (
                                <div
                                    key={thread.id}
                                    className={`thread-item ${selectedId === thread.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedId(thread.id)}
                                >
                                    <div className="thread-item__meta">
                                        <div className="identity">
                                            {thread.type === 'email'
                                                ? <Mail size={12} className="channel-icon" />
                                                : <LinkedinIcon size={12} className="channel-icon" />}
                                            <span className="name">{thread.name}</span>
                                        </div>
                                    </div>
                                    <span className="company">{thread.company}</span>
                                    <p className="snippet">{thread.snippet}</p>
                                    <span className={`sentiment-badge ${thread.sentiment.toLowerCase()}`}>
                                        {thread.sentiment}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="chat-window">
                    <div className="chat-window__header">
                        <div>
                            <h4>{activeChat.name}</h4>
                            <p>Decision Maker at DataSync Solutions</p>
                        </div>
                    </div>

                    <div className="chat-stream">
                        <div className="chat-bubble incoming">
                            <div className="chat-bubble__content">
                                <p>Thanks for reaching out! I'd be interested in learning more about your automated systems.</p>
                            </div>
                            <span className="timestamp">{activeChat.name} • {activeChat.time}</span>
                        </div>

                        <div className="ai-suggestion-box">
                            <div className="ai-suggestion-box__header">
                                <Sparkles size={14} className="sparkle" />
                                <span>AI-Suggested Reply</span>
                            </div>
                            <p className="ai-suggestion-box__body">
                                That&apos;s great to hear, {activeChat.name.split(' ')[0]}! I&apos;d love to show you how we&apos;ve helped similar companies scale operations...
                            </p>
                            <div className="ai-suggestion-box__actions">
                                <button className="btn-use-reply" onClick={() => setMessageText(`That's great to hear, ${activeChat.name.split(' ')[0]}! I'd love to show you how we've helped similar companies scale operations...`)}>
                                    Use this reply
                                </button>
                                <button className="btn-edit-reply">
                                    <Edit3 size={12} /><span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="chat-input-area">
                        <textarea
                            placeholder="Type your message..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />
                        <div className="chat-input-area__actions">
                            <button className="btn-personalize">
                                <Sparkles size={14} /><span>Personalize with AI</span>
                            </button>
                            <button className="btn-send">
                                <span>Send reply</span><Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox
'use client'

import { useState } from 'react'
import {
    Sparkles, ArrowUpRight, Edit2, Rocket,
    Users, Search, Mail, Target, MapPin,
} from 'lucide-react'
import CampaignSidebar from './CampaignSidebar'
import './Campaigns.scss'

const Campaigns = () => {
    const [campaignDescription, setCampaignDescription] = useState('')

    return (
        <div className="campaigns-container">
            <header className="campaigns-header">
                <div className="title-row">
                    <Sparkles size={28} className="sparkle-icon" />
                    <h1>Natural Language Campaign Builder</h1>
                </div>
                <p>Describe your campaign in simple words and let AI build your entire outbound strategy.</p>
            </header>

            <div className="campaigns-layout">
                <div className="campaigns-main-content">
                    <div className="campaign-card main-input">
                        <h3>Describe your campaign</h3>
                        <p className="sub-text">Tell AI what you want to achieve, your target audience, and preferred channels.</p>
                        <textarea
                            placeholder="e.g. Create a LinkedIn + Email campaign targeting SaaS founders."
                            value={campaignDescription}
                            onChange={(e) => setCampaignDescription(e.target.value)}
                        />
                        <div className="card-footer">
                            <button className="btn-outline">Advanced Options</button>
                            <button className="btn-gradient">
                                <span>Generate Campaign</span>
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="preview-section">
                        <div className="preview-section__header">
                            <div className="label-group">
                                <h3 className="highlight-title">Campaign Preview</h3>
                                <span className="status-tag">
                                    <span className="dot">●</span> Status Tag: Ready
                                </span>
                            </div>
                            <div className="action-group">
                                <button className="btn-action-small">
                                    <Edit2 size={14} /><span>Edit</span>
                                </button>
                                <button className="btn-launch-primary">
                                    <Rocket size={14} /><span>Launch Campaign</span>
                                </button>
                            </div>
                        </div>

                        <div className="preview-cards-container">
                            <div className="preview-card">
                                <div className="preview-card__icon icon-orange"><Users size={20} /></div>
                                <div className="preview-card__content">
                                    <div className="content-top">
                                        <h4>Lead Filters</h4>
                                        <span className="view-link">View</span>
                                    </div>
                                    <p>AI has defined your ideal prospect filters</p>
                                    <div className="pill-row">
                                        <div className="pill"><Target size={12} /> Industry: SaaS</div>
                                        <div className="pill"><MapPin size={12} /> Location: United States</div>
                                        <div className="pill"><Users size={12} /> Company Size: 10-200</div>
                                    </div>
                                </div>
                            </div>

                            <div className="preview-card">
                                <div className="preview-card__icon icon-green"><Search size={20} /></div>
                                <div className="preview-card__content">
                                    <div className="content-top">
                                        <h4>Sales Navigator Search</h4>
                                        <span className="view-link">View</span>
                                    </div>
                                    <p>Optimized search query generated</p>
                                    <div className="success-text">1.2K+ potential leads found</div>
                                </div>
                            </div>

                            <div className="preview-card">
                                <div className="preview-card__icon icon-purple"><Mail size={20} /></div>
                                <div className="preview-card__content">
                                    <div className="content-top">
                                        <h4>Message sequences</h4>
                                        <span className="view-link">View</span>
                                    </div>
                                    <p>3-step LinkedIn outreach sequence</p>
                                    <div className="pill-row">
                                        <div className="pill">Connection request</div>
                                        <div className="pill">Follow-up message</div>
                                        <div className="pill">Value pitch</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="campaigns-sidebar-column">
                    <CampaignSidebar />
                </div>
            </div>
        </div>
    )
}

export default Campaigns
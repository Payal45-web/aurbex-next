import { CheckCircle2, Zap } from 'lucide-react'
import './CampaignSidebar.scss'

const CampaignSidebar = () => {
    const steps = [
        "Understanding your goals",
        "Identifying target audience",
        "Building lead filters",
        "Creating Sales Navigator search",
        "Creating Sales Navigator search",
        "Crafting message sequences",
        "Generating email sequence"
    ]

    return (
        <aside className="campaign-status">
            <div className="campaign-status__visual">
                <div className="ring-outer"></div>
                <div className="ring-inner"></div>
                <div className="orb-glow"></div>
            </div>
            <h3 className="campaign-status__title">
                Analyzing and generating your campaign...
            </h3>
            <ul className="campaign-status__list">
                {steps.map((step, index) => (
                    <li key={index} className="status-item">
                        <CheckCircle2 size={18} className="check-icon" />
                        <span>{step}</span>
                    </li>
                ))}
            </ul>
            <div className="campaign-status__footer">
                <div className="data-pill">
                    <Zap size={14} className="bolt-icon" fill="currentColor" />
                    <span>Based on 50M+ data signals</span>
                </div>
            </div>
        </aside>
    )
}

export default CampaignSidebar
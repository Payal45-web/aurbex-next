'use client'

import { useState } from 'react'
import { Sparkles, ArrowUpRight } from 'lucide-react'
import './AIStratergy.scss'

const AIStrategy = () => {
    const [goal, setGoal] = useState('')

    return (
        <div className="ai-strategy">
            <header className="ai-strategy__header">
                <div className="title-row">
                    <Sparkles className="sparkle-icon" size={28} />
                    <h1>AI Strategy Generator</h1>
                </div>
                <p>Describe your goals and let AI architect your Go-To-Market engine</p>
            </header>

            <div className="ai-strategy__content">
                <div className="strategy-card main-input">
                    <h3>What are your primary sales & growth goals?</h3>
                    <textarea
                        placeholder="e.g. I want to target US SaaS founders and sell AI automation services"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                    <button className="generate-btn">
                        <span>Generate GTM Strategy</span>
                        <ArrowUpRight size={18} />
                    </button>
                </div>

                <div className="ai-strategy__secondary">
                    <div className="strategy-card empty-state"></div>
                    <div className="strategy-card powered-by">
                        <h4>POWERED BY AURBEX AI</h4>
                        <p>Our models analyze 50M+ data points to find the highest converting path for your specific niche.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIStrategy
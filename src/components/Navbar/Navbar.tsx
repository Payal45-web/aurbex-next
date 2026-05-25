'use client'

import { useState, useEffect } from 'react'
import { Search, Sun, Moon, Bell, Zap, Menu } from 'lucide-react'
import './Navbar.scss'

interface NavbarProps {
    onMenuClick: () => void
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <button className="navbar__hamburger" onClick={onMenuClick}>
                    <Menu size={20} />
                </button>
                <div className="navbar__logo">
                    <div className="navbar__logo-icon">
                        <Zap size={18} fill="white" />
                    </div>
                    <span className="navbar__logo-text">Aurbex</span>
                </div>
            </div>

            <div className="navbar__search">
                <Search className="navbar__search-icon" size={16} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="navbar__search-input"
                />
            </div>

            <div className="navbar__actions">
                <button className="navbar__icon-btn search-mobile-btn">
                    <Search size={20} />
                </button>
                <button
                    className="navbar__icon-btn"
                    onClick={() => setIsDark(prev => !prev)}
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className="navbar__icon-btn hide-mobile">
                    <Bell size={20} />
                </button>
                <div className="navbar__divider hide-mobile" />
                <div className="navbar__user">
                    <div className="navbar__user-info hide-mobile">
                        <span className="navbar__user-name">Jone Deo</span>
                        <span className="navbar__user-role">Admin</span>
                    </div>
                    <img
                        src="https://i.pravatar.cc/38?img=12"
                        alt="User"
                        className="navbar__user-avatar"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
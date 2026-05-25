'use client'

import {
    LayoutDashboard, BrainCircuit, Megaphone, Users, Bot, Inbox,
    Calendar, Compass, Share2, Database, ListTree, BarChart3,
    Plug2, Users2, CreditCard, Settings, ChevronLeft,
    ChevronRight, Sparkles, ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import './Sidebar.scss'

const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/' },
    { name: 'AI Strategy', icon: <BrainCircuit size={18} />, path: '/ai-strategy' },
    { name: 'Campaigns', icon: <Megaphone size={18} />, path: '/campaigns' },
    { name: 'Leads', icon: <Users size={18} />, path: '/leads' },
    { name: 'AI Agents', icon: <Bot size={18} />, path: '/ai-agents' },
    { name: 'Inbox', icon: <Inbox size={18} />, path: '/inbox' },
    { name: 'Meetings', icon: <Calendar size={18} />, path: '/meetings' },
    { name: 'Sales Navigator', icon: <Compass size={18} />, path: '/sales-navigator' },
    { name: 'LinkedIn Accounts', icon: <Share2 size={18} />, path: '/linkedin-accounts' },
    { name: 'Knowledge Base', icon: <Database size={18} />, path: '/knowledge-base' },
    { name: 'Sequences', icon: <ListTree size={18} />, path: '/sequences' },
    { name: 'Analytics', icon: <BarChart3 size={18} />, path: '/analytics' },
    { name: 'Integrations', icon: <Plug2 size={18} />, path: '/integrations' },
    { name: 'Team', icon: <Users2 size={18} />, path: '/team' },
    { name: 'Billing', icon: <CreditCard size={18} />, path: '/billing' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/settings' },
]

interface SidebarProps {
    isCollapsed: boolean
    setIsCollapsed: (val: boolean) => void
    isMobileOpen: boolean
    setIsMobileOpen: (val: boolean) => void
}

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }: SidebarProps) => {
    const pathname = usePathname()   // ← replaces useLocation()
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        // Set initial width
        setWindowWidth(window.innerWidth)

        const handleResize = () => {
            const w = window.innerWidth
            setWindowWidth(w)
            if (w <= 1024 && w > 768) {
                setIsCollapsed(true)
            } else if (w > 1024) {
                setIsCollapsed(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [setIsCollapsed])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false)
    }, [pathname, setIsMobileOpen])

    const isMobile = windowWidth <= 768
    const isTablet = windowWidth > 768 && windowWidth <= 1024

    const sidebarClass = [
        'sidebar',
        (isCollapsed || isTablet) ? 'collapsed' : '',
        isMobile && isMobileOpen ? 'mobile-open' : '',
        isMobile && !isMobileOpen ? 'mobile-hidden' : '',
    ].filter(Boolean).join(' ')

    const showText = !isCollapsed && !isTablet

    return (
        <>
            {isMobile && isMobileOpen && (
                <div className="sidebar__overlay" onClick={() => setIsMobileOpen(false)} />
            )}

            <aside className={sidebarClass}>
                {!isMobile && (
                    <button className="sidebar__toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
                        {isCollapsed || isTablet ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
                    </button>
                )}

                <div className="sidebar__menu">
                    {menuItems.map((item) => {
                        // Active check — replaces NavLink's isActive
                        const isActive = pathname === item.path

                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`sidebar__item ${isActive ? 'active' : ''}`}
                                onClick={() => setIsMobileOpen(false)}
                            >
                                <span className="sidebar__icon">{item.icon}</span>
                                {(showText || isMobile) && (
                                    <span className="sidebar__text">{item.name}</span>
                                )}
                            </Link>
                        )
                    })}
                </div>

                {showText && (
                    <div className="sidebar__footer">
                        <div className="sidebar__admin-card">
                            <button className="sidebar__admin-btn">
                                <div className="sidebar__admin-label">
                                    <Sparkles size={14} className="sparkle" />
                                    <span>Super Admin</span>
                                </div>
                                <div className="sidebar__admin-arrow">
                                    <ArrowUpRight size={16} />
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </>
    )
}

export default Sidebar
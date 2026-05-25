'use client'

import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className={`app-layout ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <Navbar onMenuClick={() => setIsMobileOpen(!isMobileOpen)} />
            <Sidebar
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />
            <main className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
                {children}
            </main>
        </div>
    )
}
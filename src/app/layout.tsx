import type { Metadata } from 'next'
import AppShell from '../components/AppShell/AppShell'
import '../styles/main.scss'
import '../styles/App.scss'

export const metadata: Metadata = {
    title: 'Aurbex',
    description: 'AI GTM Command Center',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AppShell>
                    {children}
                </AppShell>
            </body>
        </html>
    )
}
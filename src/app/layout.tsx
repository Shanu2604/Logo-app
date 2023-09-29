import './globals.css'
import CustomSidebar from '../components/CustomSidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logo App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomSidebar/>
        {children}
      </body>
    </html>
  )
}
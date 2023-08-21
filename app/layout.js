import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Samadhan Enterprise Human resource',
  description: 'Human capital stuff',
  keywords: ['human resource', "HR Management", "Samadhan Enterprise", "Human Resources", "HR Solutions", "human capital"  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

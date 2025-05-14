'use client'

import { UploadCloud, FileSearch, Wallet } from 'lucide-react'
import Section from '../section'
import HowItWorksFeatures from '../HowItWorksFeatures'
// import Features from './features-vertical'

const data = [
  {
    id: 1,
    title: '1. Upload Your License',
    content:
      'Start by uploading the details of your unused software license. It only takes a few seconds and no technical skills required.',
    image: '/4860763.jpg',
    icon: <UploadCloud className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: '2. Get Instant Valuation',
    content:
      'Our intelligent pricing engine instantly evaluates your license and gives you a competitive resale offer.',
    image: '/19197293.jpg',
    icon: <FileSearch className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: '3. Get Paid Fast',
    content:
      'Accept the offer and receive your payment within 24 hours - directly to your preferred payout method.',
    image: '/623131.png',
    icon: <Wallet className="size-6 text-primary" />,
  },
]

export default function HowItWorks() {
  return (
    <Section title="How It Works" subtitle="Sell Smarter in Just 3 Steps">
      <HowItWorksFeatures data={data} />
    </Section>
  )
}
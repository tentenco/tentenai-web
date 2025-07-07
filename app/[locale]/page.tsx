import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TentenAI - AI Solutions That Transform Your Business',
  description: 'Partner with TentenAI to unlock the power of artificial intelligence and drive innovation across your organization. Offering Generative AI, Machine Learning, Computer Vision, and more.',
  keywords: 'AI development, machine learning, generative AI, computer vision, NLP, data engineering, AI consulting',
}

export default function HomePage() {
  return <PageContent />
}
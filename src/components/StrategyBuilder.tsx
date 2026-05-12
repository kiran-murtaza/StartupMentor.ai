import { useState } from 'react'

interface StrategySection {
  title: string
  content: string
}

export default function StrategyBuilder() {
  const [companyName, setCompanyName] = useState('')
  const [industry, setIndustry] = useState('')
  const [uniqueValue, setUniqueValue] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [strategy, setStrategy] = useState<StrategySection[] | null>(null)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!companyName.trim()) return

    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setStrategy([
        {
          title: 'Executive Summary',
          content: `${companyName} is positioned to revolutionize the ${industry} by ${uniqueValue}. Our strategic approach focuses on rapid market penetration and sustainable growth.`
        },
        {
          title: 'Market Analysis',
          content: 'The market shows strong growth potential with increasing adoption of innovative solutions. Competitive landscape analysis reveals clear opportunities for differentiation.'
        },
        {
          title: 'Value Proposition',
          content: `${uniqueValue} Our unique selling point sets us apart from competitors and creates significant customer value.`
        },
        {
          title: 'Revenue Model',
          content: 'Multi-tiered pricing strategy targeting both enterprise and SMB segments. Expected revenue growth of 150% YoY in the first three years.'
        },
        {
          title: 'Go-to-Market Strategy',
          content: 'Phased approach: Partner with industry leaders, build community, launch marketing campaigns, and scale through strategic partnerships.'
        },
        {
          title: '18-Month Roadmap',
          content: 'Months 1-6: Product refinement and beta launch. Months 7-12: Market expansion and customer acquisition. Months 13-18: Scale operations and plan Series A.'
        }
      ])
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Business Strategy Builder</h1>
        <p className="text-gray-600">Generate a comprehensive business strategy powered by AI</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="card lg:col-span-1">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Your company name"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="input-field"
              >
                <option>Select an industry</option>
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>E-commerce</option>
                <option>Education</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unique Value Proposition
              </label>
              <textarea
                value={uniqueValue}
                onChange={(e) => setUniqueValue(e.target.value)}
                placeholder="What makes your business unique?"
                rows={4}
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating || !companyName.trim()}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Generate Strategy'}
            </button>
          </form>
        </div>

        {strategy && (
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Business Strategy</h2>

            {strategy.map((section, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}

            <button className="btn-secondary w-full mt-6">Export as PDF</button>
          </div>
        )}
      </div>
    </section>
  )
}

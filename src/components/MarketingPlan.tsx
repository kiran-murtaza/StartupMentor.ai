import { useState } from 'react'

interface MarketingChannel {
  channel: string
  budget: number
  expectedReach: number
  expectedConversion: number
}

export default function MarketingPlan() {
  const [productName, setProductName] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [budget, setBudget] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [plan, setPlan] = useState<MarketingChannel[] | null>(null)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!productName.trim()) return

    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      const totalBudget = parseInt(budget) || 50000
      setPlan([
        {
          channel: 'Social Media Ads',
          budget: totalBudget * 0.3,
          expectedReach: 50000,
          expectedConversion: 3.5
        },
        {
          channel: 'Content Marketing',
          budget: totalBudget * 0.25,
          expectedReach: 30000,
          expectedConversion: 2.8
        },
        {
          channel: 'Email Campaigns',
          budget: totalBudget * 0.15,
          expectedReach: 10000,
          expectedConversion: 5.2
        },
        {
          channel: 'Influencer Partnerships',
          budget: totalBudget * 0.2,
          expectedReach: 100000,
          expectedConversion: 2.1
        },
        {
          channel: 'Paid Search',
          budget: totalBudget * 0.1,
          expectedReach: 25000,
          expectedConversion: 4.5
        }
      ])
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketing Plan Creator</h1>
        <p className="text-gray-600">Design a tailored marketing strategy for your business</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="card lg:col-span-1">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product/Service Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="What are you marketing?"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <textarea
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Describe your ideal customer..."
                rows={3}
                className="input-field resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marketing Budget ($)
              </label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="50000"
                className="input-field"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating || !productName.trim()}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Creating Plan...' : 'Create Marketing Plan'}
            </button>
          </form>
        </div>

        {plan && (
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Marketing Plan</h2>

            {plan.map((channel, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{channel.channel}</h3>
                  <span className="text-primary-600 font-bold">${channel.budget.toLocaleString()}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Expected Reach</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {(channel.expectedReach / 1000).toFixed(1)}K
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Conv. Rate</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {channel.expectedConversion.toFixed(1)}%
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Est. Conversions: <strong>{Math.round(channel.expectedReach * channel.expectedConversion / 100)}</strong>
                  </p>
                </div>
              </div>
            ))}

            <div className="card bg-gradient-to-r from-primary-50 to-accent-50 border-l-4 border-primary-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Budget</p>
                  <p className="text-2xl font-bold text-primary-600">
                    ${plan.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Expected Reach</p>
                  <p className="text-2xl font-bold text-primary-600">
                    {(plan.reduce((sum, c) => sum + c.expectedReach, 0) / 1000).toFixed(0)}K
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-secondary w-full">Export Plan</button>
          </div>
        )}
      </div>
    </section>
  )
}

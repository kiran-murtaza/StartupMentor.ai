import { useState } from 'react'

interface ValidationResult {
  category: string
  score: number
  feedback: string
}

export default function IdeasValidator() {
  const [ideaTitle, setIdeaTitle] = useState('')
  const [ideaDescription, setIdeaDescription] = useState('')
  const [targetMarket, setTargetMarket] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<ValidationResult[] | null>(null)

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!ideaTitle.trim()) return

    setIsAnalyzing(true)
    // Simulate API call
    setTimeout(() => {
      setResults([
        { category: 'Market Viability', score: 78, feedback: 'Strong market demand detected' },
        { category: 'Competition', score: 65, feedback: 'Moderate competition in this space' },
        { category: 'Innovation', score: 82, feedback: 'Unique approach to the problem' },
        { category: 'Scalability', score: 72, feedback: 'Good potential for growth' },
        { category: 'Profitability', score: 70, feedback: 'Clear monetization pathways' }
      ])
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Validate Your Startup Idea</h1>
        <p className="text-gray-600">Get AI-powered analysis of your business concept</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card">
          <form onSubmit={handleValidate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Idea Title
              </label>
              <input
                type="text"
                value={ideaTitle}
                onChange={(e) => setIdeaTitle(e.target.value)}
                placeholder="e.g., AI-powered personal fitness coach"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={ideaDescription}
                onChange={(e) => setIdeaDescription(e.target.value)}
                placeholder="Describe your idea in detail..."
                rows={5}
                className="input-field resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Market
              </label>
              <input
                type="text"
                value={targetMarket}
                onChange={(e) => setTargetMarket(e.target.value)}
                placeholder="Who are your target customers?"
                className="input-field"
              />
            </div>

            <button
              type="submit"
              disabled={isAnalyzing || !ideaTitle.trim()}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? 'Analyzing...' : 'Validate Idea'}
            </button>
          </form>
        </div>

        {results && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Validation Results</h2>

            {results.map((result, index) => (
              <div key={index} className="card border-l-4 border-primary-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">{result.category}</h3>
                  <span className={`text-2xl font-bold ${
                    result.score >= 75
                      ? 'text-green-600'
                      : result.score >= 50
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}>
                    {result.score}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      result.score >= 75
                        ? 'bg-green-500'
                        : result.score >= 50
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>

                <p className="text-gray-600 text-sm">{result.feedback}</p>
              </div>
            ))}

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Overall Score:</strong> Your idea scores{' '}
                <strong>{Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)}%</strong> – Great potential!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

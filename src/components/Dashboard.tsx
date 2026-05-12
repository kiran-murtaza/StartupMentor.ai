import { useState } from 'react'

interface Project {
  id: number
  name: string
  description: string
  status: 'active' | 'completed' | 'paused'
  progress: number
  lastUpdated: string
}

export default function Dashboard() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      name: 'TechFlow Analytics',
      description: 'AI-powered data analytics platform',
      status: 'active',
      progress: 65,
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'HealthTrack Pro',
      description: 'Personal health monitoring app',
      status: 'active',
      progress: 40,
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      name: 'CloudSync',
      description: 'Secure cloud collaboration tool',
      status: 'completed',
      progress: 100,
      lastUpdated: '5 days ago'
    }
  ])

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Manage and track your startup projects</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="card bg-gradient-to-br from-blue-50 to-white">
          <div className="text-4xl font-bold text-primary-600 mb-2">{projects.length}</div>
          <p className="text-gray-600">Total Projects</p>
        </div>

        <div className="card bg-gradient-to-br from-green-50 to-white">
          <div className="text-4xl font-bold text-green-600 mb-2">{projects.filter(p => p.status === 'active').length}</div>
          <p className="text-gray-600">Active Projects</p>
        </div>

        <div className="card bg-gradient-to-br from-purple-50 to-white">
          <div className="text-4xl font-bold text-purple-600 mb-2">{Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%</div>
          <p className="text-gray-600">Average Progress</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : project.status === 'completed'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="font-semibold text-gray-900">{project.progress}%</div>
                  <div className="text-sm text-gray-500">{project.lastUpdated}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

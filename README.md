# StartupMentor.ai

StartupMentor AI is an AI-powered business coach that helps aspiring entrepreneurs validate startup ideas, generate business strategies, create marketing plans, and receive personalized guidance using modern AI technologies like LLMs, RAG, and AI agents.

## Features

- **💡 Startup Idea Validator** - Get AI-powered analysis and validation of your business ideas
- **📊 Business Strategy Builder** - Generate comprehensive business strategies tailored to your business
- **📢 Marketing Plan Creator** - Design data-driven marketing strategies with budget allocation
- **🤖 AI Business Coach** - Chat with an intelligent AI coach for personalized guidance
- **📈 Project Dashboard** - Track and manage your startup projects in one place

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API Calls**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git

### Installation

1. Clone the repository or navigate to the project folder

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

### Running the Development Server

```bash
npm run dev
```

The app will start at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx       # Navigation header
│   ├── Hero.tsx         # Landing page hero section
│   ├── Dashboard.tsx    # Project dashboard
│   ├── IdeasValidator.tsx    # Startup idea validation tool
│   ├── StrategyBuilder.tsx    # Business strategy generator
│   ├── MarketingPlan.tsx      # Marketing plan creator
│   └── AICoach.tsx            # AI coaching chat interface
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles with Tailwind

public/                 # Static assets
```

## Usage

1. **Dashboard**: View and track your startup projects
2. **Validate Idea**: Submit your startup idea for AI analysis across multiple criteria
3. **Strategy Builder**: Generate a comprehensive business strategy for your company
4. **Marketing Plan**: Create a tailored marketing strategy with channel recommendations
5. **AI Coach**: Chat with the AI for personalized business guidance

## API Integration

To connect with real AI services:

1. Update the API endpoints in components (currently using mock data)
2. Configure your API keys in `.env`
3. Replace simulated responses with actual API calls using Axios

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please reach out to the StartupMentor.ai team.

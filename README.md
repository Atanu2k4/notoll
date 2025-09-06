# notoll - Market Diversification & Relief Navigator

**Empowering Odisha's exporters to navigate global markets beyond U.S. tariffs**

## Overview

notoll is a comprehensive platform designed to help Odisha's seafood and textile exporters adapt to U.S. tariff challenges by discovering new markets, connecting with global buyers, ensuring compliance, and accessing relief schemes.

## Project Structure

```
notoll/
├── frontend/          # Next.js 15 + shadcn/ui + TypeScript
├── backend/           # Express + Prisma + MongoDB + TypeScript
├── .vscode/          # VS Code tasks and settings
└── .github/          # Project documentation
```

## Features

### 🎯 Core Functionality

- **Landing Page**: Public marketing page with hero section and testimonials
- **User Dashboard**: Personalized dashboard with 5 key widgets
- **Market Intelligence**: Real-time tariff data and pricing trends
- **Buyer Directory**: Global buyer network with filtering and matching
- **Pitch Assistant**: AI-powered pitch generation in multiple languages
- **Compliance Center**: Market-specific compliance checklists
- **Relief Navigator**: Government scheme discovery and application
- **Community Forum**: Peer-to-peer knowledge sharing
- **Success Stories**: Showcase of successful market diversifications
- **Impact Tracker**: Revenue and business impact analytics
- **Account Settings**: Profile and team management

### 🎨 Design System

- **Primary Color**: Blue (#2C7BE5)
- **UI Framework**: shadcn/ui components
- **Typography**: Inter font family
- **Layout**: Sidebar + Topbar dashboard design
- **Responsive**: Mobile-first approach

### 🔐 User Roles

- **USER**: Exporters, Processors, Farmer Groups
- **ADMIN**: Government/NGO administrators
- **SUPER_ADMIN**: Platform administrators

## Technology Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Prisma ORM
- **Authentication**: JWT with email/OTP
- **File Upload**: Multer (10MB limit)
- **PDF Generation**: Puppeteer

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local or cloud)
- Git

### 1. Clone & Setup

```bash
git clone <repository-url>
cd notoll
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database URL and secrets
npx prisma generate
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 4. Using VS Code Tasks

Open the project in VS Code and use:

- `Ctrl+Shift+P` → "Tasks: Run Task"
- Select "Start Both Servers" to run frontend and backend simultaneously

## API Documentation

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - Email login (OTP in production)
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Dashboard

- `GET /api/dashboard/metrics` - Dashboard widget data

### Market Intelligence

- `GET /api/market/tariffs` - Tariff comparison data
- `GET /api/market/pricing` - Pricing trend data

### Buyers

- `GET /api/buyers` - Buyer directory with filters
- `POST /api/buyers/save` - Save buyer to favorites

### Additional Routes

- Pitches, Compliance, Relief Schemes, Forum, Impact tracking
- Admin routes for user and data management

## Database Schema

### Key Models

- **User**: Exporter profiles with role-based access
- **Product**: HS codes and product information
- **Buyer**: International buyer directory
- **Tariff**: Real-time tariff data by country/HS code
- **Pitch**: Generated pitches with translations
- **ComplianceRecord**: Market-specific compliance tracking
- **ReliefScheme**: Government relief programs
- **ForumPost/Reply**: Community discussions
- **ImpactLog**: Business impact tracking

## Development

### Running in Development

```bash
# Backend (http://localhost:5000)
cd backend && npm run dev

# Frontend (http://localhost:3000)
cd frontend && npm run dev
```

### Building for Production

```bash
# Backend
cd backend && npm run build

# Frontend
cd frontend && npm run build
```

### Database Management

```bash
# Generate Prisma client
cd backend && npx prisma generate

# View database in Prisma Studio
cd backend && npx prisma studio

# Seed development data
cd backend && npm run seed
```

## Deployment

### Environment Variables

See `backend/.env.example` for required environment variables including:

- Database connection string
- JWT secrets
- Email service configuration
- File upload settings

### Production Considerations

- Set up MongoDB cluster (Atlas recommended)
- Configure email service for OTP/magic links
- Set up file storage (AWS S3 or similar)
- Configure domain and SSL certificates
- Set up monitoring and logging

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the ISC License.

## Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation in `/docs`

---

**Built with ❤️ for Odisha's exporters**

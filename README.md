# Speedview Task

## Project Overview

This is a front-end task for [Memoirs](https://memoirs.education) by [Kenny Otesile](https://github.com/kennyotesile). This project is developed using:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/) (based on Radix UI)
- [NextAuth.js](https://next-auth.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)

## Prerequisites

The project was set up and run locally with the following:

- Node.js (version 18.18.0)
- NPM (version 9.8.1)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/kennyotesile/speedview-task
```

2. Navigate to the project directory:

```bash
cd speedview-task
```

3. Install dependencies:

```bash
npm install
```

## Folder Structure

The project follows a structured directory layout:

```bash
├── prisma/ # Prisma ORM files
│   ├── index.ts
│   ├── schema.prisma
├── public/ # Publicly accessible static assets
├── src/ # Source code directory
│   ├── app/ # App folder
│   │   ├── api/ # API routes
│   │   │   └── ...
│   │   ├── dashboard # Dashboard page
│   │   │   └── ...
│   │   ├── sign-in # Sign in page
│   │   │   └── ...
│   │   ├── globals.css # Global CSS file
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ...
│   ├── components/ # Reusable React components
│   │   ├── ui/ # UI components
│   │   │   └── ... # Other components
│   │   └── ...
│   ├── lib/ # Modules and utility functions
│   │   └── utils.ts # Utility functions
├── ... # Configs, README, etc.
```

## Authentication

N/B: The Google and Facebook OAuth features are not in production mode, hence, to be able to sign in via either of these providers, your email address would have to be added to the list of internal testers' email addresses. The providers have been added still though to demonstrate their functionality.

**GitHub Authentication:** The quickest way to test the authentication feature would be via GitHub Authentication which does not require publishing the app to production before it can be used.

## ORM and Database

The project makes use of [Prisma](https://prisma.io) as its ORM and [MongoDB](https://www.mongodb.com/) hosted on the [MongoDB Atlas](https://www.mongodb.com/atlas) cloud service as its database system. No special script needs to be run to start up the database as it runs on the cloud.

## Usage

Start the development server with the script:

```bash
npm run dev
```

The server will be started in the default port `3000` if unused. Open [http://localhost:3000](http://localhost:3000) with your browser to view the site. Otherwise, refer to the terminal output to know which port the server is running in.

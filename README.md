# Speedview Task

## Project Overview

This is a front-end task for Memoirs. This project is built using [Next.js](https://nextjs.org/).

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

## Usage

Start the development server with the script:

```bash
npm run dev
```

The server will be started in the default port `3000` if unused. Open [http://localhost:3000](http://localhost:3000) with your browser to view the site. Otherwise, refer to the terminal output to know which port the server is running in.

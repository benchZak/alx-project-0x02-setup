// pages/home.tsx
import Head from 'next/head'
import Header from '../components/layout/Header'
import Card from '../components/common/Card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Home Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Welcome to Our Project"
            content="This is a Next.js project created for learning purposes."
            className="border-l-4 border-blue-500"
          />
          
          <Card 
            title="Features"
            content="Includes TypeScript, Tailwind CSS, and reusable components."
          />
          
          <Card 
            title="Get Started"
            content="Explore the different pages and components to learn more."
            className="bg-blue-50"
          />
        </div>
      </main>
    </div>
  )
}

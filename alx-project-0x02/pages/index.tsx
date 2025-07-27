import Head from 'next/head'
import Header from '../components/layout/Header'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Welcome | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome to Our Project
        </h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            This is the landing page of our Next.js application.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="/home" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Go to Home
            </a>
            <a 
              href="/about" 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

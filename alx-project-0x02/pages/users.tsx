// pages/users.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    return {
      props: {
        users
      },
      revalidate: 60 // Regenerate page every 60 seconds
    };
  } catch (err) {
    return {
      props: {
        users: [],
        error: err instanceof Error ? err.message : 'An unknown error occurred'
      }
    };
  }
}

export default function UsersPage({ users, error }: UsersPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Users | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Our Users
        </h1>

        {error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

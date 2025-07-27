// components/common/PostCard.tsx
import { type PostProps } from '@/interfaces';

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{body}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>User ID: {userId}</span>
        </div>
      </div>
    </div>
  );
}

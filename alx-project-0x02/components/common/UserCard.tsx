// components/common/UserCard.tsx
import { type UserProps } from '@/interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {email}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Address:</span> {fullAddress}
          </p>
        </div>
      </div>
    </div>
  );
}

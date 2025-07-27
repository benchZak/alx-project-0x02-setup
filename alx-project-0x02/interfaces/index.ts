//
// interfaces/index.ts
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  shape?: ButtonShape;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
/* Common Component Props */
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

export interface CardProps {
  title: string;
  content: string;
  lassName?: string;
}

/* API Data Interfaces */
export interface User {
  id?: number;
  title: string;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

/* Page Props */
export interface PageProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: UserAddress;
}

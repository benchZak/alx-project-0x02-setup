//
// interfaces/index.ts

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
  params?: { [key: string]: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

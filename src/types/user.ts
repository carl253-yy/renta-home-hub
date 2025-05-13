
export type UserRole = 'landlord' | 'tenant' | 'caretaker' | 'hunter' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export enum DegreeLevel {
  BACHELOR = 'Бакалавр',
  MASTER = 'Магістр',
  PHD = 'Доктор філософії'
}

export enum EducationBase {
  SECONDARY = 'Повна загальна середня освіта',
  NQF5 = 'НРК5 (Фаховий молодший бакалавр)',
  SPECIALIST = 'Спеціаліст',
  MASTER = 'Магістр'
}

export interface Specialty {
  code: string;
  name: string;
  priceFullTime?: number;
  pricePartTime?: number | string; // string for '-' case
}

export interface Faculty {
  id: string;
  name: string;
  description?: string;
  image?: string; // New field for faculty image
  specialties: Specialty[];
  email?: string;
  phone?: string;
}

export interface UserRegistration {
  firstName: string;
  lastName: string;
  phone: string;
  degree: DegreeLevel | '';
  educationBase: EducationBase | '';
}
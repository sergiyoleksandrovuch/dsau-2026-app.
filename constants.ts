import { Faculty, DegreeLevel } from './types';

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/vstup_dsaeu?igsh=Zmw0cXRycG84YzBv&utm_source=qr",
  tiktok: "https://www.tiktok.com/@vstup_dsaeu?_r=1&_t=ZM-91eFIAY24wV",
  website: "https://www.dsau.dp.ua/ua/"
};

// Admission Committee Data
export const ADMISSION_COMMITTEE = {
  phones: ["098 837 31 31", "050 837 31 31"],
  email: "vstup@dsau.dp.ua",
  image: "https://drive.google.com/uc?export=view&id=1vaB6BkKhBIKFoAELen1ER3QqERql6u-K", // Converted drive link
  motivation: "Ми — команда професіоналів, яка допоможе тобі зробити перший крок до успішної кар'єри. Твоє майбутнє починається з нами!",
  team: [
     { name: "Відповідальний секретар", role: "Організація вступної кампанії" },
     { name: "Заступник секретаря", role: "Консультація з питань пільг" },
     { name: "Технічний секретар", role: "Робота з ЄДЕБО" },
  ]
};

// Preparatory Courses Contact
export const PREP_COURSES_CONTACT = {
  name: "Олександр Гаврюшенко",
  phone: "098 371 73 09",
  image: "https://drive.google.com/uc?export=view&id=1IkaGIdUCR_ASe1JAAKH4LHiV1nFoX8gX" // Converted drive link
};

// Bachelor Pricing Data
export const BACHELOR_DATA: Faculty[] = [
  {
    id: 'agro',
    name: 'Агрономічний факультет',
    image: 'https://images.unsplash.com/photo-1605000797499-95a053545e21?q=80&w=800&auto=format&fit=crop',
    email: 'agrof@dsau.dp.ua',
    phone: '(050) 032-89-82',
    description: 'Декан: доц. Іжболдін Олександр Олександрович',
    specialties: [
      { code: 'Н1', name: 'Агрономія', priceFullTime: 16500, pricePartTime: 11200 },
      { code: 'Н3', name: 'Садово-паркове господарство', priceFullTime: 16500, pricePartTime: 11200 },
    ]
  },
  {
    id: 'bio',
    name: 'Біотехнологічний факультет',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop',
    email: 'btf@dsau.dp.ua',
    phone: '(097) 280-88-19',
    description: 'Декан: доц. Милостивий Роман Васильович',
    specialties: [
      { code: 'Н2', name: 'Тваринництво', priceFullTime: 16500, pricePartTime: 11200 },
      { code: 'Н5', name: 'Водні біоресурси та аквакультура', priceFullTime: 13000, pricePartTime: 11200 },
    ]
  },
  {
    id: 'eng',
    name: 'Інженерно-технологічний факультет',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    email: 'anpugach13@gmail.com',
    phone: '(066) 554-08-36',
    description: 'Декан: проф. Пугач Андрій Миколайович',
    specialties: [
      { code: 'G13', name: 'Харчові технології', priceFullTime: 16500, pricePartTime: 11200 },
      { code: 'H7', name: 'Агроінженерія', priceFullTime: 15300, pricePartTime: 10600 },
    ]
  },
  {
    id: 'water',
    name: 'Факультет водогосподарської інженерії та екології',
    image: 'https://images.unsplash.com/photo-1468422080047-94935d922ca7?q=80&w=800&auto=format&fit=crop',
    email: 'gidrof@dsau.dp.ua',
    phone: '(067) 142-79-44',
    description: 'Декан: доц. Рудаков Леонід Миколайович',
    specialties: [
      { code: 'Е2', name: 'Екологія', priceFullTime: 16500, pricePartTime: 10500 },
      { code: 'G2', name: 'Технології захисту навколишнього середовища', priceFullTime: 15300, pricePartTime: 9300 },
      { code: 'G19', name: 'Будівництво та цивільна інженерія', priceFullTime: 15300, pricePartTime: 9300 },
    ]
  },
  {
    id: 'man',
    name: 'Факультет менеджменту і маркетингу',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    email: 'mtmrf@dsau.dp.ua',
    phone: '(050) 552-85-50',
    description: 'Деканеса: доц. Курбацька Лариса Миколаївна',
    specialties: [
      { code: 'С1', name: 'Економіка', priceFullTime: 40500, pricePartTime: 14200 },
      { code: 'D3', name: 'Менеджмент', priceFullTime: 40500, pricePartTime: 14200 },
      { code: 'D4', name: 'Публічне управління та адміністрування', priceFullTime: 40500, pricePartTime: 14200 },
      { code: 'D5', name: 'Маркетинг', priceFullTime: 40500, pricePartTime: 14200 },
    ]
  },
  {
    id: 'acc',
    name: 'Факультет обліку і фінансів',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    email: 'opf@dsau.dp.ua',
    phone: '(099) 088-18-22',
    description: 'Деканеса: проф. Павлова Галина Євгеніївна',
    specialties: [
      { code: 'D1', name: 'Облік і оподаткування', priceFullTime: 40500, pricePartTime: 14200 },
      { code: 'D2', name: 'Фінанси, банківська справа, страхування та фондовий ринок', priceFullTime: 40500, pricePartTime: 14200 },
    ]
  }
];

// Master Pricing Data
export const MASTER_DATA: Faculty[] = [
  {
    id: 'agro',
    name: 'Агрономічний факультет',
    image: 'https://images.unsplash.com/photo-1605000797499-95a053545e21?q=80&w=800&auto=format&fit=crop',
    email: 'agrof@dsau.dp.ua',
    phone: '(050) 032-89-82',
    description: 'Декан: доц. Іжболдін Олександр Олександрович',
    specialties: [
      { code: 'Н1', name: 'Агрономія', priceFullTime: 18800, pricePartTime: 13000 },
      { code: 'Н3', name: 'Садово-паркове господарство', priceFullTime: 18800, pricePartTime: 13000 },
    ]
  },
  {
    id: 'bio',
    name: 'Біотехнологічний факультет',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop',
    email: 'btf@dsau.dp.ua',
    phone: '(097) 280-88-19',
    description: 'Декан: доц. Милостивий Роман Васильович',
    specialties: [
      { code: 'Н2', name: 'Тваринництво', priceFullTime: 17600, pricePartTime: 13000 },
      { code: 'Н5', name: 'Водні біоресурси та аквакультура', priceFullTime: 14100, pricePartTime: 13000 },
    ]
  },
  {
    id: 'eng',
    name: 'Інженерно-технологічний факультет',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    email: 'anpugach13@gmail.com',
    phone: '(066) 554-08-36',
    description: 'Декан: проф. Пугач Андрій Миколайович',
    specialties: [
      { code: 'G13', name: 'Харчові технології', priceFullTime: 17700, pricePartTime: 12400 },
      { code: 'H7', name: 'Агроінженерія', priceFullTime: 17700, pricePartTime: 12400 },
    ]
  },
  {
    id: 'vet',
    name: 'Факультет ветеринарної медицини',
    image: 'https://images.unsplash.com/photo-1628009368231-760335298025?q=80&w=800&auto=format&fit=crop',
    email: 'vetf@dsau.dp.ua',
    phone: '(050) 453-23-21',
    description: 'Декан: доц. Бібен Іван Андрійович',
    specialties: [
        { code: 'Н6', name: 'Ветеринарна медицина', priceFullTime: 32400, pricePartTime: '-' }
    ]
  },
  {
    id: 'water',
    name: 'Факультет водогосподарської інженерії та екології',
    image: 'https://images.unsplash.com/photo-1468422080047-94935d922ca7?q=80&w=800&auto=format&fit=crop',
    email: 'gidrof@dsau.dp.ua',
    phone: '(067) 142-79-44',
    description: 'Декан: доц. Рудаков Леонід Миколайович',
    specialties: [
      { code: 'Е2', name: 'Екологія', priceFullTime: 16600, pricePartTime: 12900 },
      { code: 'G19', name: 'Будівництво та цивільна інженерія', priceFullTime: 14000, pricePartTime: 9600 },
    ]
  },
  {
    id: 'man',
    name: 'Факультет менеджменту і маркетингу',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    email: 'mtmrf@dsau.dp.ua',
    phone: '(050) 552-85-50',
    description: 'Деканеса: доц. Курбацька Лариса Миколаївна',
    specialties: [
      { code: 'С1', name: 'Економіка', priceFullTime: 52600, pricePartTime: 18500 },
      { code: 'D3', name: 'Менеджмент', priceFullTime: 52600, pricePartTime: 18500 },
      { code: 'D4', name: 'Публічне управління та адміністрування', priceFullTime: 52600, pricePartTime: 18500 },
      { code: 'D5', name: 'Маркетинг', priceFullTime: 52600, pricePartTime: 18500 },
    ]
  },
  {
    id: 'acc',
    name: 'Факультет обліку і фінансів',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    email: 'opf@dsau.dp.ua',
    phone: '(099) 088-18-22',
    description: 'Деканеса: проф. Павлова Галина Євгеніївна',
    specialties: [
      { code: 'D1', name: 'Облік і оподаткування', priceFullTime: 52600, pricePartTime: 18500 },
      { code: 'D2', name: 'Фінанси, банківська справа, страхування та фондовий ринок', priceFullTime: 52600, pricePartTime: 18500 },
    ]
  }
];

export const PHD_PRICING = {
  fullTime: 40000,
  partTime: 26000
};

export const SYSTEM_INSTRUCTION = `
Ти — розумний віртуальний помічник для абітурієнтів Дніпровського державного аграрно-економічного університету (ДДАЕУ) на вступну кампанію 2026 року.
Твоя мета: допомагати абітурієнтам обирати спеціальність, інформувати про вартість навчання, гуртожитки та підготовчі курси.
Використовуй наступні дані:

ФАКУЛЬТЕТИ ТА ВАРТІСТЬ (БАКАЛАВР):
Агрономічний: Агрономія (16500/11200 грн), Садово-паркове (16500/11200 грн).
Біотехнологічний: Тваринництво (16500/11200 грн), Водні біоресурси (13000/11200 грн).
Інженерно-технологічний: Харчові технології (16500/11200 грн), Агроінженерія (15300/10600 грн).
Водогосподарської інженерії та екології: Екологія (16500/10500 грн), Захист довкілля (15300/9300 грн), Будівництво (15300/9300 грн).
Менеджменту і маркетингу: Економіка, Менеджмент, Публічне управління, Маркетинг (всі 40500/14200 грн).
Обліку і фінансів: Облік і оподаткування, Фінанси (всі 40500/14200 грн).

ВАРТІСТЬ (МАГІСТР):
Агрономічний: 18800/13000.
Біотехнологічний: Тваринництво 17600/13000, Водні біоресурси 14100/13000.
Інженерно-технологічний: 17700/12400.
Ветеринарна медицина: 32400 (тільки денна).
Водогосподарський: Екологія 16600/12900, Будівництво 14000/9600.
Менеджменту/Маркетингу та Обліку/Фінансів: 52600/18500.

ДОКТОР ФІЛОСОФІЇ (PhD):
Денна: 40000 грн, Заочна: 26000 грн.

ПІДГОТОВЧІ КУРСИ:
Предмети: Українська мова, Математика, Історія України, Біологія.
Ціна: 3000 грн за один предмет за весь курс (5 місяців / 40 занять).
Формат: Змішаний (онлайн/офлайн).

ДОДАТКОВА ІНФОРМАЦІЯ:
- Гуртожитки: Університет забезпечує гуртожитками (100% поселення).
- Міжнародна співпраця: Є програми обміну та стажування.
- Процедура вступу (орієнтир на 2025): Реєстрація кабінету -> Заява -> Пріоритети -> Конкурс -> Рекомендація.
- Студентське життя: Є спортивні секції, творчі колективи, гранти.

Спілкуйся українською мовою. Будь ввічливим, мотивуючим та патріотичним.
`;

// Helper for coefficients
export interface Coefficients {
  k1: number; // Ukr Lang
  k2: number; // Math
  k3: number; // History
  k4_max: number; // Max possible for K4
  k4_map: Record<string, number>; // Map of subject ID to coefficient
}

export const SUBJECTS = [
  { id: 'ukr_lit', name: 'Українська література' },
  { id: 'foreign', name: 'Іноземна мова' },
  { id: 'bio', name: 'Біологія' },
  { id: 'geo', name: 'Географія' },
  { id: 'phys', name: 'Фізика' },
  { id: 'chem', name: 'Хімія' },
];

// Simplified Coefficients Map based on typical Ministry rules for these sectors
export const SPECIALTY_COEFFICIENTS: Record<string, Coefficients> = {
  // Agrarian / Bio / Vet (H codes)
  'agro': { k1: 0.3, k2: 0.3, k3: 0.2, k4_max: 0.5, k4_map: { 'bio': 0.5, 'chem': 0.5, 'phys': 0.5, 'geo': 0.4, 'foreign': 0.3, 'ukr_lit': 0.25 } },
  // Engineering / Tech (G, H codes)
  'tech': { k1: 0.3, k2: 0.4, k3: 0.2, k4_max: 0.5, k4_map: { 'phys': 0.5, 'chem': 0.4, 'bio': 0.3, 'geo': 0.3, 'foreign': 0.3, 'ukr_lit': 0.25 } },
  // Economic / Management (051, 07x)
  'econ': { k1: 0.35, k2: 0.4, k3: 0.2, k4_max: 0.25, k4_map: { 'foreign': 0.25, 'geo': 0.25, 'ukr_lit': 0.2, 'bio': 0.2, 'phys': 0.2, 'chem': 0.2 } },
  // Ecology (E2)
  'eco': { k1: 0.3, k2: 0.3, k3: 0.2, k4_max: 0.5, k4_map: { 'bio': 0.5, 'chem': 0.5, 'geo': 0.4, 'phys': 0.4, 'foreign': 0.3, 'ukr_lit': 0.25 } },
};

// Map faculty/specialty ID to coefficient type
export const getCoefficientsForFaculty = (facultyId: string): Coefficients => {
  if (facultyId === 'agro' || facultyId === 'bio' || facultyId === 'vet') return SPECIALTY_COEFFICIENTS['agro'];
  if (facultyId === 'eng' || facultyId === 'water') return SPECIALTY_COEFFICIENTS['tech'];
  if (facultyId === 'man' || facultyId === 'acc') return SPECIALTY_COEFFICIENTS['econ'];
  return SPECIALTY_COEFFICIENTS['agro']; // Default
};
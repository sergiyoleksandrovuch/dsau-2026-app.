
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
  image: "https://i.postimg.cc/WpWhJ6F3/team.jpg", 
  motivation: "Ми — команда професіоналів, яка допоможе тобі зробити перший крок до успішної кар'єри. Твоє майбутнє починається з нами!",
  // Structural Units
  leadership: [
    { name: "Анатолій Степанович Кобець", role: "Ректор університету, Голова приймальної комісії", email: "agro@dsau.dp.ua" },
    { name: "Дмитро Михайлович Онопрієнко", role: "Перший проректор, Заступник голови приймальної комісії", email: "agro@dsau.dp.ua" }
  ],
  secretariat: [
    { name: "Сергій Олександрович Кобернюк", role: "Відповідальний секретар приймальної комісії", email: "koberniuk.s.o@dsau.dp.ua" },
    { name: "Дмитро Олександрович Тимчак", role: "Заст. відповідального секретаря", email: "tymchak.d.o@dsau.dp.ua" },
    { name: "Олександр Олександрович Гаврюшенко", role: "Заст. відповідального секретаря", email: "havriushenko.o.o@dsau.dp.ua" },
    { name: "Ліна Миколаївна Помазан", role: "Провідна фахівчиня з інформаційних технологій", email: "pomazan.l.m@dsau.dp.ua" }
  ],
  faculties: [
    {
      name: "Агрономічний факультет",
      members: [
        { name: "Олександр Олександрович Іжболдін", role: "Голова відбіркової комісії (Декан)", email: "izhboldin.o.o@dsau.dp.ua" },
        { name: "Інна Вікторівна Лядська", role: "Відповідальна секретарка", email: "liadska.i.v@dsau.dp.ua" },
        { name: "Ірина Миколаївна Сологуб", role: "Членкиня комісії", email: "sologubira2306@gmail.com" },
        { name: "Наталія Олексіївна Пришедько", role: "Членкиня комісії", email: "agrozemlerobstvo@gmail.com" }
      ]
    },
    {
      name: "Інженерно-технологічний факультет",
      members: [
        { name: "Андрій Миколайович Пугач", role: "Голова відбіркової комісії (Декан)", email: "anpugach13@gmail.com" },
        { name: "Наталія Олександрівна Пономаренко", role: "Відповідальна секретарка", email: "nanagieva@ukr.net" },
        { name: "Діана Петрівна Кротюк", role: "Членкиня комісії", email: "dianakorotuk@gmail.com" },
        { name: "Аліна Олександрівна Черниченко", role: "Членкиня комісії", email: "" }
      ]
    },
    {
      name: "Факультет менеджменту і маркетингу",
      members: [
        { name: "Лариса Миколаївна Курбацька", role: "Голова відбіркової комісії (Деканеса)", email: "kurbatska.l.m@dsau.dp.ua" },
        { name: "Сергій Вячеславович Васильєв", role: "Відповідальний секретар", email: "vasyliev.s.v@dsau.dp.ua" },
        { name: "Юлія Леонідівна Якубенко", role: "Членкиня комісії", email: "yakubenko.yu.l@dsau.dp.ua" },
        { name: "Олеся Василівна Лебеденко", role: "Членкиня комісії", email: "lebedenko.olesya@i.ua" }
      ]
    },
    {
      name: "Факультет обліку і фінансів",
      members: [
        { name: "Галина Євгеніївна Павлова", role: "Голова відбіркової комісії (Деканеса)", email: "pavlova.h.ye@dsau.dp.ua" },
        { name: "Анна Юріївна Сірко", role: "Відповідальна секретарка", email: "sirko.a.iu@dsau.dp.ua" },
        { name: "Олена Володимирівна Лиса", role: "Членкиня комісії", email: "lysaelena@gmail.com" },
        { name: "Ольга Віталіївна Чернецька", role: "Членкиня комісії", email: "chernetska.o.v@dsau.dp.ua" },
        { name: "Олена Леонідівна Дубина", role: "Членкиня комісії", email: "dubyna.o.l@dsau.dp.ua" }
      ]
    },
    {
      name: "Факультет ветеринарної медицини",
      members: [
        { name: "Іван Андрійович Бібен", role: "Голова відбіркової комісії (Декан)", email: "biben.i.a@dsau.dp.ua" },
        { name: "Марта Сергіївна Оржинська", role: "Відповідальна секретарка", email: "marta1990333@gmail.com" },
        { name: "Олена Іванівна Северіна", role: "Членкиня комісії", email: "elene.severina74@gmail.com" },
        { name: "Дар’я Сергіївна Замула", role: "Членкиня комісії", email: "dariazamyla2006@gmail.com" }
      ]
    },
    {
      name: "Біотехнологічний факультет",
      members: [
        { name: "Роман Васильович Милостивий", role: "Голова відбіркової комісії (Декан)", email: "mylostyvyi.r.v@dsau.dp.ua" },
        { name: "Володимир Михайлович Пришедько", role: "Відповідальний секретар", email: "prishedko.v.m@dsau.dp.ua" },
        { name: "Надія Леонідівна Губанова", role: "Членкиня комісії", email: "nlg2277@gmail.com" }
      ]
    },
    {
      name: "Факультет водогосподарської інженерії та екології",
      members: [
        { name: "Леонід Миколайович Рудаков", role: "Голова відбіркової комісії (Декан)", email: "rudakov.l.m@dsau.dp.ua" },
        { name: "Вікторія Валеріївна Кацевич", role: "Відповідальна секретарка", email: "katsevych.v.v@dsau.dp.ua" },
        { name: "Єлизавета Сергіївна Куга", role: "Членкиня комісії", email: "kugaelizaveta@gmail.com" }
      ]
    }
  ]
};

export const PHD_CONTACT = {
  phone: "(097) 697-89-20",
  email: "vpank@dsau.dp.ua",
  head: {
    name: "Олександр Сергійович Ткаченко",
    role: "Завідувач відділу аспірантури",
    image: "https://i.postimg.cc/W1N49Sdx/tkachenko_o_s.png"
  },
  specialist: {
    name: "Анастасія Олександрівна Бойчук",
    role: "Провідна фахівчиня",
    image: "https://i.postimg.cc/x1fdsgXW/boychuk-a-o.png"
  }
};

// Preparatory Courses Contact
export const PREP_COURSES_CONTACT = {
  name: "Олександр Гаврюшенко",
  phone: "098 371 73 09",
  image: "https://i.postimg.cc/0jBjRPRF/gavrusenko.jpg"
};

// Bachelor Pricing Data
export const BACHELOR_DATA: Faculty[] = [
  {
    id: 'agro',
    name: 'Агрономічний факультет',
    image: 'https://i.postimg.cc/jq6dzp8M/agrofac.png',
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
    image: 'https://i.postimg.cc/P56rc1Ys/BTF.png',
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
    image: 'https://i.postimg.cc/CLmh2jpD/ITF.png',
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
    image: 'https://i.postimg.cc/qqHsWPy4/gidrofak.png',
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
    image: 'https://i.postimg.cc/jq6dzp8M/agrofac.png',
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
    image: 'https://i.postimg.cc/P56rc1Ys/BTF.png',
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
    image: 'https://i.postimg.cc/CLmh2jpD/ITF.png',
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
    image: 'https://i.postimg.cc/D0Y2STgN/vetfac.png',
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
    image: 'https://i.postimg.cc/qqHsWPy4/gidrofak.png',
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

export const PHD_SPECIALTIES = [
  { code: 'С1', name: 'Економіка' },
  { code: 'D2', name: 'Фінанси, банківська справа, страхування та фондовий ринок' },
  { code: 'D3', name: 'Менеджмент' },
  { code: 'D4', name: 'Публічне управління та адміністрування' },
  { code: 'G1', name: 'Екологія' },
  { code: 'G1', name: 'Машинобудування' },
  { code: 'H1', name: 'Агрономія' },
  { code: 'H2', name: 'Тваринництво' },
  { code: 'H6', name: 'Ветеринарна медицина' },
];

export const SUBJECTS = [
  { id: 'ukr_lit', name: 'Українська література' },
  { id: 'foreign', name: 'Іноземна мова' },
  { id: 'biology', name: 'Біологія' },
  { id: 'physics', name: 'Фізика' },
  { id: 'chemistry', name: 'Хімія' },
  { id: 'geography', name: 'Географія' },
];

export const getCoefficientsForFaculty = (facultyId: string) => {
  // Agricultural / Engineering
  if (['agro', 'bio', 'eng', 'water', 'vet'].includes(facultyId)) {
    return {
      k1: 0.3,
      k2: 0.3, 
      k3: 0.2,
      k4_max: 0.5,
      k4_map: {
        'ukr_lit': 0.2,
        'foreign': 0.25,
        'biology': 0.5, 
        'physics': 0.4, 
        'chemistry': 0.3,
        'geography': 0.2
      } as Record<string, number>
    };
  }

  // Economics / Management (man, acc)
  return {
    k1: 0.35,
    k2: 0.4,
    k3: 0.2,
    k4_max: 0.5,
    k4_map: {
      'ukr_lit': 0.2,
      'foreign': 0.5, 
      'biology': 0.2,
      'physics': 0.2,
      'chemistry': 0.2,
      'geography': 0.4
    } as Record<string, number>
  };
};

// STRICT AI INSTRUCTIONS
export const SYSTEM_INSTRUCTION = `
Ти — розумний віртуальний помічник для абітурієнтів Дніпровського державного аграрно-економічного університету (ДДАЕУ) на вступну кампанію 2026 року.

ПРАВИЛА ПОВЕДІНКИ (ОБОВ'ЯЗКОВІ):
1. ВІДПОВІДАЙ ТІЛЬКИ на основі наданої нижче інформації. НЕ ВИГАДУЙ, не фантазуй.
2. Якщо ти не знаєш відповіді або інформації немає в цьому тексті, ти ПОВИНЕН сказати: "На жаль, я не маю точної інформації з цього питання. Будь ласка, залиште свій контакт, натиснувши кнопку нижче, і наш фахівець зв'яжеться з вами."
3. НЕ ДАВАЙ загальних порад, якщо вони не стосуються ДДАЕУ.

ТВОЯ БАЗА ЗНАНЬ:

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
Спеціальності: Економіка, Фінанси, Менеджмент, Публічне управління, Екологія, Машинобудування, Агрономія, Тваринництво, Ветеринарна медицина.
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

Спілкуйся українською мовою. Будь ввічливим.`;

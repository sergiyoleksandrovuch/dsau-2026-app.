
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { FacultyList } from './components/FacultyList';
import { RegistrationForm, RegistrationSuccess } from './components/RegistrationForm';
import { GeminiChat } from './components/GeminiChat';
import { ScoreCalculator } from './components/ScoreCalculator';
import { DegreeLevel, UserRegistration } from './types';
import { PHD_PRICING, PHD_SPECIALTIES, SOCIAL_LINKS, ADMISSION_COMMITTEE, PREP_COURSES_CONTACT, PHD_CONTACT } from './constants';
import { Menu, X, GraduationCap, BookOpen, Phone, MapPin, Globe, CheckCircle, Lightbulb, Calendar, Mail, Instagram, ExternalLink, Briefcase, Home, Award, Music, Users, Code, Trophy, Map, MessageCircle, Heart, Plane, User, BadgeCheck, AlertTriangle } from 'lucide-react';
import { Button } from './components/ui/Button';

// --- Icons wrapper for Tiktok which is not in lucide-react (using generic music icon or SVG) ---
const TikTokIcon = ({ size = 24, className = "" }: {size?: number, className?: string}) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

// --- Components defined within App for simplicity ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: '/', label: 'Головна' },
    { path: '/faculties', label: 'Факультети' },
    { path: '/admission', label: 'Вступ 2026' },
    { path: '/committee', label: 'Приймальна комісія' },
    { path: '/courses', label: 'Курси' },
    { path: '/important', label: 'Важливо' },
    { path: '/student-life', label: 'Студентське життя' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-yellow-600 font-bold text-xl hover:opacity-80 transition-opacity">
            {/* Use direct Postimages link for Logo */}
            <img src="https://i.postimg.cc/rsPsXMXJ/logo.jpg" alt="Logo" className="w-10 h-10 object-contain" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden')}} />
            <GraduationCap size={32} strokeWidth={2.5} className="hidden" />
            <span className="tracking-tight text-gray-800">ДДАЕУ <span className="text-yellow-600">ВСТУП</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-semibold transition-all relative py-1 hover:text-yellow-600 ${location.pathname === link.path ? 'text-yellow-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-500' : 'text-gray-600'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-600 hover:text-yellow-600 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl animate-in slide-in-from-top-2 z-50">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={closeMenu}
                className={`p-3 rounded-xl font-medium transition-colors ${location.pathname === link.path ? 'bg-yellow-50 text-yellow-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
        {/* Info */}
        <div className="text-center md:text-left space-y-4">
           <h3 className="text-white font-bold text-2xl mb-2 flex items-center justify-center md:justify-start gap-3">
            <img src="https://i.postimg.cc/rsPsXMXJ/logo.jpg" alt="Logo" className="w-10 h-10 object-contain grayscale brightness-200" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden')}} />
            <GraduationCap size={32} className="text-yellow-500 hidden" />
            ДДАЕУ
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">Дніпровський державний аграрно-економічний університет — провідний заклад вищої освіти України з європейськими стандартами навчання.</p>
          <p className="text-xs text-gray-500">© 2026 Вступна кампанія • v1.34</p>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-4 text-sm items-center md:items-start">
           <h4 className="text-white font-bold text-lg mb-2">Контакти</h4>
           <a href="https://www.dsau.dp.ua/ua/page/abturntu.html" target="_blank" rel="noreferrer" className="hover:text-yellow-400 flex items-center gap-3 transition-colors group">
              <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-yellow-500/20 transition-colors"><Globe size={18} /></span> Офіційний сайт
           </a>
           <a href={`tel:${ADMISSION_COMMITTEE.phones[0]}`} className="hover:text-yellow-400 flex items-center gap-3 transition-colors group">
             <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-yellow-500/20 transition-colors"><Phone size={18} /></span> {ADMISSION_COMMITTEE.phones[0]}
           </a>
           <span className="flex items-center gap-3 text-gray-400">
             <span className="p-2 bg-gray-800 rounded-lg"><MapPin size={18} /></span> м. Дніпро, вул. С. Єфремова, 25
           </span>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
           <h4 className="text-white font-bold text-lg mb-4">Слідкуйте за нами</h4>
           <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-to-tr from-yellow-500 to-pink-600 text-white rounded-xl flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg">
                <Instagram size={24} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-800 text-white border border-gray-700 rounded-xl flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg hover:border-yellow-500">
                <TikTokIcon size={24} />
              </a>
               <a href={SOCIAL_LINKS.website} target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg">
                <Globe size={24} />
              </a>
           </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-600">
        Розроблено з турботою про майбутнє України 🇺🇦
      </div>
    </div>
  </footer>
);

// --- Landing Page for Registration ---
interface LandingPageProps {
    onRegistrationComplete: (user: UserRegistration) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onRegistrationComplete }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 overflow-hidden">
             {/* Hero Section with Split Background */}
            <div className="fixed inset-0 z-0 flex">
                {/* Background - Wheat Field */}
                <div className="w-full h-full bg-cover bg-center relative overflow-hidden" 
                    style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop')",
                    }}>
                    {/* Warm overlay */}
                    <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay"></div>
                    {/* Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60"></div>
                </div>
            </div>

            <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-10 animate-in fade-in zoom-in duration-700">
                    <div className="inline-block mb-6 p-3 px-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                        <span className="font-bold tracking-widest uppercase text-sm text-yellow-300 drop-shadow-md">Вступна кампанія 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-2xl leading-tight">
                        Аграрка <span className="text-yellow-400">кличе</span>
                    </h1>
                    <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                        Зареєструйся зараз, щоб отримати доступ до кабінету вступника та персонального супроводу.
                    </p>
                </div>
                
                <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-700 delay-200 border-t-4 border-yellow-500">
                    <RegistrationForm onComplete={onRegistrationComplete} />
                </div>
            </div>
        </div>
    );
}

// --- Page Components ---

const HomePage = () => {
  const events = [
    { date: '20 Грудня 2025', time: '10:10', title: 'День відкритих дверей', icon: <Home size={18}/> },
    { date: '16 Грудня 2025', title: 'Вебінар «Про спеціальності та практику»', icon: <Users size={18}/> },
    { date: '15 Травня 2026', title: 'Dnipro Education City', icon: <MapPin size={18}/> },
  ];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto space-y-12">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-black mb-4">Вітаємо в кабінеті абітурієнта!</h1>
            <p className="text-lg md:text-xl text-yellow-50 max-w-2xl mb-8">
                Тут ви знайдете всю необхідну інформацію для вступу, зможете розрахувати конкурсний бал та обрати спеціальність мрії.
            </p>
            <div className="flex flex-wrap gap-4">
                <Link to="/admission">
                   <Button className="bg-white text-yellow-600 hover:bg-yellow-50 shadow-none border-0">Почати вступ</Button>
                </Link>
                <Link to="/faculties">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">Обрати фах</Button>
                </Link>
            </div>
         </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Events Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
           <div className="flex items-center justify-between mb-6">
               <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shadow-sm">
                 <Calendar size={28} />
               </div>
               <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full uppercase">Актуально</span>
           </div>
           <h3 className="text-xl font-bold text-gray-800 mb-4">Найближчі події</h3>
           <div className="space-y-4 mb-6 flex-1">
             {events.map((evt, idx) => (
                <div key={idx} className="flex gap-3 items-start p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="text-red-500 mt-1 shrink-0">{evt.icon}</div>
                    <div>
                        <p className="text-xs font-bold text-red-500 uppercase">{evt.date} {evt.time && <span>• {evt.time}</span>}</p>
                        <p className="text-sm font-semibold text-gray-700 leading-tight">{evt.title}</p>
                    </div>
                </div>
             ))}
           </div>
           <Link to="/admission" className="text-yellow-600 text-sm font-bold hover:text-yellow-700 flex items-center gap-1 mt-auto group">
               Більше подій <span className="group-hover:translate-x-1 transition-transform">→</span>
           </Link>
        </div>

        {/* Courses Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
           <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
             <BookOpen size={28} />
           </div>
           <h3 className="text-xl font-bold text-gray-800 mb-3">Підготовчі курси</h3>
           <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
             Гарантуй собі успішний вступ! Підготовка до НМТ-2026 з предметів: Українська мова, Математика, Історія, Біологія.
           </p>
           <Link to="/courses" className="text-yellow-600 text-sm font-bold hover:text-yellow-700 flex items-center gap-1 mt-auto group">
               Записатись <span className="group-hover:translate-x-1 transition-transform">→</span>
           </Link>
        </div>

        {/* Student Life Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
           <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
             <Users size={28} />
           </div>
           <h3 className="text-xl font-bold text-gray-800 mb-3">Студентське життя</h3>
           <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
             Дізнайся про гранти, спорт, самоврядування та фестивалі. ДДАЕУ - це не лише навчання, це яскрава молодість.
           </p>
           <Link to="/student-life" className="text-yellow-600 text-sm font-bold hover:text-yellow-700 flex items-center gap-1 mt-auto group">
               Переглянути <span className="group-hover:translate-x-1 transition-transform">→</span>
           </Link>
        </div>
      </div>
    </div>
  );
};

const FacultiesPage = () => {
  const [activeTab, setActiveTab] = useState<DegreeLevel>(DegreeLevel.BACHELOR);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-gray-800 mb-2 text-center">Факультети та Спеціальності</h1>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Оберіть свій шлях до успіху серед широкого спектру сучасних освітніх програм.</p>
      
      {/* Interactive "Map" Section - Visual Filter */}
      <div className="mb-12 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
             <Map size={16} /> Навігатор спеціальностей
         </h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Агрономія та Біологія', 'Інженерія та Технології', 'Економіка та Бізнес', 'Екологія та Будівництво'].map((sector, idx) => (
                 <div key={idx} className="group cursor-pointer border border-gray-200 rounded-xl p-4 hover:bg-yellow-50 hover:border-yellow-300 transition-all text-center">
                     <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 bg-gray-100 text-gray-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors`}>
                        {idx === 0 && <span className="text-lg">🌱</span>}
                        {idx === 1 && <span className="text-lg">⚙️</span>}
                        {idx === 2 && <span className="text-lg">💼</span>}
                        {idx === 3 && <span className="text-lg">🌍</span>}
                     </div>
                     <span className="text-xs font-bold text-gray-700 group-hover:text-yellow-800">{sector}</span>
                 </div>
             ))}
         </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-20 z-30 bg-gray-50/90 p-2 rounded-full backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 inline-flex mx-auto left-0 right-0 w-max shadow-sm border border-gray-200">
        {Object.values(DegreeLevel).map((level) => (
          <button
            key={level}
            onClick={() => setActiveTab(level)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === level ? 'bg-yellow-50 text-yellow-500 text-white shadow-md transform scale-105' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
          >
            {level}
          </button>
        ))}
      </div>

      {activeTab === DegreeLevel.PHD ? (
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 animate-in zoom-in duration-500">
           <div className="text-center mb-10">
                <div className="inline-block p-4 bg-yellow-100 text-yellow-600 rounded-full mb-6 shadow-sm">
                    <GraduationCap size={48} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Доктор філософії (PhD)</h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">Третій освітньо-науковий рівень вищої освіти. Підготовка здійснюється в аспірантурі університету.</p>
           </div>

           {/* Pricing Cards */}
           <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
             <div className="p-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow text-center">
               <p className="text-xs text-yellow-600 uppercase font-bold mb-2 tracking-wider">Денна форма</p>
               <p className="text-4xl font-black text-gray-800">{PHD_PRICING.fullTime.toLocaleString()} <span className="text-xl font-normal text-gray-500">₴</span></p>
               <p className="text-xs text-gray-400 mt-2">за один рік</p>
             </div>
             <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
               <p className="text-xs text-gray-500 uppercase font-bold mb-2 tracking-wider">Заочна форма</p>
               <p className="text-4xl font-black text-gray-700">{PHD_PRICING.partTime.toLocaleString()} <span className="text-xl font-normal text-gray-500">₴</span></p>
               <p className="text-xs text-gray-400 mt-2">за один рік</p>
             </div>
           </div>

           {/* Specialties Grid */}
           <div className="mb-12">
               <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Ліцензовані спеціальності</h3>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                   {PHD_SPECIALTIES.map((spec, idx) => (
                       <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-yellow-200 transition-colors">
                           <span className="font-mono text-xs font-bold bg-white px-2 py-1 rounded border border-gray-200 text-yellow-600">{spec.code}</span>
                           <span className="text-sm font-medium text-gray-700">{spec.name}</span>
                       </div>
                   ))}
               </div>
           </div>

           {/* Staff Section */}
           <div className="mb-12 bg-white rounded-2xl p-8 border border-yellow-200 shadow-sm">
               <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                   <Users size={24} className="text-yellow-600"/> Відділ аспірантури
               </h3>
               <div className="grid md:grid-cols-2 gap-8">
                   <div className="flex items-center gap-4">
                       <img src={PHD_CONTACT.head.image} alt={PHD_CONTACT.head.name} className="w-20 h-20 rounded-full object-cover border-2 border-yellow-100" />
                       <div>
                           <p className="font-bold text-gray-800">{PHD_CONTACT.head.name}</p>
                           <p className="text-sm text-yellow-600 font-medium">{PHD_CONTACT.head.role}</p>
                       </div>
                   </div>
                   <div className="flex items-center gap-4">
                       <img src={PHD_CONTACT.specialist.image} alt={PHD_CONTACT.specialist.name} className="w-20 h-20 rounded-full object-cover border-2 border-yellow-100" />
                       <div>
                           <p className="font-bold text-gray-800">{PHD_CONTACT.specialist.name}</p>
                           <p className="text-sm text-yellow-600 font-medium">{PHD_CONTACT.specialist.role}</p>
                       </div>
                   </div>
               </div>
           </div>

           {/* Admission Conditions */}
           <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
               <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                   <BookOpen size={24} className="text-blue-500"/> Умови вступу до аспірантури
               </h3>
               
               <div className="grid md:grid-cols-3 gap-8 mb-8">
                   <div>
                       <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Вимоги</h4>
                       <p className="text-sm text-gray-600">Наявність ступеня магістра (або спеціаліста) за відповідною або спорідненою спеціальністю.</p>
                   </div>
                   <div>
                       <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Вступні випробування</h4>
                       <ul className="text-sm text-gray-600 space-y-1">
                           <li>• ЄВІ (ТЗНК + Іноземна мова)</li>
                           <li>• Іспит зі спеціальності</li>
                           <li>• Презентація дослідницької пропозиції</li>
                       </ul>
                   </div>
                   <div>
                       <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Прохідні бали (2025)</h4>
                       <p className="text-sm text-gray-600">
                           Умовою допуску до вступних випробувань є успішне складання ЄВВ з методології наукових досліджень та успішне складання ЄВІ з оцінкою за кожен з його блоків не менше ніж <span className="font-bold text-blue-700">150 балів</span>.
                       </p>
                   </div>
               </div>

               <div className="bg-white/60 rounded-xl p-4 border border-blue-200 flex gap-3 items-start">
                   <AlertTriangle size={20} className="text-blue-500 shrink-0 mt-0.5" />
                   <p className="text-sm text-blue-800 italic">
                       Зверніть увагу: правила прийому на 2026 рік будуть розроблені та затверджені найближчим часом. Інформація базується на правилах 2025 року.
                   </p>
               </div>
           </div>

           <div className="mt-10 pt-8 border-t border-gray-100 text-center">
               <div className="flex justify-center gap-4 flex-wrap">
                  <a href={`tel:${PHD_CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700 transition-all shadow-sm">
                      <Phone size={18} /> {PHD_CONTACT.phone}
                  </a>
                  <a href={`mailto:${PHD_CONTACT.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700 transition-all shadow-sm">
                      <Mail size={18} /> {PHD_CONTACT.email}
                  </a>
               </div>
           </div>
        </div>
      ) : (
        <FacultyList degreeLevel={activeTab} />
      )}
    </div>
  );
};

const AdmissionPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-800 mb-4">Вступна кампанія 2026</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Все, що потрібно знати для успішного вступу до Дніпровського державного аграрно-економічний університет.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Steps */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Етапи вступу</h2>
          
          <div className="relative pl-8 border-l-2 border-yellow-200 space-y-10">
            <div className="relative">
              <span className="absolute -left-[41px] bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">1</span>
              <h3 className="font-bold text-lg text-gray-800">Реєстрація електронного кабінету</h3>
              <p className="text-sm text-gray-600 mt-1">Початок реєстрації: 01 липня 2026 року. Завантажте фото та додаток до атестата.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">2</span>
              <h3 className="font-bold text-lg text-gray-800">Подача заяв</h3>
              <p className="text-sm text-gray-600 mt-1">Прийом заяв: з 19 по 31 липня. Вкажіть пріоритетність (1 — найвища).</p>
            </div>
             <div className="relative">
              <span className="absolute -left-[41px] bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">3</span>
              <h3 className="font-bold text-lg text-gray-800">Отримання рекомендації</h3>
              <p className="text-sm text-gray-600 mt-1">Оприлюднення списків рекомендованих на бюджет: до 05 серпня.</p>
            </div>
             <div className="relative">
              <span className="absolute -left-[41px] bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">4</span>
              <h3 className="font-bold text-lg text-gray-800">Зарахування</h3>
              <p className="text-sm text-gray-600 mt-1">Подача оригіналів документів. Наказ про зарахування.</p>
            </div>
          </div>

           <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mt-8">
              <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2"><Lightbulb size={18} /> Корисна порада</h4>
              <p className="text-sm text-yellow-700">
                Обирайте 1-й та 2-й пріоритет для спеціальностей ДДАЕУ, щоб збільшити шанси на бюджетне місце завдяки галузевому коефіцієнту.
              </p>
           </div>
        </div>

        {/* Calculator */}
        <div className="sticky top-24">
           <ScoreCalculator />
        </div>
      </div>
    </div>
  );
};

const AdmissionCommitteePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
       <div className="text-center mb-10">
           <h1 className="text-4xl font-black text-gray-800 mb-4 flex items-center justify-center gap-3">
               <Users className="text-yellow-500" size={40} />
               Приймальна комісія
           </h1>
           <p className="text-gray-500 max-w-2xl mx-auto">
               Команда професіоналів, яка забезпечує прозорий та комфортний вступ до університету.
           </p>
       </div>

       {/* Hero Photo & Motivation */}
       <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
           <div className="relative h-64 md:h-96">
               <img 
                 src={ADMISSION_COMMITTEE.image} 
                 alt="Команда приймальної комісії" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   // Fallback if local image fails
                   e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-8">
                   <p className="text-white font-bold text-xl md:text-2xl italic text-center drop-shadow-lg max-w-3xl">
                      "{ADMISSION_COMMITTEE.motivation}"
                   </p>
               </div>
           </div>
           
           {/* General Contact Info Bar */}
           <div className="bg-gray-900 text-white p-6 grid md:grid-cols-3 gap-6 text-center">
               <div className="flex flex-col items-center">
                   <Phone className="text-yellow-500 mb-2" size={24} />
                   <p className="font-bold">Гаряча лінія</p>
                   {ADMISSION_COMMITTEE.phones.map(p => <a key={p} href={`tel:${p}`} className="text-gray-300 hover:text-white block">{p}</a>)}
               </div>
               <div className="flex flex-col items-center">
                   <Mail className="text-yellow-500 mb-2" size={24} />
                   <p className="font-bold">Електронна пошта</p>
                   <a href={`mailto:${ADMISSION_COMMITTEE.email}`} className="text-gray-300 hover:text-white">{ADMISSION_COMMITTEE.email}</a>
               </div>
                <div className="flex flex-col items-center">
                   <MapPin className="text-yellow-500 mb-2" size={24} />
                   <p className="font-bold">Адреса</p>
                   <p className="text-gray-300">м. Дніпро, вул. С. Єфремова, 25</p>
               </div>
           </div>
       </div>

       {/* Leadership & Secretariat */}
       <div className="grid md:grid-cols-2 gap-8 mb-16">
           {/* Leadership */}
           <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
               <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                   <BadgeCheck className="text-yellow-600" /> Керівництво
               </h2>
               <div className="space-y-6">
                   {ADMISSION_COMMITTEE.leadership.map((person, idx) => (
                       <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100 flex items-start gap-4">
                           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                               <User size={24} className="text-gray-500" />
                           </div>
                           <div>
                               <p className="font-bold text-gray-800 text-lg">{person.name}</p>
                               <p className="text-sm text-yellow-700 font-medium mb-1">{person.role}</p>
                               <a href={`mailto:${person.email}`} className="text-xs text-gray-500 hover:text-yellow-600">{person.email}</a>
                           </div>
                       </div>
                   ))}
               </div>
           </div>

           {/* Secretariat */}
           <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
               <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                   <Briefcase className="text-gray-600" /> Секретаріат
               </h2>
               <div className="space-y-4">
                   {ADMISSION_COMMITTEE.secretariat.map((person, idx) => (
                       <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                           <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                               <User size={20} className="text-gray-400" />
                           </div>
                           <div>
                               <p className="font-bold text-gray-800">{person.name}</p>
                               <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">{person.role}</p>
                               <a href={`mailto:${person.email}`} className="text-sm text-blue-600 hover:underline">{person.email}</a>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       </div>

       {/* Faculty Selection Commissions */}
       <div>
           <h2 className="text-3xl font-black text-gray-800 mb-8 text-center">Відбіркові комісії факультетів</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {ADMISSION_COMMITTEE.faculties.map((faculty, idx) => (
                   <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 hover:border-yellow-300 transition-all p-6 flex flex-col">
                       <h3 className="font-bold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-100 h-14 flex items-center">
                           {faculty.name}
                       </h3>
                       <div className="space-y-4 flex-1">
                           {faculty.members.map((member, mIdx) => (
                               <div key={mIdx}>
                                   <p className="font-semibold text-gray-700 text-sm">{member.name}</p>
                                   <p className="text-xs text-gray-500">{member.role}</p>
                                   {member.email && <a href={`mailto:${member.email}`} className="text-xs text-blue-500 hover:underline">{member.email}</a>}
                               </div>
                           ))}
                       </div>
                   </div>
               ))}
           </div>
       </div>
    </div>
  );
};

const CoursesPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16 shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 max-w-2xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-4 border border-yellow-500/30">Підготовка до НМТ-2026</span>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Підготовчі курси ДДАЕУ</h1>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Якісна підготовка до національного мультипредметного тесту від викладачів університету. Підвищіть свій конкурсний бал та адаптуйтесь до університетського середовища.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-yellow-500 text-white border-none hover:bg-yellow-600">Записатись онлайн</Button>
                        <Button variant="outline" className="text-white border-white hover:bg-white/10">Завантажити розклад</Button>
                    </div>
                </div>
            </div>

             {/* Contact Person Section */}
             <div className="mb-16 bg-white rounded-2xl p-6 shadow-lg border border-yellow-100 flex flex-col md:flex-row items-center gap-6">
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-100 shrink-0">
                     <img 
                       src={PREP_COURSES_CONTACT.image} 
                       alt={PREP_COURSES_CONTACT.name} 
                       className="w-full h-full object-cover"
                       onError={(e) => {
                           // Fallback to Unsplash
                           e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop";
                       }}
                     />
                 </div>
                 <div className="text-center md:text-left">
                     <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">Куратор курсів</p>
                     <h3 className="text-2xl font-bold text-gray-800 mb-2">{PREP_COURSES_CONTACT.name}</h3>
                     <a href={`tel:${PREP_COURSES_CONTACT.phone}`} className="inline-flex items-center gap-2 text-lg font-bold text-gray-700 hover:text-yellow-600 bg-gray-50 px-4 py-2 rounded-lg transition-colors">
                         <Phone size={20} className="text-yellow-500" />
                         {PREP_COURSES_CONTACT.phone}
                     </a>
                 </div>
                 <div className="md:ml-auto">
                     <Button className="w-full md:w-auto">Замовити дзвінок</Button>
                 </div>
             </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                    { title: "Українська мова", icon: "📚" },
                    { title: "Математика", icon: "📐" },
                    { title: "Історія України", icon: "🏛️" },
                    { title: "Біологія", icon: "🧬" }
                ].map((subject, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-300 transition-all text-center group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{subject.icon}</div>
                        <h3 className="font-bold text-gray-800 text-lg">{subject.title}</h3>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Деталі навчання</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Тривалість</h4>
                                <p className="text-sm text-gray-600">5 місяців (40 академічних годин на предмет). Старт груп: 01 жовтня та 01 лютого.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Формат</h4>
                                <p className="text-sm text-gray-600">Змішаний формат: аудиторні заняття у безпечних корпусах та онлайн-консультації.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                <Award size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Бонус при вступі</h4>
                                <p className="text-sm text-gray-600">Випускники курсів отримують до <span className="text-purple-700 font-bold">10 додаткових балів</span> до конкурсного балу (при вступі на спеціальності, що підтримуються державою).</p>
                            </div>
                        </li>
                    </ul>
                 </div>
                 
                 <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden">
                     <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg text-yellow-900 uppercase">Найкраща ціна</div>
                     <h3 className="text-xl font-bold text-gray-500 uppercase tracking-wider mb-2">Вартість одного предмету</h3>
                     <div className="flex items-baseline gap-1 mb-6">
                         <span className="text-5xl font-black text-gray-800">3000</span>
                         <span className="text-xl text-gray-500 font-medium">грн / курс</span>
                     </div>
                     <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                         Оплата здійснюється одноразово за весь період навчання. Можлива оплата частинами.
                     </p>
                     <div className="space-y-3">
                         <div className="flex justify-between text-sm">
                             <span className="text-gray-600">Всього занять</span>
                             <span className="font-bold text-gray-800">20 занять (по 2 години)</span>
                         </div>
                         <div className="flex justify-between text-sm">
                             <span className="text-gray-600">Матеріали</span>
                             <span className="font-bold text-gray-800">Включено у вартість</span>
                         </div>
                     </div>
                     <Button fullWidth className="mt-8">Оплатити онлайн</Button>
                 </div>
            </div>
        </div>
    );
};

const ImportantPage = () => (
  <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
    <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-gray-800 mb-4">Важливо знати</h1>
        <p className="text-gray-500">Ключова інформація для комфортного навчання та успішної кар'єри</p>
    </div>

    {/* Dorms */}
    <section className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-yellow-200 transition-all">
      <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80 relative">
         <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-transparent transition-colors z-10"></div>
         <img src="https://i.postimg.cc/kGybzB7K/gurtojitok.jpg" alt="Dormitory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-3">
             <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg"><Home size={20} /></div>
             <h2 className="text-2xl font-bold text-gray-800">Гуртожитки</h2>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Іногородні студенти забезпечуються місцями в гуртожитках (100% поселення). Гуртожитки розташовані компактно, поруч з навчальними корпусами або мають зручне транспортне сполучення. Є кімнати для навчання, відпочинку та спортзали.
        </p>
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-xl text-center">
                <span className="block font-black text-yellow-500 text-xl">100%</span>
                <span className="text-xs text-gray-500 font-bold uppercase">Поселення</span>
            </div>
             <div className="bg-gray-50 p-3 rounded-xl text-center">
                <span className="block font-black text-yellow-500 text-xl">Wi-Fi</span>
                <span className="text-xs text-gray-500 font-bold uppercase">Покриття</span>
            </div>
        </div>
      </div>
    </section>

    {/* Practical Training */}
    <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-blue-200 transition-all">
      <div className="order-2 md:order-1">
        <div className="flex items-center gap-2 mb-3">
             <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Briefcase size={20} /></div>
             <h2 className="text-2xl font-bold text-gray-800">Практична підготовка</h2>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Навчання в ДДАЕУ нерозривно пов'язане з практикою. Студенти відвідують провідні агрохолдинги, харчові підприємства та фінансові установи.
        </p>
        <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle size={18} className="text-blue-500 shrink-0"/> Дуальна освіта (навчання + робота)</li>
            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle size={18} className="text-blue-500 shrink-0"/> Сучасні лабораторії та полігони</li>
            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle size={18} className="text-blue-500 shrink-0"/> Екскурсії на виробництво</li>
        </ul>
      </div>
      <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-md h-64 md:h-80 relative">
          <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop" alt="Practical Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
    </section>

    {/* International */}
    <section className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-purple-200 transition-all">
      <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80 relative">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" alt="International Cooperation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-3">
             <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Globe size={20} /></div>
             <h2 className="text-2xl font-bold text-gray-800">Міжнародна діяльність</h2>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Університет співпрацює з 30+ закордонними партнерами. Студенти мають можливість проходити стажування у Франції, Німеччині, Польщі та інших країнах ЄС.
        </p>
        <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle size={18} className="text-purple-500 shrink-0"/> Програми подвійних дипломів</li>
            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle size={18} className="text-purple-500 shrink-0"/> Літні школи за кордоном</li>
            <li className="flex gap-3 text-sm text-gray-700"><CheckCircle size={18} className="text-purple-500 shrink-0"/> Erasmus+ гранти</li>
        </ul>
      </div>
    </section>

    {/* Employment */}
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-xl text-center md:text-left flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
             <h2 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                <Briefcase size={28} className="text-yellow-500"/> Працевлаштування
             </h2>
             <p className="text-gray-300 mb-6">
                90% наших випускників знаходять роботу за фахом протягом першого року після випуску. Центр кар'єри університету допомагає зі складанням резюме та пошуком вакансій.
             </p>
             <Button className="bg-yellow-500 text-white border-none hover:bg-yellow-600">Переглянути вакансії партнерів</Button>
        </div>
        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center border-4 border-yellow-500/30">
            <div className="text-center">
                <span className="block text-3xl font-black text-yellow-500">90%</span>
                <span className="text-xs text-gray-300 font-bold uppercase">Успіху</span>
            </div>
        </div>
    </section>
  </div>
);

const StudentLifePage = () => {
  const cards = [
     { title: "Гранти та конкурси", icon: <Trophy size={24}/>, color: "bg-yellow-100 text-yellow-600", desc: "Стипендіальні програми та наукові гранти для активних студентів." },
     { title: "Спорт", icon: <Award size={24}/>, color: "bg-blue-100 text-blue-600", desc: "15 спортивних секцій: від футболу до кіберспорту. Сучасний спорткомплекс." },
     { title: "Самоврядування", icon: <Users size={24}/>, color: "bg-purple-100 text-purple-600", desc: "Студентська рада, яка реально впливає на життя університету." },
     { title: "Творчість", icon: <Music size={24}/>, color: "bg-pink-100 text-pink-600", desc: "Вокальні та танцювальні колективи, КВК, театральна студія." },
     { title: "Хакатони", icon: <Code size={24}/>, color: "bg-green-100 text-green-600", desc: "Змагання IT-талантів та інженерні челенджі." },
     { title: "Дозвілля", icon: <Heart size={24}/>, color: "bg-red-100 text-red-600", desc: "Кіноклуби, квести, вечірки та екскурсії Україною." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-gray-800 mb-4">Студентське життя</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
                ДДАЕУ — це простір твоїх можливостей. Навчання — це лише початок!
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                        {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
            ))}
        </div>

        {/* Gallery Preview (Static for now) */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden relative">
            <div className="text-center mb-8 relative z-10">
                <h2 className="text-2xl font-bold text-gray-800">Галерея емоцій</h2>
                <p className="text-gray-500 text-sm">Наші студенти — найяскравіші!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80 hover:opacity-100 transition-opacity">
                 {[1,2,3,4].map(i => (
                     <div key={i} className="rounded-xl overflow-hidden h-40 bg-gray-200">
                         <img src={`https://images.unsplash.com/photo-${i === 1 ? '1523580494863-6f3031224c94' : i === 2 ? '1511632765486-a01980968fc3' : i === 3 ? '1509062522246-3755977927d7' : '1529333441289-385001552207'}?q=80&w=400&auto=format&fit=crop`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                     </div>
                 ))}
            </div>
        </div>
    </div>
  );
};


// --- Main App Component ---

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistrationComplete = (data: UserRegistration) => {
    // In a real app, send data to backend API here
    console.log("Registered:", data);
    setIsRegistered(true);
    // Optionally save to localStorage
    // localStorage.setItem('dsau_user', JSON.stringify(data));
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
        {!isRegistered ? (
             <LandingPage onRegistrationComplete={handleRegistrationComplete} />
        ) : (
          <>
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/faculties" element={<FacultiesPage />} />
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/committee" element={<AdmissionCommitteePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/important" element={<ImportantPage />} />
                <Route path="/student-life" element={<StudentLifePage />} />
                <Route path="/admin" element={<div className="p-10 text-center"><h1>Панель адміністратора</h1><p>Доступ обмежено. Ця сторінка в розробці (Фаза 5).</p></div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
            <GeminiChat />
          </>
        )}
      </div>
    </HashRouter>
  );
}

export default App;

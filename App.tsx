import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { FacultyList } from './components/FacultyList';
import { RegistrationForm, RegistrationSuccess } from './components/RegistrationForm';
import { GeminiChat } from './components/GeminiChat';
import { ScoreCalculator } from './components/ScoreCalculator';
import { DegreeLevel, UserRegistration } from './types';
import { PHD_PRICING, SOCIAL_LINKS, ADMISSION_COMMITTEE, PREP_COURSES_CONTACT } from './constants';
import { Menu, X, GraduationCap, BookOpen, Phone, MapPin, Globe, CheckCircle, Lightbulb, Calendar, Mail, Instagram, ExternalLink, Briefcase, Home, Award, Music, Users, Code, Trophy, Map, MessageCircle } from 'lucide-react';
import { Button } from './components/ui/Button';

// --- Icons wrapper for Tiktok which is not in lucide-react (using generic music icon or SVG) ---
const TikTokIcon = ({ size = 24, className = "" }) => (
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
            <GraduationCap size={32} strokeWidth={2.5} />
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
            <GraduationCap size={32} className="text-yellow-500" />
            ДДАЕУ
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">Дніпровський державний аграрно-економічний університет — провідний заклад вищої освіти України з європейськими стандартами навчання.</p>
          <p className="text-xs text-gray-500">© 2026 Вступна кампанія</p>
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
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
             {/* Hero Section with Split Background */}
            <div className="fixed inset-0 z-0">
                {/* Left Side Background - Agri */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-left" 
                    style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-5848c4282704?q=80&w=1000&auto=format&fit=crop')",
                    filter: "grayscale(30%) contrast(110%) brightness(0.9)"
                    }}>
                <div className="absolute inset-0 bg-yellow-500/80 mix-blend-multiply"></div>
                </div>

                {/* Right Side Background - Econ */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-right" 
                    style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop')",
                    filter: "grayscale(30%) contrast(110%) brightness(0.9)"
                    }}>
                <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
                </div>
                
                {/* Overlay to unify */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-0"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
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
                
                <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-700 delay-200">
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
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === level ? 'bg-yellow-500 text-white shadow-md transform scale-105' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
          >
            {level}
          </button>
        ))}
      </div>

      {activeTab === DegreeLevel.PHD ? (
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center animate-in zoom-in duration-500">
           <div className="inline-block p-4 bg-yellow-100 text-yellow-600 rounded-full mb-6 shadow-sm">
             <GraduationCap size={48} />
           </div>
           <h2 className="text-3xl font-bold text-gray-800 mb-4">Доктор філософії (PhD)</h2>
           <p className="text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">Третій освітньо-науковий рівень вищої освіти. Підготовка здійснюється в аспірантурі університету за ліцензованими спеціальностями.</p>
           <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
             <div className="p-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
               <p className="text-xs text-yellow-600 uppercase font-bold mb-2 tracking-wider">Денна форма</p>
               <p className="text-4xl font-black text-gray-800">{PHD_PRICING.fullTime.toLocaleString()} <span className="text-xl font-normal text-gray-500">₴</span></p>
               <p className="text-xs text-gray-400 mt-2">за один рік</p>
             </div>
             <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <p className="text-xs text-gray-500 uppercase font-bold mb-2 tracking-wider">Заочна форма</p>
               <p className="text-4xl font-black text-gray-700">{PHD_PRICING.partTime.toLocaleString()} <span className="text-xl font-normal text-gray-500">₴</span></p>
               <p className="text-xs text-gray-400 mt-2">за один рік</p>
             </div>
           </div>
           <div className="mt-10 pt-8 border-t border-gray-100">
               <p className="text-sm text-gray-500 mb-4 font-medium">Маєте питання щодо аспірантури?</p>
               <div className="flex justify-center gap-4 flex-wrap">
                  <a href="tel:+380561234567" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700 transition-all shadow-sm">
                      <Phone size={18} /> Відділ аспірантури
                  </a>
                  <a href="mailto:phd@dsau.dp.ua" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700 transition-all shadow-sm">
                      <Mail size={18} /> Написати email
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
          Все, що потрібно знати для успішного вступу до Дніпровського державного аграрно-економічного університету.
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
    <div className="max-w-4xl mx-auto px-4 py-12">
       <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
           <div className="md:flex">
               {/* Photo Section */}
               <div className="md:w-1/2 relative h-64 md:h-auto">
                   <img 
                     src={ADMISSION_COMMITTEE.image} 
                     alt="Приймальна комісія" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       // Fallback if google drive link fails
                       e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop";
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                       <p className="text-white font-bold text-xl italic leading-relaxed drop-shadow-md">
                          "{ADMISSION_COMMITTEE.motivation}"
                       </p>
                   </div>
               </div>
               
               {/* Contact Section */}
               <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gray-50">
                   <h2 className="text-3xl font-black text-gray-800 mb-6 flex items-center gap-3">
                       <Users className="text-yellow-600" size={32} />
                       Приймальна комісія
                   </h2>
                   
                   <div className="space-y-6 mb-8">
                       <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">
                               <Phone size={20} />
                           </div>
                           <div>
                               <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Телефони</p>
                               {ADMISSION_COMMITTEE.phones.map(phone => (
                                   <a key={phone} href={`tel:${phone}`} className="block text-lg font-bold text-gray-800 hover:text-yellow-600 transition-colors">
                                       {phone}
                                   </a>
                               ))}
                           </div>
                       </div>
                       
                       <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                               <Mail size={20} />
                           </div>
                           <div>
                               <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p>
                               <a href={`mailto:${ADMISSION_COMMITTEE.email}`} className="block text-lg font-bold text-gray-800 hover:text-yellow-600 transition-colors">
                                   {ADMISSION_COMMITTEE.email}
                               </a>
                           </div>
                       </div>
                   </div>

                   <Button className="w-full justify-center gap-2">
                       <MessageCircle size={18} />
                       Написати нам
                   </Button>
               </div>
           </div>

           {/* Team Grid */}
           <div className="p-8 md:p-12 border-t border-gray-100 bg-white">
               <h3 className="text-xl font-bold text-gray-800 mb-6">Наша команда</h3>
               <div className="grid md:grid-cols-3 gap-6">
                   {ADMISSION_COMMITTEE.team.map((member, idx) => (
                       <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                           <p className="font-bold text-gray-800">{member.name}</p>
                           <p className="text-sm text-yellow-600">{member.role}</p>
                       </div>
                   ))}
               </div>
               <p className="text-xs text-gray-400 mt-6 text-center italic">
                   Ми працюємо для того, щоб ваш вступ був максимально комфортним та прозорим.
               </p>
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
                           e.currentTarget.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop";
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
         <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop" alt="Dormitory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
    <section className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-green-200 transition-all">
      <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80 relative">
         <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" alt="International Students" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div>
         <div className="flex items-center gap-2 mb-3">
             <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Globe size={20} /></div>
             <h2 className="text-2xl font-bold text-gray-800">Міжнародні програми</h2>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Світ відкритий для тебе! Університет має партнерські угоди з закладами Франції, Німеччини, Польщі та США.
        </p>
         <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-100">Erasmus+</span>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-100">DAAD</span>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-100">Подвійні дипломи</span>
         </div>
      </div>
    </section>

     {/* Employment */}
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl shadow-xl text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Працевлаштування</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            95% наших випускників знаходять роботу за фахом протягом перших 6 місяців після завершення навчання. Центр кар'єри ДДАЕУ допомагає зі складанням резюме та пошуком вакансій.
        </p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white border-none">Зв'язатися з Центром кар'єри</Button>
    </section>
  </div>
);

const StudentLifePage = () => (
    <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
            <span className="font-bold text-yellow-600 uppercase tracking-widest text-xs mb-2 block">Більше ніж навчання</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Студентське життя</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Час розкрити свої таланти! В університеті створені всі умови для творчого, спортивного та наукового розвитку.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Grants */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                    <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Гранти та Конкурси</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Студенти постійно беруть участь у наукових конкурсах, стартап-батлах та отримують іменні стипендії за досягнення.
                </p>
            </div>

            {/* Sport */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <Trophy size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Спорт</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Власні спортивні зали, секції з волейболу, футболу, вільної боротьби та важкої атлетики. Будь у формі!
                </p>
            </div>

            {/* Self-Governance */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Самоврядування</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Студентська рада реально впливає на життя університету. Це школа лідерства та менеджменту.
                </p>
            </div>

             {/* Hackathons */}
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Code size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Хакатони</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Регулярні заходи для ІТ та агро-інженерних спеціальностей. Створюй проекти, що змінюють світ.
                </p>
            </div>

            {/* Festivals */}
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Music size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Фестивалі</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    "Студентська весна", "Міс та Містер ДДАЕУ", КВК. Творче життя вирує цілий рік!
                </p>
            </div>

            {/* Leisure */}
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <ExternalLink size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Дозвілля</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Кіновечори, настільні ігри, екскурсії містом та подорожі Україною разом з профкомом.
                </p>
            </div>
        </div>
    </div>
);

const App = () => {
  const [registeredUser, setRegisteredUser] = useState<UserRegistration | null>(null);

  if (!registeredUser) {
      return (
          <>
            <LandingPage onRegistrationComplete={setRegisteredUser} />
            {/* We can still include the chat for help during registration */}
            <GeminiChat /> 
          </>
      );
  }

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faculties" element={<FacultiesPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/committee" element={<AdmissionCommitteePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/important" element={<ImportantPage />} />
            <Route path="/student-life" element={<StudentLifePage />} />
            {/* Catch-all route to redirect back home if something breaks */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <GeminiChat />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
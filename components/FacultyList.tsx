import React, { useState } from 'react';
import { BACHELOR_DATA, MASTER_DATA } from '../constants';
import { DegreeLevel, Faculty } from '../types';
import { ChevronDown, ChevronUp, BookOpen, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

interface FacultyListProps {
  degreeLevel: DegreeLevel;
}

export const FacultyList: React.FC<FacultyListProps> = ({ degreeLevel }) => {
  const [openFacultyId, setOpenFacultyId] = useState<string | null>(null);
  
  const data: Faculty[] = degreeLevel === DegreeLevel.MASTER ? MASTER_DATA : BACHELOR_DATA;

  // If PhD selected, we just show a simple card as it is uniform
  if (degreeLevel === DegreeLevel.PHD) {
    return null; // Handled in parent component
  }

  const toggleFaculty = (id: string) => {
    setOpenFacultyId(openFacultyId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {data.map((faculty) => (
        <div 
          key={faculty.id} 
          className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
        >
          <button 
            onClick={() => toggleFaculty(faculty.id)}
            className="w-full flex flex-col md:flex-row text-left focus:outline-none"
          >
            {/* Image Section */}
            <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
               <div className="absolute inset-0 bg-yellow-500/20 group-hover:bg-transparent transition-colors z-10"></div>
               <img 
                 src={faculty.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'} 
                 alt={faculty.name} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute bottom-0 left-0 p-4 z-20 md:hidden bg-gradient-to-t from-black/70 to-transparent w-full">
                  <span className="text-white font-bold text-lg shadow-black drop-shadow-md">{faculty.name}</span>
               </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-center relative">
              <div className="hidden md:flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800 text-xl">{faculty.name}</span>
                {openFacultyId === faculty.id ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-gray-400 group-hover:text-yellow-500 transition-colors" />}
              </div>
              
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 md:line-clamp-3">
                 Факультет пропонує сучасні освітні програми, практичну підготовку та можливості для стажування. Натисніть, щоб переглянути спеціальності.
              </p>

              <div className="flex items-center gap-2 text-xs text-yellow-600 font-semibold uppercase tracking-wider">
                 <BookOpen size={16} />
                 {faculty.specialties.length} спеціальностей
              </div>
              
              {/* Mobile Indicator */}
              <div className="md:hidden flex justify-center mt-2">
                  {openFacultyId === faculty.id ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-gray-400" />}
              </div>
            </div>
          </button>

          {/* Expanded Content with Animation */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFacultyId === faculty.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="border-t border-gray-100 bg-gray-50/50 p-4 md:p-6">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                 <BookOpen size={16} className="text-yellow-500"/> Спеціальності та Вартість (рік)
              </h4>
              <div className="grid gap-3 mb-6">
                {faculty.specialties.map((spec) => (
                  <div key={spec.code} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center bg-gray-100 text-gray-700 font-bold text-xs px-2.5 py-1 rounded-md font-mono border border-gray-200">
                        {spec.code}
                      </span>
                      <span className="font-medium text-gray-800">{spec.name}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm ml-10 sm:ml-0">
                       <div className="flex flex-col items-end">
                          <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wide">Денна</span>
                          <span className="font-bold text-yellow-600 text-base">{spec.priceFullTime?.toLocaleString()} ₴</span>
                       </div>
                       {spec.pricePartTime !== '-' && (
                         <div className="flex flex-col items-end pl-4 border-l border-gray-200">
                            <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wide">Заочна</span>
                            <span className="font-bold text-gray-700 text-base">{spec.pricePartTime?.toLocaleString()} ₴</span>
                         </div>
                       )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Зв'язок з деканатом</h4>
                <div className="flex flex-wrap gap-3">
                  {faculty.phone && (
                    <a href={`tel:${faculty.phone}`} className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700 transition-all shadow-sm">
                      <Phone size={16} />
                      {faculty.phone}
                    </a>
                  )}
                  {faculty.email && (
                    <a href={`mailto:${faculty.email}`} className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700 transition-all shadow-sm">
                      <Mail size={16} />
                      Написати
                    </a>
                  )}
                   <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-yellow-100 border border-yellow-200 rounded-lg text-sm font-medium text-yellow-700 hover:bg-yellow-200 transition-colors ml-auto shadow-sm">
                      <MessageCircle size={16} />
                      Задати питання
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
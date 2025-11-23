import React, { useState } from 'react';
import { UserRegistration, DegreeLevel, EducationBase } from '../types';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

interface RegistrationFormProps {
  onComplete: (data: UserRegistration) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserRegistration>({
    firstName: '',
    lastName: '',
    phone: '+380',
    degree: '',
    educationBase: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    
    // Always enforce the +380 prefix
    if (!val.startsWith('+380')) {
        // If user tries to delete the prefix or part of it, reset to +380
        val = '+380'; 
    }
    
    // Only allow digits after the prefix
    const digits = val.slice(4).replace(/\D/g, '');
    const cleanValue = `+380${digits}`;

    // Limit length (e.g. +380 XX XXX XX XX = 13 chars)
    if (cleanValue.length <= 13) {
      setFormData(prev => ({ ...prev, phone: cleanValue }));
    }
  };

  const isStep1Valid = formData.firstName.trim().length > 0 && 
                       formData.lastName.trim().length > 0 && 
                       formData.phone.length === 13; // +380 + 9 digits

  const isStep2Valid = !!formData.degree;
  const isStep3Valid = !!formData.educationBase;

  const handleNext = () => {
    if (step === 1 && isStep1Valid) setStep(2);
    if (step === 2 && isStep2Valid) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStep3Valid) {
      onComplete(formData);
    }
  };

  if (step === 1) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Реєстрація абітурієнта</h2>
        <p className="text-gray-500 mb-6 text-sm">Почніть свій шлях до якісної освіти вже зараз.</p>
        <div className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Ім'я</label>
            <input 
              id="firstName"
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition-colors"
              placeholder="Тарас"
              autoComplete="given-name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Прізвище</label>
            <input 
              id="lastName"
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition-colors"
              placeholder="Шевченко"
              autoComplete="family-name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
            <input 
              id="phone"
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handlePhoneChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition-colors"
              placeholder="+380XXXXXXXXX"
              autoComplete="tel"
            />
            <p className="text-xs text-gray-400 mt-1">Формат: +380XXXXXXXXX</p>
          </div>
          <Button fullWidth onClick={handleNext} disabled={!isStep1Valid}>Далі</Button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-gray-600 mb-4">← Назад</button>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Оберіть бажаний ступінь</h2>
        <div className="space-y-3">
          {Object.values(DegreeLevel).map((level) => (
            <label key={level} className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.degree === level ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-yellow-200'}`}>
              <div className="flex items-center">
                <input 
                  type="radio" name="degree" value={level} 
                  checked={formData.degree === level} 
                  onChange={handleChange} 
                  className="w-4 h-4 text-yellow-600 focus:ring-yellow-500"
                />
                <span className="ml-3 font-medium text-gray-800">{level}</span>
              </div>
            </label>
          ))}
        </div>
        <div className="mt-6">
          <Button fullWidth onClick={handleNext} disabled={!isStep2Valid}>Далі</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <button onClick={() => setStep(2)} className="text-sm text-gray-400 hover:text-gray-600 mb-4">← Назад</button>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Ваша попередня освіта</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.values(EducationBase).map((edu) => (
          <label key={edu} className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.educationBase === edu ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-yellow-200'}`}>
            <div className="flex items-center">
              <input 
                type="radio" name="educationBase" value={edu} 
                checked={formData.educationBase === edu} 
                onChange={handleChange} 
                className="w-4 h-4 text-yellow-600 focus:ring-yellow-500"
              />
              <span className="ml-3 font-medium text-gray-800">{edu}</span>
            </div>
          </label>
        ))}
        <div className="mt-6">
          <Button type="submit" fullWidth disabled={!isStep3Valid}>Завершити реєстрацію</Button>
        </div>
      </form>
    </div>
  );
};

export const RegistrationSuccess = () => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 text-center">
    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <CheckCircle2 size={32} />
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Вітаємо!</h2>
    <p className="text-gray-600 mb-6">Ваші дані успішно отримані. Представник приймальної комісії зв'яжеться з вами найближчим часом для уточнення деталей вступу на 2026 рік.</p>
    <Button variant="outline" onClick={() => window.location.reload()}>На головну</Button>
  </div>
);
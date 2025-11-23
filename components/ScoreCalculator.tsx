import React, { useState, useEffect } from 'react';
import { BACHELOR_DATA, getCoefficientsForFaculty, SUBJECTS } from '../constants';
import { Button } from './ui/Button';
import { Calculator, RefreshCw, AlertCircle } from 'lucide-react';

export const ScoreCalculator: React.FC = () => {
  const [facultyId, setFacultyId] = useState(BACHELOR_DATA[0].id);
  const [specialtyCode, setSpecialtyCode] = useState(BACHELOR_DATA[0].specialties[0].code);
  const [scores, setScores] = useState({
    p1: 150, // Ukr Lang
    p2: 150, // Math
    p3: 150, // History
    p4: 150, // Elective
  });
  const [electiveSubject, setElectiveSubject] = useState(SUBJECTS[0].id);
  const [ou, setOu] = useState(0); // Preparatory courses points (0-10)
  const [hasSectoralCoeff, setHasSectoralCoeff] = useState(true); // GK
  const [hasRegionalCoeff, setHasRegionalCoeff] = useState(true); // RK
  
  const [result, setResult] = useState<number | null>(null);

  const currentFaculty = BACHELOR_DATA.find(f => f.id === facultyId) || BACHELOR_DATA[0];
  const coefficients = getCoefficientsForFaculty(facultyId);

  const handleScoreChange = (key: keyof typeof scores, value: string) => {
    let num = parseInt(value) || 0;
    if (num > 200) num = 200;
    setScores(prev => ({ ...prev, [key]: num }));
  };

  const calculate = () => {
    // Coefficients
    const k1 = coefficients.k1;
    const k2 = coefficients.k2;
    const k3 = coefficients.k3;
    const k4 = coefficients.k4_map[electiveSubject] || 0.2; // Default if missing
    const k4_max = coefficients.k4_max;
    
    // Formula: (K1*P1 + K2*P2 + K3*P3 + K4*P4) / (K1 + K2 + K3 + (K4max + K4)/2) + OU
    // Note: Assuming KT (Creative Contest) is 0 for these specialties.

    const numerator = (k1 * scores.p1) + (k2 * scores.p2) + (k3 * scores.p3) + (k4 * scores.p4);
    
    // The specific denominator formula requested
    const denominator = k1 + k2 + k3 + (k4_max + k4) / 2;

    let kb = (numerator / denominator) + ou;

    // Apply standard multipliers (GK, RK) if they are meant to be applied *after* the base calculation
    // Usually GK (1.02) and RK (1.04) are multipliers. 
    // However, the user prompt asked to "optionally add possibility to consider GK, RK".
    // Typically: Final = KB * GK * RK.
    
    if (hasSectoralCoeff) kb *= 1.02; // Typical GK
    if (hasRegionalCoeff) kb *= 1.04; // Typical RK for Dnipro (sometimes 1.07 or 1.02 depending on year, sticking to 1.04 as common)

    // Cap at 200
    if (kb > 200) kb = 200;

    setResult(kb);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
      <div className="bg-yellow-500 p-4 text-white flex items-center gap-2">
        <Calculator size={24} />
        <h3 className="font-bold text-lg">Калькулятор конкурсного балу</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Specialty Selection */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Факультет</label>
            <select 
              value={facultyId} 
              onChange={(e) => {
                setFacultyId(e.target.value);
                // Reset specialty to first of new faculty
                const newFac = BACHELOR_DATA.find(f => f.id === e.target.value);
                if (newFac) setSpecialtyCode(newFac.specialties[0].code);
              }}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none text-sm"
            >
              {BACHELOR_DATA.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Спеціальність</label>
            <select 
              value={specialtyCode} 
              onChange={(e) => setSpecialtyCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none text-sm"
            >
              {currentFaculty.specialties.map(s => (
                <option key={s.code} value={s.code}>{s.code} {s.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="h-px bg-gray-100"></div>

        {/* Scores Input */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">Укр. мова (П1)</label>
            <input 
              type="number" min="100" max="200"
              value={scores.p1}
              onChange={(e) => handleScoreChange('p1', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-center font-mono"
            />
            <span className="text-xs text-yellow-600 block text-center mt-1">k = {coefficients.k1}</span>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">Математика (П2)</label>
            <input 
              type="number" min="100" max="200"
              value={scores.p2}
              onChange={(e) => handleScoreChange('p2', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-center font-mono"
            />
            <span className="text-xs text-yellow-600 block text-center mt-1">k = {coefficients.k2}</span>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">Історія (П3)</label>
            <input 
              type="number" min="100" max="200"
              value={scores.p3}
              onChange={(e) => handleScoreChange('p3', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-center font-mono"
            />
            <span className="text-xs text-yellow-600 block text-center mt-1">k = {coefficients.k3}</span>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">4-й предмет (П4)</label>
            <input 
              type="number" min="100" max="200"
              value={scores.p4}
              onChange={(e) => handleScoreChange('p4', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-center font-mono"
            />
            <div className="mt-1">
               <select 
                 value={electiveSubject} 
                 onChange={(e) => setElectiveSubject(e.target.value)}
                 className="w-full text-xs p-1 border border-gray-200 rounded"
               >
                 {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
               </select>
               <span className="text-xs text-yellow-600 block text-center mt-1">
                 k = {coefficients.k4_map[electiveSubject] || 0.2}
               </span>
            </div>
          </div>
        </div>

        {/* Extra Points & Multipliers */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Бали за підготовчі курси (ОУ)</label>
            <div className="flex items-center gap-2">
               <input 
                 type="range" min="0" max="10" step="1"
                 value={ou}
                 onChange={(e) => setOu(parseInt(e.target.value))}
                 className="w-24 accent-yellow-500"
               />
               <span className="font-bold w-6 text-center">{ou}</span>
            </div>
          </div>
          
          <div className="flex gap-4 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={hasRegionalCoeff}
                onChange={(e) => setHasRegionalCoeff(e.target.checked)}
                className="w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500 accent-yellow-500"
              />
              <span className="text-sm text-gray-600">Регіональний коефіцієнт (РК)</span>
            </label>
             <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={hasSectoralCoeff}
                onChange={(e) => setHasSectoralCoeff(e.target.checked)}
                className="w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500 accent-yellow-500"
              />
              <span className="text-sm text-gray-600">Галузевий коефіцієнт (ГК)</span>
            </label>
          </div>
        </div>

        <Button onClick={calculate} fullWidth>
          Розрахувати
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-in zoom-in duration-300">
             <p className="text-sm text-green-700 mb-1">Ваш конкурсний бал:</p>
             <p className="text-4xl font-black text-green-600">{result.toFixed(3)}</p>
             <p className="text-xs text-gray-400 mt-2">Розрахунок є попереднім. Офіційний бал визначається ЄДЕБО.</p>
          </div>
        )}
        
        <div className="flex gap-2 items-start text-xs text-gray-400 mt-4 bg-yellow-50/50 p-3 rounded">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <p>Формула враховує оновлений підхід до розрахунку знаменника: (К1 + К2 + К3 + (К4макс + К4)/2)</p>
        </div>
      </div>
    </div>
  );
};

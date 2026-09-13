import React, { useState } from 'react';
import {
  CloudSunRain,
  Thermometer,
  Wind,
  Droplets,
  AlertTriangle,
  MapPin,
  Calendar,
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Sun,
  CloudRain
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { locationsData } from '../data/weatherData';

export default function WeatherPage({ onOpenDownload }) {
  const { language } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState(locationsData[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <CloudSunRain className="w-4 h-4 text-blue-700" />
          <span>{language === 'ta' ? 'விவசாய வானிலை மையம்' : 'Agricultural Weather Station'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          {language === 'ta' ? 'வட்டார வானிலை & துல்லிய விவசாய எச்சரிக்கை' : 'Hyperlocal Weather & Agricultural Forecasts'}
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          {language === 'ta'
            ? 'மழை எப்போது பெய்யும், எப்போது பாசனம் செய்ய வேண்டும், எப்போது உரம் தெளிக்க வேண்டும் என்பதை துல்லியமாக அறிந்து உங்கள் நேரத்தையும் பயிரையும் பாதுகாக்கவும்.'
            : 'Plan irrigation, fertilizer application, and crop harvest with pinpoint 3-hour rainfall radar, wind forecasts, and soil moisture tracking.'}
        </p>
      </div>

      {/* Regional Selector Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200 shadow-soft flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-stone-700 font-bold text-sm">
          <MapPin className="w-4 h-4 text-agri-600" />
          <span>{language === 'ta' ? 'வட்டாரத்தைத் தேர்வு செய்யவும்:' : 'Select Agricultural Zone:'}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {locationsData.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocation(loc)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                selectedLocation.id === loc.id
                  ? 'bg-agri-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {language === 'ta' ? loc.nameTa : loc.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Live Weather Overview Card */}
      <div className="bg-gradient-to-br from-blue-900 via-sky-900 to-emerald-900 rounded-[32px] p-6 sm:p-10 text-white shadow-elevated relative overflow-hidden">
        {/* Background Clouds Silhouette */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Main Temperature & Location */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-mono text-emerald-300">
                LIVE METEOROLOGICAL RADAR
              </span>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-6xl sm:text-7xl font-extrabold tracking-tight">
                {selectedLocation.temp}
              </span>
              <div>
                <p className="text-lg sm:text-xl font-bold text-sky-200">
                  {language === 'ta' ? selectedLocation.conditionTa : selectedLocation.conditionEn}
                </p>
                <p className="text-xs text-sky-300 font-medium">
                  {language === 'ta' ? selectedLocation.nameTa : selectedLocation.nameEn}
                </p>
              </div>
            </div>

            {/* Smart Advisory Banner */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1.5">
              <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>{language === 'ta' ? 'இன்றைய விவசாய எச்சரிக்கை' : 'Agri-Advisory Alert'}</span>
              </div>
              <p className="text-sm text-white/95 leading-relaxed font-medium">
                {language === 'ta' ? selectedLocation.advisoryTa : selectedLocation.advisoryEn}
              </p>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-sky-300 text-xs">
                <CloudRain className="w-4 h-4" />
                <span>{language === 'ta' ? 'மழை வாய்ப்பு' : 'Rain Probability'}</span>
              </div>
              <div className="text-2xl font-bold">{selectedLocation.rainfallProb}</div>
              <p className="text-[11px] text-sky-200">Radar Doppler 3-hour radar</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-sky-300 text-xs">
                <Droplets className="w-4 h-4" />
                <span>{language === 'ta' ? 'காற்றின் ஈரப்பதம்' : 'Relative Humidity'}</span>
              </div>
              <div className="text-2xl font-bold">{selectedLocation.humidity}</div>
              <p className="text-[11px] text-sky-200">Evapotranspiration factor</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-sky-300 text-xs">
                <Wind className="w-4 h-4" />
                <span>{language === 'ta' ? 'காற்றின் வேகம்' : 'Wind Speed'}</span>
              </div>
              <div className="text-2xl font-bold">{selectedLocation.windSpeed}</div>
              <p className="text-[11px] text-sky-200">Safe for spray below 15 km/h</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-sky-300 text-xs">
                <Thermometer className="w-4 h-4" />
                <span>{language === 'ta' ? 'மண் ஈரப்பதம்' : 'Soil Moisture'}</span>
              </div>
              <div className="text-2xl font-bold">{selectedLocation.soilMoisture}</div>
              <p className="text-[11px] text-sky-200">At 10cm root zone depth</p>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Agricultural Outlook Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div>
            <h3 className="text-xl font-bold text-stone-900">
              {language === 'ta' ? '7 நாள் விவசாய வானிலை முன்னறிவிப்பு' : '7-Day Farming Weather Forecast'}
            </h3>
            <p className="text-xs text-stone-500">
              {language === 'ta' ? selectedLocation.nameTa : selectedLocation.nameEn}
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
            TNAU Verified Data
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {selectedLocation.weeklyForecast.map((w, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border text-center space-y-2 transition-all ${
                idx === 0
                  ? 'bg-blue-50/70 border-blue-200 shadow-xs'
                  : 'bg-stone-50/60 border-stone-200/80 hover:bg-white'
              }`}
            >
              <p className="text-xs font-bold text-stone-600 uppercase tracking-wider">{w.day}</p>
              <div className="text-2xl">
                {w.icon.includes('rain') ? '🌧️' : w.icon.includes('sun') ? '☀️' : '⛅'}
              </div>
              <p className="text-sm font-bold text-stone-900">{w.temp}</p>
              <div className="inline-block px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[10px] font-bold">
                {w.rain} Rain
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How Weather Helps Farmers Section */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {language === 'ta' ? 'வானிலை தகவல் விவசாயத்திற்கு எப்படி உதவுகிறது?' : 'How Weather Intelligence Optimizes Farming Operations'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
              💧
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'பாசன நீர் மேலாண்மை' : 'Irrigation Scheduling'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'அடுத்த 24 மணி நேரத்தில் மழை வாய்ப்பு இருந்தால், பம்பு செட்டை இயக்கி மின்சாரத்தையும் நீரையும் வீணடிக்காமல் தவிர்க்கலாம்.'
                : 'Skip unnecessary canal or borewell pumping when rain is imminent, saving electrical units and preventing root rot.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">
              🚜
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'பூச்சி மருந்து & உரம் தெளிப்பு' : 'Spraying & Fertilizing Window'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'காற்றின் வேகம் 15 கி.மீ-க்கு குறைவாக உள்ளபோதும், மழை இல்லாதபோதும் மருந்து தெளித்தால் மருந்து வீணாகாது.'
                : 'Spray bio-pesticides when wind velocity is below 15 km/h to avoid drift, and ensure at least 4 dry hours for foliar absorption.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
              🌾
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'அறுவடை & தானியம் உலர்த்துதல்' : 'Harvesting & Grain Drying'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'திடீர் மழையினால் அறுவடை செய்த நெல் களத்தில் நனையாமல் முன்னரே பாதுகாப்பான களஞ்சியத்திற்கு மாற்றலாம்.'
                : 'Thresh and dry your harvested paddy and pulses safely during guaranteed dry spans, preventing mold and grain discoloration.'}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-blue-50 border border-blue-200 text-center space-y-4">
        <h3 className="text-2xl font-bold text-blue-950">
          {language === 'ta' ? 'உங்கள் கிராமத்திற்கான நேரடி வானிலை எச்சரிக்கையைப் பெறுங்கள்' : 'Get SMS & Push Alerts for Your Exact Village'}
        </h3>
        <p className="text-sm text-blue-800 max-w-xl mx-auto">
          {language === 'ta'
            ? 'உழவனின் நண்பன் செயலியை நிறுவி உங்கள் இருப்பிடத்தை உள்ளிட்டால், புயல் மற்றும் மழை எச்சரிக்கைகள் தானாகவே அறிவிக்கப்படும்.'
            : 'Download the app to receive instant sound alerts for cyclones, sudden lightning storms, and pest-favorable humidity spikes.'}
        </p>
        <button
          onClick={onOpenDownload}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all"
        >
          <CloudSunRain className="w-4 h-4" />
          <span>{language === 'ta' ? 'வானிலை செயலியைப் பதிவிறக்க' : 'Download Weather Alert App'}</span>
        </button>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import {
  Flower2,
  Sun,
  Ruler,
  Droplets,
  Sprout,
  CheckCircle2,
  Camera,
  Sparkles,
  ArrowRight,
  Info,
  Calendar,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { terracePresets, plantsCatalogue } from '../data/terracePlantsData';

export default function PlantSnapPage({ onOpenDownload }) {
  const { language } = useLanguage();
  const [selectedPreset, setSelectedPreset] = useState(terracePresets[0]);
  const [selectedSunlight, setSelectedSunlight] = useState('moderate'); // 'low', 'moderate', 'high'
  const [analyzingSpace, setAnalyzingSpace] = useState(false);

  const handlePresetSelect = (preset) => {
    setAnalyzingSpace(true);
    setSelectedPreset(preset);
    setTimeout(() => {
      setAnalyzingSpace(false);
    }, 600);
  };

  // Filter catalogue based on selected preset
  const matchedPlants = plantsCatalogue.filter((p) =>
    selectedPreset.suitableCrops.includes(p.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <Flower2 className="w-4 h-4 text-teal-700" />
          <span>{language === 'ta' ? 'நகர்ப்புற மாடித் தோட்ட வழிகாட்டி' : 'Urban Terrace & Balcony Garden Engine'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          {language === 'ta' ? 'உங்கள் பால்கனிக்கு ஏற்ற சிறந்த காய்கறி செடிகள்' : 'Snap Your Space, Get Perfect Plant Recommendations'}
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          {language === 'ta'
            ? 'மொட்டை மாடி அல்லது பால்கனி இடத்தை ஸ்கேன் செய்யுங்கள். கிடைக்கும் சூரிய ஒளி மற்றும் தொட்டி அளவிற்கு ஏற்ப தக்காளி, கீரை, மிளகாய் போன்ற காய்கறி செடிகளை எளிதாக வளர்க்கலாம்.'
            : 'Urban spaces come with unique sunlight and container constraints. Our computer vision space analyzer computes sunlight vectors and recommends high-yield vegetable crops tailored for your balcony.'}
        </p>
      </div>

      {/* Interactive Space Fit Engine Mockup */}
      <div className="bg-white rounded-[32px] border border-stone-200 shadow-elevated p-6 sm:p-10 space-y-8">
        
        {/* Step 1: Select Space Preset */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                {language === 'ta' ? 'படி 1: உங்கள் வீட்டின் இடத்தை தேர்வு செய்க' : 'Step 1: Choose Your Balcony / Terrace Layout'}
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2">
                {language === 'ta' ? 'இடத்தின் அமைப்பைத் தேர்ந்தெடுக்கவும்' : 'Select Spatial Configuration'}
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-stone-100 text-stone-600 rounded-xl self-start sm:self-auto">
              Simulated AI Space Scan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            {terracePresets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePresetSelect(preset)}
                className={`p-5 rounded-3xl border text-left transition-all space-y-2 flex flex-col justify-between ${
                  selectedPreset.id === preset.id
                    ? 'border-teal-600 bg-teal-50/60 shadow-sm ring-2 ring-teal-500/20'
                    : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                      {preset.space}
                    </span>
                    <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                      <Sun className="w-3 h-3 text-amber-500" />
                      <span>{preset.sunlight}</span>
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-base">
                    {language === 'ta' ? preset.nameTa : preset.nameEn}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {language === 'ta' ? preset.bestForTa : preset.bestForEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100/80 flex items-center justify-between text-xs font-bold text-teal-700">
                  <span>{selectedPreset.id === preset.id ? '✓ Selected' : 'Select Space'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: AI Analyzed Plant Matches */}
        <div className="pt-4">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-700 bg-agri-50 px-2.5 py-1 rounded-md">
                {language === 'ta' ? 'படி 2: AI பரிந்துரைத்த காய்கறி செடிகள்' : 'Step 2: AI Recommended Plants for This Space'}
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-1">
                {language === 'ta'
                  ? `${selectedPreset.nameTa} இடத்திற்குப் பொருத்தமான பயிர்கள்`
                  : `Top Compatible Crops for ${selectedPreset.nameEn}`}
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              {matchedPlants.length} Crops Matched
            </span>
          </div>

          {analyzingSpace ? (
            <div className="py-16 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-teal-600 animate-spin mx-auto" />
              <p className="text-sm font-bold text-stone-700">
                {language === 'ta' ? 'சூரிய ஒளி அளவை கணக்கிடுகிறது...' : 'Computing Lux vectors and root zone requirements...'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {matchedPlants.map((plant) => (
                <div
                  key={plant.id}
                  className="bg-stone-50/70 rounded-3xl p-5 border border-stone-200/90 shadow-xs hover:bg-white hover:shadow-soft transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{plant.emoji}</span>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-100 text-teal-800">
                        {language === 'ta' ? plant.difficultyTa : plant.difficulty}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-stone-900">
                        {language === 'ta' ? plant.nameTa : plant.nameEn}
                      </h4>
                      <p className="text-xs text-stone-400">
                        {language === 'ta' ? plant.nameEn : plant.nameTa}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-stone-600">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200/60">
                        <span className="font-semibold text-stone-500">
                          {language === 'ta' ? 'தொட்டி அளவு:' : 'Pot/Bag Size:'}
                        </span>
                        <span className="font-bold text-stone-800">
                          {language === 'ta' ? plant.potSizeTa : plant.potSize}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200/60">
                        <span className="font-semibold text-stone-500">
                          {language === 'ta' ? 'சூரிய ஒளி:' : 'Sunlight:'}
                        </span>
                        <span className="font-bold text-stone-800">
                          {language === 'ta' ? plant.sunlightTa : plant.sunlight}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200/60">
                        <span className="font-semibold text-stone-500">
                          {language === 'ta' ? 'அறுவடை காலம்:' : 'Harvest In:'}
                        </span>
                        <span className="font-bold text-stone-800">
                          {language === 'ta' ? plant.harvestDaysTa : plant.harvestDays}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-amber-50/70 rounded-2xl border border-amber-200/80 text-xs">
                      <span className="font-bold text-amber-900 block mb-0.5">
                        {language === 'ta' ? 'இயற்கை பராமரிப்பு ரகசியம்:' : 'Companion & Care Secret:'}
                      </span>
                      <p className="text-amber-950 font-medium leading-relaxed">
                        {language === 'ta' ? plant.companionTipTa : plant.companionTipEn}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenDownload}
                      className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>{language === 'ta' ? 'வளர்ப்பு வழிகாட்டியைப் பெற' : 'View Full Grow Guide'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Beginner Terrace Gardening Essentials */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {language === 'ta' ? 'ஆரம்பநிலை மாடித் தோட்டத்திற்கான 3 அடிப்படை விதிகள்' : '3 Essential Steps for Urban Terrace Gardening'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              🪴
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? '1. சரியான மண் கலவை (Potting Mix)' : '1. Golden Potting Mix Ratio'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'செம்மண் (1 பங்கு) + தேங்காய் நார் கழிவு (1 பங்கு) + மண்புழு உரம் (1 பங்கு) கலந்தால் தொட்டி இலகுவாகவும் வேர் காற்றோட்டமாகவும் இருக்கும்.'
                : '1 Part Red Soil + 1 Part Decomposed Cocopeat + 1 Part Vermicompost + 1 handful Neem Cake for pest-free, light container weight.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl">
              💧
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? '2. நீர் பாசன முறை (Morning Watering)' : '2. Smart Morning Watering'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'எப்போதும் காலை 8:30 மணிக்குள் நீர் ஊற்றவும். தொட்டியின் வடிகால் துளை அடைபடாமல் இருக்கிறதா என்று அடிக்கடி சோதிக்கவும்.'
                : 'Water before 8:30 AM to hydrate roots before terrace roof heat peaks. Always check that drainage holes let excess water escape freely.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
              🌿
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? '3. இயற்கை பூச்சி விரட்டி (100% Organic)' : '3. Bi-weekly Bio-Nutrient Spray'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? '15 நாட்களுக்கு ஒருமுறை புளித்த மோர் கரைசல் அல்லது வேப்பெண்ணெய் கரைசல் தெளித்தால் பூ உதிராமல் காய் பிடிக்கும்.'
                : 'Spray sour buttermilk diluted 1:10 or 3% cold-pressed neem oil every 14 days to deter mealybugs and boost vigorous flowering.'}
            </p>
          </div>
        </div>
      </div>

      {/* Download CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-teal-50 border border-teal-200 text-center space-y-4">
        <h3 className="text-2xl font-bold text-teal-950">
          {language === 'ta' ? 'உங்கள் மாடியை உடனடியாக ஸ்கேன் செய்ய வேண்டுமா?' : 'Ready to turn your balcony into a fresh green food oasis?'}
        </h3>
        <p className="text-sm text-teal-800 max-w-xl mx-auto">
          {language === 'ta'
            ? 'உழவனின் நண்பன் செயலியைப் பதிவிறக்கி உங்கள் பால்கனியை கேமராவில் காட்டி உடனடியாக செடிகளைத் தேர்வு செய்யுங்கள்.'
            : 'Download the app, point your camera at your rooftop, and get automated sunlight vectors with step-by-step organic sowing calendars.'}
        </p>
        <button
          onClick={onOpenDownload}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all"
        >
          <Camera className="w-4 h-4" />
          <span>{language === 'ta' ? 'செயலியில் இடத்தை ஸ்கேன் செய்ய' : 'Snap Your Terrace with Mobile App'}</span>
        </button>
      </div>

    </div>
  );
}

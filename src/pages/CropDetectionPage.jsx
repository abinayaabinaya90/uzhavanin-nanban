import React, { useState } from 'react';
import {
  ScanSearch,
  Camera,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Leaf,
  FlaskConical,
  Sprout,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const sampleDiagnoses = [
  {
    id: 'paddy-blast',
    cropEn: 'Paddy / Rice (நெல்)',
    cropTa: 'நெல் பயிர்',
    diseaseEn: 'Paddy Blast Disease (Magnaporthe oryzae)',
    diseaseTa: 'நெல் குலை நோய் / இலைக்கருகல்',
    confidence: '97.4%',
    severity: 'High (Early Flowering Stage)',
    severityTa: 'தீவிரம்: அதிகம் (கதிர் உருவாகும் பருவம்)',
    emoji: '🌾',
    leafVisual: 'bg-amber-100 border-amber-300 text-amber-900',
    symptomsEn: 'Spindle-shaped brown spots with greyish-white centers and yellow margins on leaves.',
    symptomsTa: 'இலைகளில் கண் வடிவிலான அல்லது கதிர் வடிவிலான பழுப்பு நிற புள்ளிகள், நடுவில் சாம்பல் நிறம்.',
    organicRemedyEn: 'Spray fermented sour buttermilk (50ml/L) or Neem Oil 3% (30ml/10L) with soap nut emulsifier. Dust with wood ash.',
    organicRemedyTa: 'புளித்த மோர் கரைசல் (லிட்டருக்கு 50 மி.லி) அல்லது வேப்பெண்ணெய் 3% தெளிக்கவும். இலைகளில் சாம்பல் தூவவும்.',
    chemicalRemedyEn: 'Tricyclazole 75% WP @ 0.6g/L or Isoprothiolane 40% EC @ 1.5ml/L at earliest symptom onset.',
    chemicalRemedyTa: 'டிரைசைக்ளசோல் 75% WP (லிட்டருக்கு 0.6 கிராம்) அல்லது ஐசோப்ரோதியோலேன் 40% EC (லிட்டருக்கு 1.5 மி.லி) தெளிக்கவும்.',
    preventionEn: 'Avoid excessive nitrogen/urea fertilizer in split doses. Maintain good water drainage.',
    preventionTa: 'அதிகப்படியான யூரியா இடுவதைத் தவிர்க்கவும். வயலில் தேங்கிய தண்ணீரை வடிகட்டி புதிய நீர் பாய்ச்சவும்.'
  },
  {
    id: 'tomato-blight',
    cropEn: 'Tomato (தக்காளி)',
    cropTa: 'தக்காளி செடி',
    diseaseEn: 'Early Blight (Alternaria solani)',
    diseaseTa: 'ஆரம்ப இலைக்கருகல் நோய்',
    confidence: '95.8%',
    severity: 'Moderate',
    severityTa: 'தீவிரம்: மிதமானது',
    emoji: '🍅',
    leafVisual: 'bg-red-100 border-red-300 text-red-900',
    symptomsEn: 'Concentric dark brown circular rings (target board pattern) starting from lower older leaves.',
    symptomsTa: 'அடி இலைகளில் ஆரம்பித்து வளைந்த வட்ட வடிவ கருமை நிற புள்ளிகள் தோன்றுதல்.',
    organicRemedyEn: 'Foliar spray with Trichoderma viride (10g/L) mixed with 5% Panchagavya. Prune affected bottom leaves immediately.',
    organicRemedyTa: 'ட்ரைக்கோடெர்மா விரிடி (லிட்டருக்கு 10 கிராம்) மற்றும் 5% பஞ்சகவ்யா தெளிக்கவும். பாதிக்கப்பட்ட கீழ் இலைகளை வெட்டி எரிக்கவும்.',
    chemicalRemedyEn: 'Mancozeb 75% WP @ 2g/L or Chlorothalonil 75% WP @ 2g/L.',
    chemicalRemedyTa: 'மேன்கோசெப் 75% WP (லிட்டருக்கு 2 கிராம்) கொண்டு இலைகளின் அடிப்புறம் படுமாறு தெளிக்கவும்.',
    preventionEn: 'Water the soil at ground level rather than sprinkling over foliage. Space plants 45cm apart.',
    preventionTa: 'இலைகள் மீது தண்ணீர் தெளிப்பதைத் தவிர்த்து வேர்ப்பகுதியில் பாசனம் செய்யவும்.'
  },
  {
    id: 'chilli-curl',
    cropEn: 'Chilli (பச்சை மிளகாய்)',
    cropTa: 'பச்சை மிளகாய்',
    diseaseEn: 'Chilli Leaf Curl Virus & Thrips Vector',
    diseaseTa: 'இலை சுருட்டு நோய் மற்றும் இலைப்பேன்',
    confidence: '98.1%',
    severity: 'Moderate to High',
    severityTa: 'தீவிரம்: மிதமானது முதல் அதிகம்',
    emoji: '🌶️',
    leafVisual: 'bg-emerald-100 border-emerald-300 text-emerald-900',
    symptomsEn: 'Upward curling of young leaves, stunted shoots, and reduced flower setting.',
    symptomsTa: 'குருத்து இலைகள் படகு போல மேல்நோக்கி சுருங்குதல், வளர்ச்சி குன்றுதல் மற்றும் பூக்கள் உதிர்தல்.',
    organicRemedyEn: 'Install yellow & blue sticky traps (10 per acre). Spray Agni Astra (garlic-chilli extract) or 10,000 PPM Neem Oil (2ml/L).',
    organicRemedyTa: 'மஞ்சள் & நீல வண்ண ஒட்டும் பொறிகள் வைக்கவும். அக்னி அஸ்திரம் அல்லது வேப்பங்கொட்டை சாறு 5% தெளிக்கவும்.',
    chemicalRemedyEn: 'Diafenthiuron 50% WP @ 1g/L or Fipronil 5% SC @ 1.5ml/L.',
    chemicalRemedyTa: 'டயாபெந்தியூரான் 50% WP (லிட்டருக்கு 1 கிராம்) அல்லது பிப்ரோனில் 5% SC தெளிக்கவும்.',
    preventionEn: 'Keep field borders free from weeds. Intercrop with African Marigold.',
    preventionTa: 'வரப்புகளில் துலுக்க சாமந்தி நடுவதன் மூலம் இலைப்பேன் பூச்சிகளை கட்டுப்படுத்தலாம்.'
  },
  {
    id: 'cotton-bollworm',
    cropEn: 'Cotton (பருத்தி)',
    cropTa: 'பருத்தி பயிர்',
    diseaseEn: 'Spotted Bollworm & Square Damage',
    diseaseTa: 'பருத்தி காய் புழு தாக்குதல்',
    confidence: '96.2%',
    severity: 'High (Boll Development)',
    severityTa: 'தீவிரம்: அதிகம் (காய் பிடிக்கும் பருவம்)',
    emoji: '🌿',
    leafVisual: 'bg-stone-100 border-stone-300 text-stone-900',
    symptomsEn: 'Bored holes on squares and bolls with larval excreta plugging the entry hole.',
    symptomsTa: 'பூ மொட்டுகள் மற்றும் காய்களில் துளையிடப்பட்டு புழுவின் கழிவு காணப்படுதல்.',
    organicRemedyEn: 'Release Trichogramma egg parasitoids @ 1.5 lakh/ha. Set up 4 Pheromone traps per acre.',
    organicRemedyTa: 'ஹெக்டேருக்கு 1.5 லட்சம் டிரைக்கோகிரம்மா ஒட்டுண்ணி அட்டைகள் கட்டவும். ஏக்கருக்கு 4 இனக்கவர்ச்சி பொறி வைக்கவும்.',
    chemicalRemedyEn: 'Emamectin benzoate 5% SG @ 0.4g/L or Chlorantraniliprole 18.5% SC @ 0.3ml/L.',
    chemicalRemedyTa: 'எமாமெக்டின் பென்சோயேட் 5% SG (லிட்டருக்கு 0.4 கிராம்) மாலை வேளையில் தெளிக்கவும்.',
    preventionEn: 'Avoid staggered planting. Collect and destroy dropped squares promptly.',
    preventionTa: 'கீழே உதிர்ந்த மொட்டுகள் மற்றும் காய்களை சேகரித்து உடனடியாக அழிக்கவும்.'
  }
];

export default function CropDetectionPage({ onOpenDownload }) {
  const { language } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState(sampleDiagnoses[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState('organic'); // 'organic' or 'chemical'

  const handleSelectCrop = (crop) => {
    setIsScanning(true);
    setSelectedCrop(crop);
    setTimeout(() => {
      setIsScanning(false);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <ScanSearch className="w-4 h-4 text-emerald-700" />
          <span>{language === 'ta' ? 'AI பயிர் மருத்துவர்' : 'AI Plant Doctor'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          {language === 'ta' ? 'பயிர் நோய் கண்டறிதல் & தீர்வுகள்' : 'Instant Crop Disease Detection'}
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          {language === 'ta'
            ? 'பாதிக்கப்பட்ட இலையின் ஒரு புகைப்படத்தை எடுத்தால் போதும்! செயற்கை நுண்ணறிவு நொடிகளில் நோயை அடையாளம் கண்டு இயற்கை மற்றும் அறிவியல் மருந்துகளைப் பரிந்துரைக்கிறது.'
            : 'Snap a single photo of your crop leaf or stem. Our computer vision model diagnoses 120+ fungal, bacterial, and pest attacks in under 3 seconds with university-vetted treatment protocols.'}
        </p>
      </div>

      {/* 3-Step "How It Works" Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft relative overflow-hidden">
          <span className="absolute -top-2 -right-2 text-6xl font-black text-stone-100 select-none">1</span>
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-stone-900 text-base mb-1">
            {language === 'ta' ? '1. புகைப்படம் எடுக்கவும்' : '1. Snap Plant Leaf'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'உங்கள் மொபைல் கேமராவில் பாதிக்கப்பட்ட இலை அல்லது தண்டின் தெளிவான படத்தை எடுக்கவும்.'
              : 'Hold phone camera 15-20 cm away from the leaf showing lesions, discoloration, or pest presence.'}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft relative overflow-hidden">
          <span className="absolute -top-2 -right-2 text-6xl font-black text-stone-100 select-none">2</span>
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-stone-900 text-base mb-1">
            {language === 'ta' ? '2. AI உடனடி ஆய்வு' : '2. 3-Second AI Diagnosis'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'நமது AI மாதிரி 95%+ துல்லியத்துடன் பூச்சி அல்லது நோயின் பெயரை உடனடியாக தெரிவிக்கும்.'
              : 'Neural network classifies the pathogen with exact confidence percentage and severity assessment.'}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft relative overflow-hidden">
          <span className="absolute -top-2 -right-2 text-6xl font-black text-stone-100 select-none">3</span>
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
            <Leaf className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-stone-900 text-base mb-1">
            {language === 'ta' ? '3. இரண்டு வகையான மருந்துகள்' : '3. Dual Treatment Protocol'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'பாரம்பரிய இயற்கை முறை மற்றும் அங்கீகரிக்கப்பட்ட வேதியியல் மருந்துகளின் சரியான அளவுடன் அறிக்கை.'
              : 'Access immediate low-cost organic remedies (neem, buttermilk) alongside exact certified chemical dosages.'}
          </p>
        </div>
      </div>

      {/* Interactive Scan Simulator Section */}
      <div className="bg-white rounded-[32px] border border-stone-200/90 shadow-elevated p-6 sm:p-10 space-y-8">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-700 bg-agri-50 px-2.5 py-1 rounded-md">
                {language === 'ta' ? 'ஊடாடும் மாதிரிப் பலகை' : 'Interactive Scan Simulator'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
                {language === 'ta' ? 'பரிசோதிக்க ஒரு பயிரைத் தேர்வு செய்யவும்' : 'Select a Sample Crop to Test Detection'}
              </h2>
            </div>
            <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              Live Mockup Demo
            </span>
          </div>

          {/* Crop Selector Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            {sampleDiagnoses.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectCrop(item)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex items-center space-x-3 ${
                  selectedCrop.id === item.id
                    ? 'border-agri-600 bg-agri-50/70 shadow-sm ring-2 ring-agri-500/20'
                    : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                    {language === 'ta' ? item.cropTa : item.cropEn}
                  </p>
                  <p className="text-[11px] text-stone-500 truncate">
                    {selectedCrop.id === item.id ? '● Active' : 'Click to scan'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scan Result Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Leaf Visual & Scanning Simulation */}
          <div className="lg:col-span-5 bg-stone-900 rounded-3xl p-5 text-white flex flex-col justify-between relative overflow-hidden min-h-[340px] shadow-lg">
            {/* Top scanning badge */}
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/60 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>CAMERA FEED</span>
              </span>
              <span className="text-xs text-stone-400 font-mono">1080p AI Vision</span>
            </div>

            {/* Scanning Line overlay */}
            {isScanning && (
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan-line shadow-[0_0_15px_#34d399] z-20" />
            )}

            {/* Mockup Leaf Graphic */}
            <div className="my-auto py-8 text-center relative z-10">
              <div className="text-7xl sm:text-8xl select-none mx-auto transform transition-transform hover:scale-105 duration-200">
                {selectedCrop.emoji}
              </div>
              <p className="text-sm font-semibold text-stone-300 mt-2">
                {language === 'ta' ? selectedCrop.cropTa : selectedCrop.cropEn} Sample
              </p>
              <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-white/10 text-[11px] text-stone-300 backdrop-blur-sm">
                Target Spot Detected • Bounding Box [x: 124, y: 88]
              </div>
            </div>

            {/* Bottom info */}
            <div className="z-10 flex items-center justify-between border-t border-stone-800 pt-3 text-xs text-stone-400">
              <span>Sensor: 50MP Macro</span>
              <span className="text-emerald-400 font-bold">Confidence: {selectedCrop.confidence}</span>
            </div>
          </div>

          {/* Right: Diagnosis Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 border border-red-200">
                  {language === 'ta' ? selectedCrop.severityTa : selectedCrop.severity}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {selectedCrop.confidence} Match
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900">
                {language === 'ta' ? selectedCrop.diseaseTa : selectedCrop.diseaseEn}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                {language === 'ta' ? selectedCrop.diseaseEn : selectedCrop.diseaseTa}
              </p>
            </div>

            {/* Symptoms Box */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-stone-500" />
                <span>{language === 'ta' ? 'அறிகுறிகள்' : 'Key Symptoms'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {language === 'ta' ? selectedCrop.symptomsTa : selectedCrop.symptomsEn}
              </p>
            </div>

            {/* Treatment Selector Tabs */}
            <div className="space-y-3">
              <div className="flex rounded-2xl bg-stone-100 p-1 border border-stone-200">
                <button
                  onClick={() => setActiveTab('organic')}
                  className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'organic'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'ta' ? 'இயற்கை சிகிச்சை முறை' : 'Organic Remedy (Zero Chemical)'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('chemical')}
                  className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'chemical'
                      ? 'bg-white text-blue-800 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <FlaskConical className="w-4 h-4 text-blue-600" />
                  <span>{language === 'ta' ? 'அறிவியல் மருந்து அளவு' : 'Chemical / University Dose'}</span>
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'organic' ? (
                <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center space-x-2 text-emerald-900 font-bold text-xs">
                    <Leaf className="w-4 h-4 text-emerald-700" />
                    <span>{language === 'ta' ? 'இயற்கை மருந்துக் கலவை' : 'Organic Preparation & Spraying'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                    {language === 'ta' ? selectedCrop.organicRemedyTa : selectedCrop.organicRemedyEn}
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center space-x-2 text-blue-900 font-bold text-xs">
                    <FlaskConical className="w-4 h-4 text-blue-700" />
                    <span>{language === 'ta' ? 'பரிந்துரைக்கப்பட்ட அளவு' : 'Scientific Fungicide / Insecticide Dosage'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                    {language === 'ta' ? selectedCrop.chemicalRemedyTa : selectedCrop.chemicalRemedyEn}
                  </p>
                </div>
              )}
            </div>

            {/* Prevention Tip */}
            <div className="text-xs text-stone-500 pt-1 flex items-start gap-2">
              <span className="font-bold text-stone-700 whitespace-nowrap">
                {language === 'ta' ? 'முன்னெச்சரிக்கை:' : 'Future Prevention:'}
              </span>
              <span>{language === 'ta' ? selectedCrop.preventionTa : selectedCrop.preventionEn}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {language === 'ta' ? 'பயிர் மருத்துவரின் நன்மைகள்' : 'Why Early Detection Protects Your Harvest'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center font-bold text-lg">
              📉
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? '35% வரை பயிர் சேதம் தடுப்பு' : 'Prevent 35% Crop Loss'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'நோய்கள் பரவுவதற்கு முன்பே முதல் சில இலைகளிலேயே கண்டறிந்து உடனடியாகக் கட்டுப்படுத்தலாம்.'
                : 'Catching fungal spores in vegetative or early tillering stage prevents devastating whole-field infestation.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
              💰
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'மருந்து செலவில் 40% சேமிப்பு' : 'Save 40% on Spray Costs'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'தேவையற்ற அல்லது தவறான பூச்சிக்கொல்லிகளை வாங்கி காசை வீணடிப்பதைத் தவிர்க்கலாம்.'
                : 'Avoid purchasing redundant or incorrect chemical sprays by relying on targeted laboratory-grade diagnoses.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
              🌿
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'இயற்கை விவசாய வாய்ப்பு' : 'Organic Certification Friendly'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'வீட்டுத் தோட்டம் மற்றும் இயற்கை விவசாயிகளுக்கு வேப்பெண்ணெய், பஞ்சகவ்யா, புளித்த மோர் முறைகள்.'
                : 'Every scan offers home-brew organic bio-control formulations safe for children, bees, and soil fertility.'}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-agri-50 border border-agri-200 text-center space-y-4">
        <h3 className="text-2xl font-bold text-agri-950">
          {language === 'ta' ? 'உங்கள் பயிரையும் உடனே பரிசோதிக்க வேண்டுமா?' : 'Ready to diagnose your real crops?'}
        </h3>
        <p className="text-sm text-agri-800 max-w-xl mx-auto">
          {language === 'ta'
            ? 'உழவனின் நண்பன் செயலியைப் பதிவிறக்கி உங்கள் வயலின் இலைகளை நேரடி கேமராவில் ஸ்கேன் செய்யுங்கள்.'
            : 'Download Uzhavanin Nanban on Android or iOS to use your camera anywhere in the field, even offline.'}
        </p>
        <button
          onClick={onOpenDownload}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-agri-700 hover:bg-agri-800 text-white font-bold text-sm shadow-md transition-all"
        >
          <Camera className="w-4 h-4" />
          <span>{language === 'ta' ? 'செயலியில் ஸ்கேன் செய்ய' : 'Get App & Start Scanning'}</span>
        </button>
      </div>

    </div>
  );
}

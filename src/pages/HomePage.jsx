import React from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Smartphone,
  Sprout,
  HeartHandshake,
  Cpu,
  Globe2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { featuresList } from '../data/featuresData';
import FeatureCard from '../components/FeatureCard';

export default function HomePage({ onOpenDownload }) {
  const { language, t } = useLanguage();

  const trustPoints = [
    {
      icon: Cpu,
      titleEn: "Trained on 500,000+ Indian Crop Images",
      titleTa: "5,00,000+ பயிர் புகைப்படங்களில் பயிற்சி பெற்ற AI",
      descEn: "Recognizes 120+ diseases across Paddy, Cotton, Sugarcane, Banana, Tomato, and Groundnut with 95% lab accuracy.",
      descTa: "நெல், பருத்தி, கரும்பு, வாழை, தக்காளி, நிலக்கடலை உள்ளிட்ட 120க்கும் மேற்பட்ட பயிர் நோய்களை 95% துல்லியத்துடன் கண்டறிகிறது."
    },
    {
      icon: Globe2,
      titleEn: "Native Tamil Voice & Text Support",
      titleTa: "எளிய தமிழ் குரல் மற்றும் உரை வழிகாட்டல்",
      descEn: "No complicated menus. Farmers can simply press the mic, speak in casual Tamil, and receive actionable advice in seconds.",
      descTa: "சிக்கலான அமைப்புகள் இல்லை. மைக்கை அழுத்தி தமிழில் பேசினாலே போதும், நொடிகளில் துல்லியமான பதில் கிடைக்கும்."
    },
    {
      icon: HeartHandshake,
      titleEn: "0% Commission Direct Marketplace",
      titleTa: "0% இடைத்தரகர் இல்லாத நேரடி சந்தை",
      descEn: "Eliminates middleman cuts, ensuring farmers receive 30-40% higher realization while urban buyers get fresh harvest.",
      descTa: "இடைத்தரகர் கமிஷன் இன்றி விவசாயிகள் 30-40% கூடுதல் லாபமும், நுகர்வோர் புதிய விளைபொருட்களையும் பெறலாம்."
    },
    {
      icon: Sprout,
      titleEn: "Dedicated Terrace & Balcony Garden Hub",
      titleTa: "நகர்ப்புற மாடித் தோட்டத்திற்கான சிறப்பு வழிகாட்டி",
      descEn: "Tailored algorithms for urban terrace growers to select companion crops, pot sizes, and sunlight optimization.",
      descTa: "நகர்ப்புற வீடுகளின் மாடி மற்றும் பால்கனி இடத்திற்கேற்ப காய்கறி செடிகள், தொட்டி அளவு, இயற்கை உர வழிமுறைகள்."
    }
  ];

  const testimonials = [
    {
      name: "Murugesan K. (முருகேசன்)",
      role: "Samba Paddy Farmer, Thanjavur",
      roleTa: "சம்பா நெல் விவசாயி, தஞ்சாவூர்",
      commentEn: "The disease detection saved my 4-acre paddy crop from severe blast disease. The organic neem-oil and buttermilk recommendation cured it in 5 days!",
      commentTa: "நெல் குலை நோயை ஆரம்பத்திலேயே இந்த செயலி மூலம் கண்டறிந்தேன். சொன்ன இயற்கை சிகிச்சை முறைப்படி செய்ததால் 5 நாட்களில் பயிர் தப்பியது!",
      rating: 5,
      crop: "Paddy (CR-1009)"
    },
    {
      name: "S. Priya (பிரியா சுந்தர்)",
      role: "Terrace Gardener, Anna Nagar, Chennai",
      roleTa: "மாடித் தோட்டம், அண்ணா நகர், சென்னை",
      commentEn: "The Terrace Plant Fit tool helped me convert my 80 sq ft balcony into an organic salad garden. I now harvest fresh tomatoes and spinach weekly!",
      commentTa: "என் 80 சதுர அடி பால்கனியில் என்ன பயிரிடலாம் என்ற வழிகாட்டி அற்புதம். இப்போது வாரந்தோறும் இயற்கை தக்காளி, கீரை அறுவடை செய்கிறேன்!",
      rating: 5,
      crop: "Cherry Tomato & Herbs"
    },
    {
      name: "Dr. K. Annamalai (அண்ணாமலை)",
      role: "FPO President, Dindigul",
      roleTa: "உழவர் உற்பத்தியாளர் குழு தலைவர், திண்டுக்கல்",
      commentEn: "We listed 5 tonnes of country shallots on the marketplace and sold directly to Coimbatore buyers within 48 hours with zero commission!",
      commentTa: "5 டன் நாட்டு வெங்காயத்தை இடைத்தரகர் இன்றி நேரடியாக கோயம்புத்தூர் வர்த்தகர்களுக்கு விற்று நல்ல லாபம் பார்த்தோம்!",
      rating: 5,
      crop: "Country Shallots"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20">
        {/* Background Subtle Gradient Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-agri-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-harvest-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-agri-100/80 border border-agri-200 text-agri-900 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-agri-600 animate-ping" />
                <span>{language === 'ta' ? 'விவசாயிகளுக்கான இலவச மொபைல் செயலி' : 'Free Mobile App for Indian Farmers & Gardeners'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                {language === 'ta' ? (
                  <>
                    <span className="text-agri-700">உழவனின் நண்பன்:</span> உங்கள் விரல்நுனியில் ஸ்மார்ட் விவசாயம்!
                  </>
                ) : (
                  <>
                    <span className="text-agri-700">Uzhavanin Nanban:</span> Your Smart Agriculture Companion
                  </>
                )}
              </h1>

              {/* Sub-Tagline */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('subTagline')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenDownload}
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 px-7 py-4 rounded-2xl bg-agri-700 hover:bg-agri-800 text-white font-bold text-base shadow-lg shadow-agri-700/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>{t('downloadApp')}</span>
                  <span className="text-xs bg-agri-800/80 px-2 py-0.5 rounded text-agri-100">Free</span>
                </button>

                <a
                  href="#features-grid"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-base border border-stone-200 shadow-sm transition-all"
                >
                  <span>{t('getStarted')}</span>
                  <ArrowRight className="w-4 h-4 text-agri-700" />
                </a>
              </div>

              {/* Trust micro-stats */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-stone-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-agri-600" />
                  <span>{t('accuracyStat')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-agri-600" />
                  <span>{t('farmersStat')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-agri-600" />
                  <span>{t('savingsStat')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Smartphone Frame Mockup */}
              <div className="relative w-72 sm:w-80 bg-stone-900 rounded-[44px] p-3 shadow-2xl border-4 border-stone-800 ring-1 ring-stone-900/50">
                {/* Phone Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-stone-900 rounded-full z-20" />
                
                {/* Screen Content */}
                <div className="bg-[#faf8f5] rounded-[36px] overflow-hidden p-4 space-y-4">
                  {/* App Header Inside Phone */}
                  <div className="flex items-center justify-between pt-3 pb-2 border-b border-stone-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-agri-700 flex items-center justify-center text-white text-xs font-bold">
                        🌱
                      </div>
                      <div>
                        <p className="text-xs font-bold text-stone-900">உழவனின் நண்பன்</p>
                        <p className="text-[10px] text-stone-500">Thanjavur • 32°C ⛅</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-agri-100 text-agri-800 font-bold px-2 py-0.5 rounded-full">
                      Online
                    </span>
                  </div>

                  {/* Mockup Scan Alert Card */}
                  <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                        ⚠️ Scan Diagnosis
                      </span>
                      <span className="text-[10px] text-stone-400">Just now</span>
                    </div>
                    <p className="text-xs font-bold text-stone-800">
                      Tomato Early Blight (தக்காளி இலைக்கருகல்)
                    </p>
                    <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 leading-snug">
                      <strong>Organic Remedy:</strong> Spray diluted sour buttermilk (1:10) with 2ml neem oil per liter.
                    </div>
                  </div>

                  {/* Weather Alert Widget inside phone */}
                  <div className="bg-blue-50/70 p-3 rounded-2xl border border-blue-200 text-[11px] space-y-1">
                    <div className="font-bold text-blue-900 flex items-center gap-1">
                      <span>🌧️ Rain Forecast (65% prob)</span>
                    </div>
                    <p className="text-blue-800 leading-tight">
                      Tomorrow afternoon rain expected. Hold paddy field irrigation.
                    </p>
                  </div>

                  {/* Mini Marketplace Deal inside phone */}
                  <div className="bg-amber-50/70 p-3 rounded-2xl border border-amber-200 text-[11px] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-amber-900">🌾 Deluxe Ponni Rice</p>
                      <p className="text-stone-500 text-[10px]">Direct from Farmer Ramasamy</p>
                    </div>
                    <span className="font-bold text-amber-800">₹56/kg</span>
                  </div>

                  {/* Quick Action Button inside phone */}
                  <button
                    onClick={onOpenDownload}
                    className="w-full py-2.5 rounded-xl bg-agri-700 text-white font-bold text-xs shadow-sm hover:bg-agri-800 transition-colors text-center"
                  >
                    Open Full App Experience &rarr;
                  </button>
                </div>
              </div>

              {/* Floating Stat Badge Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-elevated flex items-center space-x-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  🌾
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">₹2,800 saved</p>
                  <p className="text-[10px] text-stone-500">Per acre / season</p>
                </div>
              </div>

              {/* Floating Stat Badge Right */}
              <div className="absolute top-8 -right-4 sm:-right-8 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-elevated flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">AI Diagnosis</p>
                  <p className="text-[10px] text-stone-500">Under 3 seconds</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 Core Features Section */}
      <section id="features-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-agri-100 text-agri-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ta' ? 'முழுமையான 6 கருவிகள்' : 'Everything You Need'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {language === 'ta' ? 'விவசாயிகளுக்கு உதவும் 6 முக்கிய ஸ்மார்ட் அம்சங்கள்' : '6 Powerful Smart Agriculture Features'}
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg">
            {language === 'ta'
              ? 'ஒவ்வொரு கருவிக்கும் தனி பிரத்யேக வழிகாட்டுதல் பக்கம் உள்ளது. மேலும் அறிய அட்டை மீது கிளிக் செய்யவும்.'
              : 'Each tool has its own dedicated page with interactive simulators, localized advice, and actionable tools.'}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>

      {/* Why Choose Us / Trust Section */}
      <section className="bg-white border-y border-stone-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-agri-700 bg-agri-50 px-3 py-1 rounded-full border border-agri-200">
              {language === 'ta' ? 'நம்பகத்தன்மை' : 'Built with Integrity'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-3">
              {t('whyChooseUs')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => {
              const IconComp = point.icon;
              return (
                <div
                  key={index}
                  className="bg-stone-50/80 rounded-3xl p-6 border border-stone-200/70 hover:bg-white hover:shadow-soft transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-agri-700 text-white flex items-center justify-center mb-5 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base mb-2">
                    {language === 'ta' ? point.titleTa : point.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {language === 'ta' ? point.descTa : point.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voices from the Field (Testimonials) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            {language === 'ta'
              ? 'உழவனின் நண்பன் செயலியைப் பயன்படுத்தும் விவசாயிகள் மற்றும் மாடித் தோட்டக்காரர்களின் உண்மை அனுபவங்கள்.'
              : 'Real stories of increased crop yields and pest protection from farming communities across Tamil Nadu.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-soft flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-stone-700 text-sm italic leading-relaxed">
                  "{language === 'ta' ? item.commentTa : item.commentEn}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-stone-500 font-medium">
                    {language === 'ta' ? item.roleTa : item.role}
                  </p>
                </div>
                <span className="text-[11px] font-semibold px-2 py-1 rounded bg-agri-100 text-agri-800">
                  {item.crop}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big CTA Download Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-tr from-agri-900 via-agri-800 to-agri-700 text-white p-8 sm:p-14 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-block text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/20 text-agri-100 backdrop-blur-sm">
              {language === 'ta' ? 'இப்போதே தொடங்குங்கள்' : 'Join 120,000+ Farmers Today'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {language === 'ta'
                ? 'உங்கள் ஸ்மார்ட்போனிலேயே உழவனின் நண்பனைப் பதிவிறக்குங்கள்!'
                : 'Put a Plant Doctor & Agri Advisor in Your Pocket'}
            </h2>
            <p className="text-agri-100 text-sm sm:text-base leading-relaxed">
              {language === 'ta'
                ? 'இலவசமாக கூகிள் பிளே ஸ்டோர் அல்லது நேரடி APK மூலம் உடனே பதிவிறக்குங்கள். இணையம் இல்லாத நேரத்திலும் அடிப்படை ஆலோசனைகள் கிடைக்கும்.'
                : 'Completely free for all farmers. Works seamlessly in Tamil and English with offline advice caching.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenDownload}
                className="flex items-center space-x-2 px-7 py-4 rounded-2xl bg-white text-agri-950 font-bold text-sm sm:text-base hover:bg-agri-50 shadow-lg hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5 text-agri-800" />
                <span>{t('downloadApp')}</span>
              </button>
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-6 py-4 rounded-2xl bg-agri-800/80 hover:bg-agri-800 text-white border border-agri-600/80 font-bold text-sm sm:text-base transition-all"
              >
                <span>{t('aboutContact')}</span>
              </Link>
            </div>
          </div>

          {/* Decorative background leaf icon */}
          <div className="absolute -bottom-10 -right-10 text-agri-800/30 text-[260px] select-none pointer-events-none font-sans">
            🌱
          </div>
        </div>
      </section>
    </div>
  );
}

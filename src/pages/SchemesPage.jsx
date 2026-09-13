import React, { useState } from 'react';
import {
  Landmark,
  CheckCircle2,
  FileCheck,
  Search,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Coins,
  ChevronRight,
  Clock,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { schemesList, schemeCategories } from '../data/schemesData';

export default function SchemesPage({ onOpenDownload }) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Eligibility Checker State
  const [farmerType, setFarmerType] = useState('marginal'); // 'marginal', 'small', 'large'
  const [cropType, setCropType] = useState('paddy'); // 'paddy', 'horticulture', 'commercial'
  const [checkerResult, setCheckerResult] = useState(null);

  // Application Tracker State
  const [trackingId, setTrackingId] = useState('TN-AGRI-2026-8891');
  const [trackerActive, setTrackerActive] = useState(true);

  const filteredSchemes = schemesList.filter((scheme) => {
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesSearch =
      scheme.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.nameTa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.authority.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCheckEligibility = (e) => {
    e.preventDefault();
    let matched = [];
    if (farmerType === 'marginal' || farmerType === 'small') {
      matched.push('PM-Kisan Samman Nidhi (₹6,000/yr)');
      matched.push('100% Free Drip & Micro-Irrigation Subsidy');
      matched.push('Kalaignar All Village Agri Scheme (Free Inputs)');
    }
    if (cropType === 'paddy' || cropType === 'horticulture') {
      matched.push('PMFBY Crop Insurance (90% Premium Subsidy)');
    }
    matched.push('PM-KUSUM 70% Solar Pump Subsidy');
    setCheckerResult(matched);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
          <Landmark className="w-4 h-4 text-amber-700" />
          <span>{language === 'ta' ? 'அரசு மானியங்கள் & திட்டங்கள்' : 'Government Agri Schemes & Subsidies'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          {language === 'ta' ? 'உங்களுக்குரிய அரசு மானியங்களை எளிதாகப் பெறுங்கள்' : 'Central & State Farmer Subsidies Finder'}
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          {language === 'ta'
            ? 'சொட்டு நீர் பாசனம், சூரிய மின் பம்பு, பயிர் காப்பீடு மற்றும் இலவச இடுபொருட்கள் உள்ளிட்ட மத்திய & தமிழக அரசு திட்டங்களை ஒரே இடத்தில் அறிந்து விண்ணப்பிக்கலாம்.'
            : 'Explore verified subsidies, verify your eligibility with our 1-minute calculator, and track your government application status.'}
        </p>
      </div>

      {/* Two Interactive Modules: Eligibility Checker & Application Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Module 1: Interactive Eligibility Checker */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-agri-700 bg-agri-50 px-2.5 py-1 rounded-md">
              {language === 'ta' ? 'ஊடாடும் தகுதி சரிபார்ப்பு' : 'Eligibility Calculator'}
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-2">
              {language === 'ta' ? 'நீங்கள் எந்தெந்த மானியங்களுக்குத் தகுதியானவர்?' : 'Check Which Schemes You Qualify For'}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              {language === 'ta' ? 'நில அளவு மற்றும் பயிரைத் தேர்வு செய்து உடனே அறியவும்' : 'Select land size and crop to preview eligible subsidies'}
            </p>
          </div>

          <form onSubmit={handleCheckEligibility} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                {language === 'ta' ? 'விவசாயி வகை / நில அளவு:' : 'Farmer Category (Landholding):'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFarmerType('marginal')}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                    farmerType === 'marginal'
                      ? 'bg-agri-700 text-white border-agri-700'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {language === 'ta' ? 'குறு விவசாயி (< 2.5 ஏக்கர்)' : 'Marginal (< 2.5 Acres)'}
                </button>
                <button
                  type="button"
                  onClick={() => setFarmerType('small')}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                    farmerType === 'small'
                      ? 'bg-agri-700 text-white border-agri-700'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {language === 'ta' ? 'சிறு விவசாயி (2.5 - 5 ஏக்கர்)' : 'Small (2.5 - 5 Acres)'}
                </button>
                <button
                  type="button"
                  onClick={() => setFarmerType('large')}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                    farmerType === 'large'
                      ? 'bg-agri-700 text-white border-agri-700'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {language === 'ta' ? 'பெரிய விவசாயி (> 5 ஏக்கர்)' : 'Large (> 5 Acres)'}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                {language === 'ta' ? 'பயிரிடப்படும் பயிர் வகை:' : 'Primary Crop Cultivated:'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCropType('paddy')}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                    cropType === 'paddy'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  🌾 {language === 'ta' ? 'நெல் / தானியங்கள்' : 'Paddy / Millets'}
                </button>
                <button
                  type="button"
                  onClick={() => setCropType('horticulture')}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                    cropType === 'horticulture'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  🍅 {language === 'ta' ? 'காய்கறி / பழங்கள்' : 'Horticulture'}
                </button>
                <button
                  type="button"
                  onClick={() => setCropType('commercial')}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                    cropType === 'commercial'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  🌱 {language === 'ta' ? 'கரும்பு / பருத்தி' : 'Commercial'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-agri-700 hover:bg-agri-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ta' ? 'தகுதியை கணக்கிடுக' : 'Calculate Eligible Subsidies'}</span>
            </button>
          </form>

          {/* Results Box */}
          {checkerResult && (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center space-x-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>
                  {language === 'ta'
                    ? `நீங்கள் ${checkerResult.length} முக்கிய மானியங்களுக்கு தகுதியானவர்!`
                    : `You Qualify for ${checkerResult.length} Key Subsidies!`}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950 font-medium">
                {checkerResult.map((res, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Module 2: Interactive Application Status Tracker */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                {language === 'ta' ? 'விண்ணப்ப நிலை அறிதல்' : 'Live Status Tracker'}
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2">
                {language === 'ta' ? 'விண்ணப்பத்தை கண்காணிக்க' : 'Track Application Status'}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                {language === 'ta' ? 'உங்கள் ஒப்புதல் எண் அல்லது பதிவு எண்ணை உள்ளிடவும்' : 'Enter scheme acknowledgement ID to see real-time progress'}
              </p>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                {language === 'ta' ? 'விண்ணப்ப குறிப்பு எண்:' : 'Application Reference ID:'}
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-agri-600"
                  placeholder="e.g. TN-AGRI-2026-8891"
                />
                <button
                  type="button"
                  onClick={() => setTrackerActive(true)}
                  className="px-4 py-2.5 rounded-2xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepper Progress Mockup */}
            {trackerActive && (
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-4">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-200">
                  <span className="font-bold text-stone-800">PM-KUSUM Solar Pump (5HP)</span>
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">In Progress</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[11px]">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-stone-800">1. Online Application Submitted</p>
                      <p className="text-[10px] text-stone-400">02 Sep 2026 • Verified on Agrisnet</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[11px]">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-stone-800">2. Field Verified by VAO & ADH</p>
                      <p className="text-[10px] text-stone-400">07 Sep 2026 • Well GPS coordinates logged</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[11px] animate-pulse">
                      3
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">3. Technical Sanction by TEDA</p>
                      <p className="text-[10px] text-amber-700 font-semibold">Under review by District Committee</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 opacity-50">
                    <div className="w-6 h-6 rounded-full bg-stone-300 text-stone-600 flex items-center justify-center font-bold text-[11px]">
                      4
                    </div>
                    <div>
                      <p className="font-bold text-stone-700">4. Subsidy Disbursement & Installation</p>
                      <p className="text-[10px] text-stone-400">Vendor allocation pending approval</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenDownload}
              className="w-full py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors flex items-center justify-center space-x-1"
            >
              <span>{language === 'ta' ? 'செயலியில் புதிய விண்ணப்பம் சமர்ப்பிக்க' : 'Apply for New Scheme via Mobile App'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-agri-700" />
            </button>
          </div>
        </div>

      </div>

      {/* Schemes Directory Grid */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {language === 'ta' ? 'அனைத்து அரசு மானியங்களின் பட்டியல்' : 'Comprehensive Agricultural Schemes Directory'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {language === 'ta' ? 'தேவையான பிரிவைத் தேர்வு செய்து மானிய விபரங்களைப் பார்க்கவும்' : 'Filter by category to explore verified subsidies and document checklists'}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ta' ? 'திட்டங்களைத் தேட...' : 'Search scheme or keyword...'}
              className="w-full pl-10 pr-4 py-2 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agri-600"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {schemeCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {language === 'ta' ? cat.nameTa : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Schemes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft hover:shadow-elevated transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-600">
                    {scheme.authority}
                  </span>
                  {scheme.featured && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                      Top Scheme
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-900 leading-snug">
                    {language === 'ta' ? scheme.nameTa : scheme.nameEn}
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {language === 'ta' ? scheme.nameEn : scheme.nameTa}
                  </p>
                </div>

                <div className="p-3 bg-amber-50/70 rounded-2xl border border-amber-200/80 text-xs">
                  <span className="font-bold text-amber-900 block mb-0.5">
                    {language === 'ta' ? 'மானிய உதவி அளவு:' : 'Subsidy / Financial Benefit:'}
                  </span>
                  <span className="font-semibold text-amber-950">
                    {language === 'ta' ? scheme.subsidyAmountTa : scheme.subsidyAmount}
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <p className="font-bold text-stone-700">{language === 'ta' ? 'தகுதி:' : 'Eligibility:'}</p>
                  <p className="text-stone-600 leading-relaxed">
                    {language === 'ta' ? scheme.eligibilityTa : scheme.eligibilityEn}
                  </p>
                </div>

                <div className="space-y-1 text-xs pt-1 border-t border-stone-100">
                  <p className="font-bold text-stone-700">{language === 'ta' ? 'தேவையான ஆவணங்கள்:' : 'Required Documents:'}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {scheme.documents.map((doc, dIdx) => (
                      <span key={dIdx} className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={scheme.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-agri-700 hover:text-agri-800"
                >
                  <span>{language === 'ta' ? 'அதிகாரப்பூர்வ தளம்' : 'Official Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenDownload}
                  className="px-3 py-1.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800"
                >
                  {language === 'ta' ? 'செயலியில் விண்ணப்பிக்க' : 'Apply in App'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

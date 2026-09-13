import React, { useState } from 'react';
import {
  Store,
  ShoppingBag,
  Tag,
  Phone,
  MapPin,
  CheckCircle2,
  Filter,
  PlusCircle,
  X,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { marketplaceProduce } from '../data/marketplaceData';

export default function MarketplacePage({ onOpenDownload }) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [contactFarmerModal, setContactFarmerModal] = useState(null);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [listSuccess, setListSuccess] = useState(false);

  // New crop listing form state
  const [newCrop, setNewCrop] = useState({
    name: '',
    category: 'vegetables',
    qty: '',
    price: '',
    location: '',
    farmer: ''
  });

  const filteredProduce = marketplaceProduce.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch =
      prod.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.nameTa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCreateListing = (e) => {
    e.preventDefault();
    setListSuccess(true);
    setTimeout(() => {
      setListSuccess(false);
      setIsListModalOpen(false);
      setNewCrop({ name: '', category: 'vegetables', qty: '', price: '', location: '', farmer: '' });
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
          <Store className="w-4 h-4 text-orange-700" />
          <span>{language === 'ta' ? 'விவசாயி நேரடி விளைபொருள் சந்தை' : 'Farmer Direct-to-Buyer Marketplace'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          {language === 'ta' ? 'இடைத்தரகர் இல்லாத நேரடி விவசாய விற்பனை' : 'Sell Your Harvest Directly at Zero Commission'}
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          {language === 'ta'
            ? 'மண்டி இடைத்தரகர்களுக்கு கமிஷன் கொடுக்க வேண்டாம்! உங்கள் நெல், காய்கறி, பழங்களை மொத்த வியாபாரிகள் மற்றும் நுகர்வோருக்கு நேரடியாக விற்று 30% - 40% கூடுதல் லாபம் பெறுங்கள்.'
            : 'Cut out middlemen deductions and Mandi agent commissions. Farmers list their crops in under 2 minutes, benchmark against live Mandi prices, and connect with direct verified buyers.'}
        </p>

        {/* Action Button: List Produce */}
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => setIsListModalOpen(true)}
            className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{language === 'ta' ? 'விளைபொருளை விற்பனைக்கு பதிவேற்ற' : 'List Your Produce (Free)'}</span>
          </button>
        </div>
      </div>

      {/* How it works for Farmers & Buyers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xl">
            1️⃣
          </div>
          <h3 className="font-bold text-stone-900 text-base">
            {language === 'ta' ? '1. விளைபொருளைப் பதிவிடுங்கள்' : '1. Quick 2-Minute Listing'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'பயிரின் பெயர், அளவு (கிலோ/டன்), எதிர்பார்க்கும் விலை மற்றும் உங்கள் ஊரை உள்ளிடவும்.'
              : 'Add photo, quantity available, harvest date, and expected price per kg or quintal with zero listing fees.'}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
            2️⃣
          </div>
          <h3 className="font-bold text-stone-900 text-base">
            {language === 'ta' ? '2. நேரடி வாங்குபவர் தொடர்பு' : '2. Direct Phone Connect'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'உணவகங்கள், ஆர்கானிக் கடைகள் மற்றும் மொத்த வியாபாரிகள் நேரடியாக உங்கள் மொபைலில் அழைப்பார்கள்.'
              : 'Verified wholesale merchants, FPOs, hotels, and retail buyers call your verified mobile directly.'}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl">
            3️⃣
          </div>
          <h3 className="font-bold text-stone-900 text-base">
            {language === 'ta' ? '3. 100% உங்கள் லாபம்' : '3. 0% Middleman Deduction'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'மண்டி கமிஷன் கட்டணம் கிடையாது. மொத்தப் பணமும் விவசாயியின் கைக்கு நேரடியாக வந்து சேரும்.'
              : 'Full payment directly into farmer account via UPI/Cash on delivery without broker cut.'}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {language === 'ta' ? 'தற்போது விற்பனைக்கு உள்ள விளைபொருட்கள்' : 'Live Available Produce From Verified Farmers'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {language === 'ta' ? 'நேரடியாக விவசாயிகளைத் தொடர்புகொண்டு புதிய விளைபொருட்களை வாங்கவும்' : 'Connect directly with Tamil Nadu farmers for freshly harvested crops'}
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ta' ? 'விளைபொருளைத் தேட...' : 'Search crop, farmer, or district...'}
              className="w-full pl-10 pr-4 py-2 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {language === 'ta' ? 'அனைத்து பொருட்கள்' : 'All Produce'}
          </button>
          <button
            onClick={() => setSelectedCategory('grains')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'grains'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            🌾 {language === 'ta' ? 'நெல் & சிறுதானியங்கள்' : 'Grains & Millets'}
          </button>
          <button
            onClick={() => setSelectedCategory('vegetables')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'vegetables'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            🧅 {language === 'ta' ? 'காய்கறிகள்' : 'Fresh Vegetables'}
          </button>
          <button
            onClick={() => setSelectedCategory('fruits')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'fruits'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            🥭 {language === 'ta' ? 'பழங்கள் & இளநீர்' : 'Fruits & Coconuts'}
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProduce.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft hover:shadow-elevated transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{prod.emoji}</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {language === 'ta' ? prod.verifiedBadgeTa : prod.verifiedBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-900 leading-snug">
                    {language === 'ta' ? prod.nameTa : prod.nameEn}
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {language === 'ta' ? prod.nameEn : prod.nameTa}
                  </p>
                </div>

                {/* Price & Quantity Box */}
                <div className="p-3.5 bg-orange-50/70 rounded-2xl border border-orange-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-stone-500 block">
                      {language === 'ta' ? 'நேரடி விவசாய விலை:' : 'Farmer Direct Price:'}
                    </span>
                    <span className="text-xl font-extrabold text-orange-950">{prod.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-stone-500 block">
                      {language === 'ta' ? 'இருப்பு அளவு:' : 'Stock Available:'}
                    </span>
                    <span className="text-sm font-bold text-stone-800">{prod.availableQty}</span>
                  </div>
                </div>

                {/* Mandi Benchmark comparison */}
                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60 text-[11px] text-stone-700 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium">
                    {language === 'ta' ? prod.mandiBenchmarkTa : prod.mandiBenchmark}
                  </span>
                </div>

                {/* Farmer & Location details */}
                <div className="space-y-1 text-xs text-stone-600 pt-1">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-stone-900">🧑‍🌾 {prod.farmerName}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{language === 'ta' ? prod.locationTa : prod.location}</span>
                  </div>
                  <div className="text-[11px] text-stone-400">
                    📅 {language === 'ta' ? prod.harvestDateTa : prod.harvestDate}
                  </div>
                </div>
              </div>

              {/* Action Button: Connect */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => setContactFarmerModal(prod)}
                  className="w-full py-2.5 rounded-xl bg-agri-700 hover:bg-agri-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{language === 'ta' ? 'விவசாயியை அழைக்க' : 'Contact Farmer Directly'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Contact Farmer */}
      {contactFarmerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 space-y-4">
            <button
              onClick={() => setContactFarmerModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <span className="text-4xl">{contactFarmerModal.emoji}</span>
              <div>
                <h4 className="font-bold text-stone-900 text-base">
                  {language === 'ta' ? contactFarmerModal.nameTa : contactFarmerModal.nameEn}
                </h4>
                <p className="text-xs text-stone-500">{contactFarmerModal.farmerName}</p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-900">
                  {language === 'ta' ? 'விவசாயி மொபைல் எண்:' : 'Direct Phone Contact:'}
                </span>
                <span className="font-mono font-bold text-emerald-950 text-sm">{contactFarmerModal.phone}</span>
              </div>
              <p className="text-stone-600">
                {language === 'ta'
                  ? 'நேரடியாகப் பேசி விலை, பேக்கிங் மற்றும் டெலிவரி பற்றி முடிவெடுக்கலாம்.'
                  : 'Call directly to negotiate bulk quantity, pickup terms, or farm-gate inspection.'}
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={`tel:${contactFarmerModal.phone}`}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'ta' ? 'உடனே போனில் அழைக்க' : 'Call Now'}</span>
              </a>
              <button
                onClick={() => setContactFarmerModal(null)}
                className="w-full py-2.5 rounded-2xl bg-stone-100 text-stone-700 font-bold text-xs hover:bg-stone-200"
              >
                {language === 'ta' ? 'மூடு' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: List Produce */}
      {isListModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
            <button
              onClick={() => setIsListModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                🌾
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-900">
                  {language === 'ta' ? 'உங்கள் விளைபொருளைப் பதிவேற்ற' : 'List Your Crop on Marketplace'}
                </h3>
                <p className="text-xs text-stone-500">
                  {language === 'ta' ? '0% கமிஷன் • 100% நேரடி வாங்குபவர்' : '0% Commission • Connect with 5,000+ Direct Buyers'}
                </p>
              </div>
            </div>

            {listSuccess ? (
              <div className="py-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-base">
                  {language === 'ta' ? 'விளைபொருள் வெற்றிகரமாக பட்டியலிடப்பட்டது!' : 'Harvest Successfully Listed!'}
                </h4>
                <p className="text-xs text-emerald-800">
                  {language === 'ta' ? 'வாங்குபவர்கள் விரைவில் உங்களைத் தொடர்புகொள்வார்கள்.' : 'Buyers will start viewing and contacting your number shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateListing} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {language === 'ta' ? 'பயிரின் பெயர்:' : 'Crop Name / Variety:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newCrop.name}
                    onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                    placeholder="e.g. CR-1009 Samba Paddy / நாட்டு தக்காளி"
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'ta' ? 'விற்பனை அளவு:' : 'Available Quantity:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={newCrop.qty}
                      onChange={(e) => setNewCrop({ ...newCrop, qty: e.target.value })}
                      placeholder="e.g. 500 kg / 2 tonnes"
                      className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'ta' ? 'எதிர்பார்க்கும் விலை:' : 'Expected Price:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={newCrop.price}
                      onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
                      placeholder="e.g. ₹55 / kg"
                      className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'ta' ? 'விவசாயி பெயர்:' : 'Farmer Name:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={newCrop.farmer}
                      onChange={(e) => setNewCrop({ ...newCrop, farmer: e.target.value })}
                      placeholder="e.g. R. Subramanian"
                      className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'ta' ? 'கிராமம் / மாவட்டம்:' : 'District / Town:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={newCrop.location}
                      onChange={(e) => setNewCrop({ ...newCrop, location: e.target.value })}
                      placeholder="e.g. Thanjavur / Salem"
                      className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all"
                  >
                    {language === 'ta' ? 'சந்தையில் உடனே வெளியிட' : 'Publish Listing to Buyers'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-orange-50 border border-orange-200 text-center space-y-4">
        <h3 className="text-2xl font-bold text-orange-950">
          {language === 'ta' ? 'உங்கள் ஸ்மார்ட்போனில் நேரடி சந்தையைப் பெறுங்கள்' : 'Trade Directly from Your Phone with Instant Alerts'}
        </h3>
        <p className="text-sm text-orange-800 max-w-xl mx-auto">
          {language === 'ta'
            ? 'உழவனின் நண்பன் செயலியைப் பதிவிறக்கி உங்கள் விளைபொருட்களை ஒரே நிமிடத்தில் புகைப்படம் எடுத்து விற்பனைக்கு விடுங்கள்.'
            : 'Download the app to get real-time price notifications whenever buyers in Chennai, Coimbatore, or Madurai search for your produce.'}
        </p>
        <button
          onClick={onOpenDownload}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all"
        >
          <Store className="w-4 h-4" />
          <span>{language === 'ta' ? 'சந்தை செயலியைப் பெற' : 'Download Marketplace App'}</span>
        </button>
      </div>

    </div>
  );
}

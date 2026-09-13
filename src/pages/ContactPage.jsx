import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Heart,
  Users,
  Sprout,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    userType: 'farmer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', userType: 'farmer', message: '' });
    }, 4000);
  };

  const faqs = [
    {
      qEn: "Is the Uzhavanin Nanban app completely free for farmers?",
      qTa: "உழவனின் நண்பன் செயலி விவசாயிகளுக்கு முற்றிலும் இலவசமா?",
      aEn: "Yes! 100% free with zero ads and zero hidden charges for farmers. All core tools—disease diagnosis, weather forecasts, government scheme alerts, and marketplace listings—are accessible free of charge.",
      aTa: "ஆம்! 100% இலவசம். விளம்பரங்கள் எதுவும் இல்லை. நோய் கண்டறிதல், வானிலை எச்சரிக்கை, அரசு மானியங்கள் மற்றும் நேரடி சந்தை உள்ளிட்ட அனைத்து அம்சங்களும் விவசாயிகளுக்கு எப்போதும் இலவசம்."
    },
    {
      qEn: "Does the Crop Disease Detection tool work without internet?",
      qTa: "இணைய வசதி இல்லாத கிராமங்களிலும் நோய் கண்டறியும் வசதி செயல்படுமா?",
      aEn: "Yes. The mobile app caches the top 40 local crop disease neural models directly on the smartphone. When you are deep in the field with poor network coverage, offline AI will still diagnose common paddy, tomato, and cotton issues.",
      aTa: "ஆம். அதிகம் பயிரிடப்படும் நெல், தக்காளி, பருத்தி உள்ளிட்ட 40 முக்கிய பயிர் நோய்களுக்கான மாதிரி செயலியில் சேமிக்கப்படுவதால், இணையம் இல்லாத நேரத்திலும் ஆஃப்லைனில் இயங்கும்."
    },
    {
      qEn: "Can urban terrace gardeners also use the app?",
      qTa: "நகர்ப்புற மாடித் தோட்டம் அமைப்போரும் இந்த செயலியைப் பயன்படுத்தலாமா?",
      aEn: "Absolutely! The Terrace Garden Plant Fit feature is specifically built for urban households with balconies, sunny windows, or rooftop spaces to calculate sunlight hours, suitable pot sizes, and organic pest control.",
      aTa: "கண்டிப்பாக! பால்கனி அல்லது மொட்டை மாடி உள்ள நகர்ப்புற மக்களுக்காகவே பிரத்யேகமாக 'மாடித் தோட்டத் தேர்வு' வழிகாட்டி உருவாக்கப்பட்டுள்ளது."
    },
    {
      qEn: "How does the Marketplace connect farmers to buyers without commission?",
      qTa: "இடைத்தரகர் கமிஷன் இல்லாமல் சந்தை எப்படி இயங்குகிறது?",
      aEn: "Uzhavanin Nanban provides a direct contact directory. When a buyer or restaurant finds your produce, they call your phone directly. Payment and delivery logistics are negotiated straight between grower and buyer with 0% platform take.",
      aTa: "வாங்குபவர் உங்கள் விளைபொருளைப் பார்த்தவுடன் உங்கள் தொலைபேசி எண்ணிற்கு நேரடியாக அழைக்கலாம். இரு தரப்பும் பேசி நேரடியாக வியாபாரம் செய்யும்போது இடைத்தரகர் கமிஷன் முற்றிலும் தவிர்க்கப்படுகிறது."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-agri-100 text-agri-800 text-xs font-bold uppercase tracking-wider">
          <Users className="w-4 h-4 text-agri-700" />
          <span>{language === 'ta' ? 'எங்கள் நோக்கம் & தொடர்பு' : 'Our Mission & Support'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          {language === 'ta' ? 'விவசாயிகளுடன் கைகோர்த்து செயல்படும் தளம்' : 'Dedicated to Every Farmer and Home Grower'}
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          {language === 'ta'
            ? 'பாரம்பரிய தமிழ் விவசாய அறிவையும் உலகத்தரம் வாய்ந்த செயற்கை நுண்ணறிவையும் இணைத்து உணவு உற்பத்தியாளர்களைப் பாதுகாப்பதே எங்கள் வாழ்நாள் நோக்கம்.'
            : 'We unite ancestral agro-ecological wisdom with edge computing and computer vision to secure Indian farm livelihoods and advance green urban terrace self-sufficiency.'}
        </p>
      </div>

      {/* Mission & Impact Banner */}
      <div className="bg-gradient-to-tr from-agri-900 to-agri-800 rounded-[32px] p-8 sm:p-12 text-white shadow-elevated grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <div className="text-3xl font-extrabold text-agri-300">120,000+</div>
          <h3 className="text-lg font-bold text-white">
            {language === 'ta' ? 'பயனாளர்கள்' : 'Farmers Connected'}
          </h3>
          <p className="text-xs text-agri-100 leading-relaxed">
            {language === 'ta'
              ? 'தமிழகத்தின் 38 மாவட்டங்களிலும் உள்ள விவசாயிகள் மற்றும் மாடித் தோட்டக்காரர்கள்.'
              : 'Across 38 districts of Tamil Nadu and neighboring agricultural belts.'}
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-extrabold text-amber-300">₹3.4 Crore+</div>
          <h3 className="text-lg font-bold text-white">
            {language === 'ta' ? 'நேரடி சேமிப்பு & லாபம்' : 'Farmer Value Created'}
          </h3>
          <p className="text-xs text-agri-100 leading-relaxed">
            {language === 'ta'
              ? 'பூச்சி மருந்து செலவு குறைப்பு மற்றும் நேரடி விற்பனை மூலம் விவசாயிகளுக்குக் கிடைத்த கூடுதல் லாபம்.'
              : 'Through timely pest mitigation, reduced pesticide expenditure, and direct sales.'}
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-extrabold text-emerald-300">100% Free</div>
          <h3 className="text-lg font-bold text-white">
            {language === 'ta' ? 'இலவச மக்கள் சேவை' : 'Open Public Initiative'}
          </h3>
          <p className="text-xs text-agri-100 leading-relaxed">
            {language === 'ta'
              ? 'விவசாயிகளிடம் இருந்து எந்தவித மறைமுக கட்டணமும் பெறப்படுவதில்லை.'
              : 'Committed to permanent free access for grassroots farmers and gardeners.'}
          </p>
        </div>
      </div>

      {/* Contact Form & Office Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-agri-700 bg-agri-50 px-2.5 py-1 rounded-md">
              {language === 'ta' ? 'நேரடி தொடர்பு படிவம்' : 'Get In Touch'}
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-2">
              {language === 'ta' ? 'எங்களுக்கு செய்தி அனுப்பவும்' : 'Send Us a Message or Feedback'}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              {language === 'ta' ? 'விவசாய ஆலோசனைகள் அல்லது செயலி உதவிகளுக்கு உடனடியாக பதில் அளிக்கப்படும்' : 'Our agronomy support team will respond to your phone or email within 24 hours'}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 animate-in fade-in duration-150">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-emerald-950">
                {language === 'ta' ? 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!' : 'Thank you! Message Received.'}
              </h4>
              <p className="text-xs text-emerald-800">
                {language === 'ta'
                  ? 'எங்கள் விவசாய ஆலோசகர் விரைவில் உங்களைத் தொடர்புகொள்வார்.'
                  : 'An agricultural advisor from our team will contact you shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {language === 'ta' ? 'உங்கள் பெயர்:' : 'Full Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. S. Murugesan"
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agri-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {language === 'ta' ? 'கைபேசி எண்:' : 'Mobile Phone Number:'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98400 12345"
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agri-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {language === 'ta' ? 'மின்னஞ்சல் (விரும்பினால்):' : 'Email Address (Optional):'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agri-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {language === 'ta' ? 'நீங்கள் யார்?' : 'I am a:'}
                </label>
                <select
                  value={formData.userType}
                  onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agri-600"
                >
                  <option value="farmer">{language === 'ta' ? 'விவசாயி (Farmer)' : 'Rural Farmer / Landholder'}</option>
                  <option value="gardener">{language === 'ta' ? 'மாடித் தோட்டக்காரர் (Terrace Gardener)' : 'Urban Terrace / Balcony Gardener'}</option>
                  <option value="trader">{language === 'ta' ? 'வியாபாரி / வாங்குபவர் (Produce Buyer)' : 'Wholesale Produce Buyer / Retailer'}</option>
                  <option value="fpo">{language === 'ta' ? 'உழவர் உற்பத்தியாளர் குழு (FPO)' : 'Farmer Producer Organization (FPO)'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {language === 'ta' ? 'உங்கள் கருத்து / கேள்வி:' : 'Message / Farming Question:'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'ta'
                      ? 'உங்கள் பயிர் பற்றிய கேள்வி அல்லது சந்தேகத்தை இங்கே உள்ளிடவும்...'
                      : 'Describe your crop, question, or partnership inquiry here...'
                  }
                  className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agri-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-agri-700 hover:bg-agri-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'ta' ? 'செய்தியை அனுப்ப' : 'Submit Message'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Support Directory & Helplines */}
        <div className="lg:col-span-5 space-y-6">
          {/* Official Toll-Free Call Centre */}
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200/90 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-amber-950 text-base">
              {language === 'ta' ? 'அரசு கிசான் உதவி மையம் (கட்டணமில்லா எண்)' : 'Official Kisan Toll-Free Call Centre'}
            </h4>
            <div className="text-3xl font-extrabold text-amber-800">1551</div>
            <p className="text-xs text-amber-900 leading-relaxed">
              {language === 'ta'
                ? 'அனைத்து வேலை நாட்களிலும் காலை 6:00 மணி முதல் இரவு 10:00 மணி வரை தமிழில் நேரடி விவசாய விஞ்ஞானிகளிடம் பேசலாம்.'
                : 'Directly speak with agricultural university scientists in native Tamil 6:00 AM to 10:00 PM all 7 days a week.'}
            </p>
          </div>

          {/* Regional Hubs Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft space-y-4">
            <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-agri-700" />
              <span>{language === 'ta' ? 'முக்கிய அலுவலகங்கள் & மையங்கள்' : 'Agricultural Research Hubs'}</span>
            </h4>

            <div className="space-y-3 text-xs text-stone-600">
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/60">
                <p className="font-bold text-stone-900">Coimbatore Hub (TNAU Campus)</p>
                <p className="text-stone-500">Lawley Road, Coimbatore, Tamil Nadu - 641003</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/60">
                <p className="font-bold text-stone-900">Thanjavur Delta Field Station</p>
                <p className="text-stone-500">Soil Water Management Research Institute, Kattuthottam</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/60">
                <p className="font-bold text-stone-900">Chennai Urban Garden Centre</p>
                <p className="text-stone-500">Horticulture Complex, Madhavaram, Chennai - 600051</p>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-500 border-t border-stone-100 flex items-center space-x-2">
              <Mail className="w-4 h-4 text-agri-700" />
              <span>contact@uzhavanin-nanban.in</span>
            </div>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions (FAQ) */}
      <div className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-agri-700 bg-agri-50 px-3 py-1 rounded-full border border-agri-200">
            {language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Common Inquiries'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
            {language === 'ta' ? 'விவசாயிகளின் பொதுவான சந்தேகங்கள்' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-stone-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-stone-50"
              >
                <span>{language === 'ta' ? faq.qTa : faq.qEn}</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-agri-700' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-stone-50/50 animate-in fade-in duration-150">
                  {language === 'ta' ? faq.aTa : faq.aEn}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

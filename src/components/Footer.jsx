import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, Heart, ArrowUpRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { featuresList } from '../data/featuresData';

export default function Footer({ onOpenDownload }) {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-agri-600 to-agri-400 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  உழவனின் நண்பன்
                </span>
                <span className="text-xs text-agri-400 font-semibold block">
                  Uzhavanin Nanban • Farmer's Friend
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              {language === 'ta'
                ? 'விவசாயிகளின் வாழ்வாதாரத்தை உயர்த்தவும், நகர்ப்புற மக்களுக்கு இயற்கையான மாடித் தோட்ட விழிப்புணர்வை ஏற்படுத்தவும் உருவாக்கப்பட்ட ஸ்மார்ட் செயலி.'
                : 'Empowering smallholder farmers across Tamil Nadu and urban terrace gardeners with AI-powered crop intelligence, accurate weather advisories, and direct marketplace connectivity.'}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <div className="p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-agri-400 flex items-center space-x-2 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'ta' ? 'அங்கீகரிக்கப்பட்ட விவசாய தளம்' : 'Verified Agri Initiative'}</span>
              </div>
              <button
                onClick={onOpenDownload}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                {t('downloadApp')} &rarr;
              </button>
            </div>
          </div>

          {/* Quick Links - Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              {language === 'ta' ? 'முக்கிய கருவிகள்' : '6 Core Features'}
            </h4>
            <ul className="space-y-2 text-sm">
              {featuresList.map((f) => (
                <li key={f.id}>
                  <Link
                    to={f.path}
                    className="text-stone-400 hover:text-agri-400 transition-colors flex items-center group"
                  >
                    <span>{language === 'ta' ? f.titleTa : f.titleEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              {language === 'ta' ? 'தள இணைப்புகள்' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-stone-400 hover:text-agri-400 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-stone-400 hover:text-agri-400 transition-colors">
                  {t('marketplace')}
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-stone-400 hover:text-agri-400 transition-colors">
                  {t('schemes')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-agri-400 transition-colors">
                  {t('aboutContact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Farmer Helpline & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              {language === 'ta' ? 'விவசாய உதவி எண்' : 'Farmer Support'}
            </h4>
            <div className="p-3.5 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                <Phone className="w-4 h-4" />
                <span>1551 (Toll-Free)</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-tight">
                {language === 'ta' ? 'கிசான் கால் சென்டர் - அனைத்து வேலை நாட்களிலும் காலை 6 முதல் இரவு 10 மணி வரை' : 'Kisan Call Centre 6:00 AM to 10:00 PM (Tamil & Regional languages)'}
              </p>
            </div>

            <div className="text-xs text-stone-400 space-y-1.5 pt-1">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>support@uzhavanin-nanban.in</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Tamil Nadu Agricultural Univ Hub, Coimbatore</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Uzhavanin Nanban (உழவனின் நண்பன்). {t('allRightsReserved')}
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-agri-400 font-medium">{t('footerMotto')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

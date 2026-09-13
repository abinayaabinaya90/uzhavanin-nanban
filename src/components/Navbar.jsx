import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Languages,
  ChevronDown,
  Download,
  Sprout,
  ScanSearch,
  CloudSunRain,
  Landmark,
  Bot,
  Flower2,
  Store
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { featuresList } from '../data/featuresData';
import FeatureIcon from './FeatureIcon';

export default function Navbar({ onOpenDownload }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFeaturesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsFeaturesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-agri-700 via-agri-600 to-agri-500 flex items-center justify-center text-white shadow-md shadow-agri-700/20 group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-stone-900 tracking-tight leading-none group-hover:text-agri-700 transition-colors">
                  உழவனின் நண்பன்
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-agri-100 text-agri-800 border border-agri-200 hidden sm:inline-block">
                  APP
                </span>
              </div>
              <span className="text-xs font-semibold text-stone-500 tracking-wide block">
                Uzhavanin Nanban <span className="text-stone-300">•</span> Farmer's Friend
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-agri-800 bg-agri-50 font-bold' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {t('home')}
            </Link>

            {/* Features Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname.startsWith('/crop') ||
                  location.pathname.startsWith('/weather') ||
                  location.pathname.startsWith('/schemes') ||
                  location.pathname.startsWith('/ai-assistant') ||
                  location.pathname.startsWith('/plant-snap') ||
                  location.pathname.startsWith('/marketplace')
                    ? 'text-agri-800 bg-agri-50 font-bold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
                aria-expanded={isFeaturesDropdownOpen}
              >
                <span>{t('features')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFeaturesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isFeaturesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 lg:w-96 bg-white rounded-3xl shadow-xl border border-stone-200/80 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 py-2">
                    {language === 'ta' ? 'அனைத்து 6 ஸ்மார்ட் கருவிகள்' : 'All 6 Smart Crop Tools'}
                  </div>
                  <div className="space-y-1">
                    {featuresList.map((f) => (
                      <Link
                        key={f.id}
                        to={f.path}
                        onClick={() => setIsFeaturesDropdownOpen(false)}
                        className={`flex items-center space-x-3 p-2.5 rounded-2xl transition-colors ${
                          isActive(f.path) ? 'bg-agri-50 text-agri-800' : 'hover:bg-stone-50 text-stone-700 hover:text-stone-900'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${f.accentColor}`}>
                          <FeatureIcon name={f.iconName} className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold truncate">
                            {language === 'ta' ? f.titleTa : f.titleEn}
                          </p>
                          <p className="text-[11px] text-stone-400 truncate">
                            {language === 'ta' ? f.badgeTa : f.badgeEn}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/marketplace"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/marketplace') ? 'text-agri-800 bg-agri-50 font-bold' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {t('marketplace')}
            </Link>

            <Link
              to="/schemes"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/schemes') ? 'text-agri-800 bg-agri-50 font-bold' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {t('schemes')}
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-agri-800 bg-agri-50 font-bold' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {t('aboutContact')}
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 font-semibold text-xs transition-colors shadow-xs"
              title={language === 'en' ? 'தமிழில் மாற்ற' : 'Switch to English'}
            >
              <Languages className="w-4 h-4 text-amber-700" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* App Download CTA */}
            <button
              onClick={onOpenDownload}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-agri-700 hover:bg-agri-800 text-white font-bold text-sm shadow-md shadow-agri-700/20 hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{t('downloadApp')}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold"
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span>{language === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-2xl text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-3 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              to="/"
              className={`block px-4 py-2.5 rounded-2xl font-bold text-sm ${
                isActive('/') ? 'bg-agri-100 text-agri-800' : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {t('home')}
            </Link>

            <div className="pt-2 pb-1 px-4 text-[11px] font-bold uppercase tracking-wider text-stone-400">
              {language === 'ta' ? 'முக்கிய கருவிகள்' : 'Core Smart Tools'}
            </div>

            {featuresList.map((f) => (
              <Link
                key={f.id}
                to={f.path}
                className={`flex items-center space-x-3 px-4 py-2.5 rounded-2xl text-sm font-semibold ${
                  isActive(f.path) ? 'bg-agri-50 text-agri-800 font-bold' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${f.accentColor}`}>
                  <FeatureIcon name={f.iconName} className="w-4 h-4" />
                </div>
                <span>{language === 'ta' ? f.titleTa : f.titleEn}</span>
              </Link>
            ))}

            <div className="border-t border-stone-100 my-2 pt-2">
              <Link
                to="/marketplace"
                className={`block px-4 py-2.5 rounded-2xl font-bold text-sm ${
                  isActive('/marketplace') ? 'bg-agri-100 text-agri-800' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {t('marketplace')}
              </Link>
              <Link
                to="/schemes"
                className={`block px-4 py-2.5 rounded-2xl font-bold text-sm ${
                  isActive('/schemes') ? 'bg-agri-100 text-agri-800' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {t('schemes')}
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-2.5 rounded-2xl font-bold text-sm ${
                  isActive('/contact') ? 'bg-agri-100 text-agri-800' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {t('aboutContact')}
              </Link>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl bg-agri-700 text-white font-bold text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{t('downloadApp')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

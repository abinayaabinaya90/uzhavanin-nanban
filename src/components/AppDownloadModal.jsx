import React, { useState } from 'react';
import { X, Smartphone, Download, QrCode, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AppDownloadModal({ isOpen, onClose }) {
  const { language } = useLanguage();
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleSimulateDownload = (platform) => {
    setDownloadStarted(true);
    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-agri-700 to-agri-500 flex items-center justify-center text-white shadow-md">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-stone-900">
              {language === 'ta' ? 'உழவனின் நண்பன் செயலியைப் பெறுங்கள்' : 'Get Uzhavanin Nanban App'}
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              {language === 'ta' ? 'ஆண்ட்ராய்டு & iOS சாதனங்களுக்கு இலவசம்' : 'Free for Android & iOS devices • v2.4 (Latest)'}
            </p>
          </div>
        </div>

        {downloadStarted ? (
          <div className="my-8 p-6 bg-agri-50 border border-agri-200 rounded-2xl text-center animate-pulse-subtle">
            <CheckCircle2 className="w-12 h-12 text-agri-600 mx-auto mb-2" />
            <p className="font-bold text-agri-900 text-lg">
              {language === 'ta' ? 'பதிவிறக்கம் தொடங்கியது!' : 'Download Started!'}
            </p>
            <p className="text-xs text-agri-700 mt-1">
              {language === 'ta'
                ? 'உங்கள் ஸ்மார்ட்போனில் APK கோப்பு சேமிக்கப்படுகிறது. பதிவிறக்கம் முடிந்ததும் திறக்கவும்.'
                : 'The Uzhavanin Nanban APK package is downloading. Open after completion.'}
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-stone-600 mb-6">
              {language === 'ta'
                ? 'கிராமப்புற விவசாயிகளுக்கும் மாடித் தோட்ட விரும்பிகளுக்கும் தமிழ் & ஆங்கில குரல் வழிகாட்டலுடன் வடிவமைக்கப்பட்ட எளிய செயலி.'
                : 'Designed with ultra-fast offline capabilities, bilingual Tamil/English voice input, and step-by-step smart agricultural advisory.'}
            </p>

            {/* Download Options */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSimulateDownload('playstore')}
                className="w-full flex items-center justify-between p-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-2xl transition-all shadow-sm group"
              >
                <div className="flex items-center space-x-3 text-left">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight">Google Play Store</div>
                  </div>
                </div>
                <Download className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={() => handleSimulateDownload('apk')}
                className="w-full flex items-center justify-between p-3.5 bg-agri-700 hover:bg-agri-800 text-white rounded-2xl transition-all shadow-sm group"
              >
                <div className="flex items-center space-x-3 text-left">
                  <span className="text-2xl">📦</span>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-agri-200 font-semibold">DIRECT DOWNLOAD</div>
                    <div className="text-sm font-bold leading-tight">
                      {language === 'ta' ? 'நேரடி ஆண்ட்ராய்டு APK (18 MB)' : 'Direct Android APK (18 MB - Fast)'}
                    </div>
                  </div>
                </div>
                <Download className="w-5 h-5 text-agri-200 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={() => handleSimulateDownload('appstore')}
                className="w-full flex items-center justify-between p-3.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-2xl transition-all group"
              >
                <div className="flex items-center space-x-3 text-left">
                  <span className="text-2xl">🍏</span>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">DOWNLOAD ON THE</div>
                    <div className="text-sm font-bold leading-tight">Apple App Store (iOS)</div>
                  </div>
                </div>
                <Download className="w-5 h-5 text-stone-500 group-hover:text-stone-900 transition-colors" />
              </button>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center space-x-2 pt-2 border-t border-stone-100 text-stone-500 text-xs">
              <ShieldCheck className="w-4 h-4 text-agri-600" />
              <span>100% Free • Verified Safe • No Ads for Farmers</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

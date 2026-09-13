import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import FeatureIcon from './FeatureIcon';
import { useLanguage } from '../context/LanguageContext';

export default function FeatureCard({ feature }) {
  const { language, t } = useLanguage();

  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-soft hover:shadow-elevated hover:border-agri-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Badges & Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm ${feature.accentColor} transition-transform group-hover:scale-105 duration-200`}>
            <FeatureIcon name={feature.iconName} className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
            {language === 'ta' ? feature.categoryTa : feature.category}
          </span>
        </div>

        {/* Feature Titles */}
        <div className="mb-3">
          <div className="text-xs font-semibold text-agri-700 mb-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>{language === 'ta' ? feature.badgeTa : feature.badgeEn}</span>
          </div>
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-agri-700 transition-colors">
            {language === 'ta' ? feature.titleTa : feature.titleEn}
          </h3>
          <p className="text-xs font-medium text-stone-400 mt-0.5">
            {language === 'ta' ? feature.titleEn : feature.titleTa}
          </p>
        </div>

        {/* Description */}
        <p className="text-stone-600 text-sm leading-relaxed mb-6">
          {language === 'ta' ? feature.shortDescTa : feature.shortDescEn}
        </p>
      </div>

      {/* Link to Feature Page */}
      <Link
        to={feature.path}
        className="inline-flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-stone-50 group-hover:bg-agri-50 text-stone-800 group-hover:text-agri-800 font-semibold text-sm border border-stone-200/70 group-hover:border-agri-200 transition-all duration-200"
      >
        <span>{t('learnMore')}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

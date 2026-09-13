import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    appName: "Uzhavanin Nanban",
    appSubName: "Farmer's Friend",
    tagline: "Smart Agricultural Intelligence for Farmers & Urban Gardeners",
    subTagline: "Detect crop diseases with AI, get localized weather warnings, access government schemes, plan balcony crops, and sell directly to buyers with zero middlemen.",
    downloadApp: "Download App",
    getStarted: "Explore Features",
    home: "Home",
    features: "Features",
    cropDetection: "Crop Disease Detection",
    weather: "Weather Updates",
    schemes: "Government Schemes",
    aiAssistant: "AI Agri Assistant",
    plantSnap: "Terrace Garden Fit",
    marketplace: "Sell Produce",
    aboutContact: "About & Contact",
    learnMore: "Learn More",
    quickStats: "Empowering 100,000+ Farmers Across Tamil Nadu & India",
    accuracyStat: "95% Detection Accuracy",
    farmersStat: "120,000+ Active Farmers",
    savingsStat: "₹2,800 Avg Savings / Acre",
    whyChooseUs: "Why Farmers & Gardeners Trust Uzhavanin Nanban",
    testimonialsTitle: "Voices from the Field",
    footerMotto: "Bridging timeless traditional farming wisdom with cutting-edge artificial intelligence.",
    tollFreeHelp: "Kisan Call Centre (Toll-Free): 1551",
    allRightsReserved: "All rights reserved. Dedicated to the hardworking farmers of India.",
    freeApp: "100% Free & Open Access",
    voiceTamil: "Tamil & English Voice Enabled",
    offlineReady: "Works in Low Connectivity",
  },
  ta: {
    appName: "உழவனின் நண்பன்",
    appSubName: "விவசாயியின் தோழன்",
    tagline: "விவசாயிகள் மற்றும் மாடித் தோட்டக்காரர்களுக்கான நவீன டிஜிட்டல் தோழன்",
    subTagline: "செயற்கை நுண்ணறிவு மூலம் பயிர் நோய் கண்டறிதல், உடனடி வானிலை தகவல், அரசு மானிய திட்டங்கள், மாடித் தோட்ட வழிகாட்டி மற்றும் இடைத்தரகர் இல்லாத நேரடி சந்தை.",
    downloadApp: "செயலியை பதிவிறக்க",
    getStarted: "வசதிகளைப் பார்க்க",
    home: "முகப்பு",
    features: "முக்கிய சேவைகள்",
    cropDetection: "பயிர் நோய் கண்டறிதல்",
    weather: "வானிலை தகவல்கள்",
    schemes: "அரசு திட்டங்கள் & மானியங்கள்",
    aiAssistant: "AI விவசாய உதவியாளர்",
    plantSnap: "மாடித் தோட்டத் தேர்வு",
    marketplace: "விளைபொருள் சந்தை",
    aboutContact: "எங்களை பற்றி & தொடர்பு",
    learnMore: "மேலும் அறிய",
    quickStats: "தமிழகம் மற்றும் இந்தியா முழுவதும் 1,00,000+ விவசாயிகள் பயன்",
    accuracyStat: "95% துல்லியமான கண்டறிதல்",
    farmersStat: "1,20,000+ பயனாளர்கள்",
    savingsStat: "ஏக்கருக்கு சராசரியாக ₹2,800 சேமிப்பு",
    whyChooseUs: "உழவனின் நண்பன் செயலியை விவசாயிகள் ஏன் தேர்வு செய்கிறார்கள்?",
    testimonialsTitle: "விவசாயிகளின் அனுபவங்கள்",
    footerMotto: "பாரம்பரிய விவசாய அறிவையும் நவீன செயற்கை நுண்ணறிவையும் இணைக்கும் நம்பகமான தளம்.",
    tollFreeHelp: "கிசான் உதவி மையம் (கட்டணமில்லா எண்): 1551",
    allRightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. இந்திய விவசாயிகளுக்கு அர்ப்பணிக்கப்பட்டது.",
    freeApp: "100% இலவசம் & எளிதான பயன்பாடு",
    voiceTamil: "தமிழ் மற்றும் ஆங்கில குரல் வழி உதவி",
    offlineReady: "குறைந்த இணையத்திலும் இயங்கும்",
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('uzhavan_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('uzhavan_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

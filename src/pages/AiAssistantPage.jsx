import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Send,
  Mic,
  Volume2,
  Calendar,
  Clock,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  HelpCircle,
  Smartphone,
  Flame
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const initialConversation = [
  {
    sender: 'user',
    textEn: "My Samba paddy is at 45 days after transplanting. What fertilizer and micronutrient should I apply now?",
    textTa: "என் சம்பா நெல் நட்டு 45 நாட்கள் ஆகிறது. இப்போது என்ன உரம் மற்றும் நுண்ணூட்டம் இட வேண்டும்?",
    time: "10:14 AM"
  },
  {
    sender: 'ai',
    textEn: "🌾 For 45-day Samba Paddy (Panicle Initiation Stage):\n\n1. Top-Dressing Dose (Per Acre):\n• Urea: 25 kg + MOP (Potash): 15 kg\n• Neem-coated urea is recommended to prevent leaching.\n\n2. Micronutrient Boost:\n• Spray TNAU Paddy Micronutrient Mixture @ 1 kg/acre diluted in 200L water during morning hours.\n\n3. Water Care:\n• Maintain a thin film of 2-3 cm water in the field; do not let soil crack during this critical flowering stage.",
    textTa: "🌾 45 நாள் சம்பா நெல் பயிருக்கு (கதிர் உருவாகும் முக்கிய பருவம்):\n\n1. மேல் உரம் (ஏக்கருக்கு):\n• யூரியா: 25 கிலோ + பொட்டாஷ் (MOP): 15 கிலோ கலந்து இடவும்.\n\n2. நுண்ணூட்ட சத்து:\n• TNAU நெல் நுண்ணூட்டக் கலவை 1 கிலோவை 200 லிட்டர் நீரில் கலந்து காலை வேளையில் இலைகளில் படுமாறு தெளிக்கவும்.\n\n3. நீர் பாசனம்:\n• வயலில் 2-3 செ.மீ அளவு மெல்லிய நீர் இருக்குமாறு பார்த்துக் கொள்ளவும். நிலம் வெடிக்க விடக்கூடாது.",
    time: "10:15 AM",
    hasVoice: true
  }
];

const samplePrompts = [
  {
    labelEn: "Paddy 45-day fertilizer dose?",
    labelTa: "45 நாள் நெல் மேல் உரம் என்ன?",
    qEn: "My Samba paddy is at 45 days after transplanting. What fertilizer and micronutrient should I apply now?",
    qTa: "என் சம்பா நெல் நட்டு 45 நாட்கள் ஆகிறது. இப்போது என்ன உரம் மற்றும் நுண்ணூட்டம் இட வேண்டும்?"
  },
  {
    labelEn: "Tomato leaves curling upwards?",
    labelTa: "தக்காளி இலை மேல்நோக்கி சுருளுகிறது?",
    qEn: "Why are my tomato leaves curling upwards like a boat? How to treat it organically?",
    qTa: "தக்காளி இலைகள் படகு போல மேல்நோக்கி சுருள்வது ஏன்? இயற்கை முறையில் என்ன செய்வது?"
  },
  {
    labelEn: "When to harvest Groundnuts?",
    labelTa: "நிலக்கடலை அறுவடைக்கு உகந்த நேரம்?",
    qEn: "How do I know my groundnut crop is mature and ready for harvesting?",
    qTa: "நிலக்கடலை பயிர் முற்றி அறுவடைக்கு தயாராகிவிட்டது என்பதை எப்படி அறிவது?"
  },
  {
    labelEn: "Organic pest repellent preparation?",
    labelTa: "அக்னி அஸ்திரம் தயாரிப்பது எப்படி?",
    qEn: "How to prepare Agni Astra organic pest repellent at home?",
    qTa: "வீட்டிலேயே அக்னி அஸ்திரம் இயற்கை பூச்சி விரட்டி தயாரிப்பது எப்படி?"
  }
];

export default function AiAssistantPage({ onOpenDownload }) {
  const { language } = useLanguage();
  const [messages, setMessages] = useState(initialConversation);
  const [inputText, setInputText] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [playingAudioIdx, setPlayingAudioIdx] = useState(null);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user',
      textEn: text,
      textTa: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsAiTyping(true);

    setTimeout(() => {
      let aiResponseEn = "🌱 Verified Agronomic Advice: Apply 5% Panchagavya spray early morning. Maintain optimal soil drainage and check undersides of leaves for vector pests. Detailed dosage tables are available in the Uzhavanin Nanban app.";
      let aiResponseTa = "🌱 உழவனின் நண்பன் AI ஆலோசனை: காலை வேளையில் 5% பஞ்சகவ்யா தெளிக்கவும். நிலத்தில் தேங்கிய தண்ணீரை வடியச் செய்து, இலைகளின் அடிப்பகுதியில் பூச்சிகள் உள்ளதா என்று கண்காணிக்கவும். கூடுதல் விபரங்கள் செயலியில் உள்ளன.";

      if (text.toLowerCase().includes('tomato') || text.includes('தக்காளி')) {
        aiResponseEn = "🍅 Tomato Leaf Curl Diagnosis:\nThis is caused by whitefly insect vectors transmitting leaf curl virus. \n• Organic: Spray 10,000 PPM Neem oil (2ml/L) and install yellow sticky traps (10/acre).\n• Chemical: Spray Diafenthiuron @ 1g/L.";
        aiResponseTa = "🍅 தக்காளி இலை சுருட்டு நோய் தீர்வு:\nஇது வெள்ளை ஈக்களால் பரவும் வைரஸ் நோய் ஆகும்.\n• இயற்கை வழி: ஏக்கருக்கு 10 மஞ்சள் ஒட்டும் பொறிகள் வைக்கவும். வேப்பெண்ணெய் 10,000 PPM (லிட்டருக்கு 2 மி.லி) தெளிக்கவும்.\n• ரசாயன மருந்து: டயாபெந்தியூரான் (லிட்டருக்கு 1 கிராம்) தெளிக்கவும்.";
      } else if (text.toLowerCase().includes('groundnut') || text.includes('நிலக்கடலை')) {
        aiResponseEn = "🥜 Groundnut Harvest Maturity Sign:\n1. Outer leaves turn pale yellow and start shedding.\n2. Pull out 3 random sample plants; scrape the pod shell inside. If the inside shell is dark brown/blackish, it is 100% ready for harvest!";
        aiResponseTa = "🥜 நிலக்கடலை முதிர்ச்சி அறிகுறிகள்:\n1. செடியின் கீழ் இலைகள் மஞ்சள் நிறமாக மாறி உதிரத் தொடங்கும்.\n2. 3 செடிகளைப் பிடுங்கி காயை உடைத்து உட்புறத்தை பார்க்கவும். ஓட்டின் உட்சுவர் கருமை நிறமாக மாறியிருந்தால் உடனடியாக அறுவடை செய்யலாம்!";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          textEn: aiResponseEn,
          textTa: aiResponseTa,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          hasVoice: true
        }
      ]);
      setIsAiTyping(false);
    }, 900);
  };

  const handlePlayVoice = (idx) => {
    setPlayingAudioIdx(idx);
    setTimeout(() => {
      setPlayingAudioIdx(null);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
          <Bot className="w-4 h-4 text-purple-700" />
          <span>{language === 'ta' ? '24/7 AI விவசாய நிபுணர்' : '24/7 AI Agri Specialist'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          {language === 'ta' ? 'AI உழவன்: உங்கள் தனிப்பட்ட பயிர் ஆலோசகர்' : 'AI Crop Management & Voice Assistant'}
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          {language === 'ta'
            ? 'உர அளவு, பூச்சி மருந்து கலவை, நடவு கால அட்டவணை மற்றும் சந்தேகங்களை தமிழில் தட்டச்சு செய்தோ அல்லது குரல் வழியாகவோ பேசி உடனடி பதில் பெறுங்கள்.'
            : 'Trained on Tamil Nadu Agricultural University (TNAU) and ICAR research datasets. Ask any farming query in English or spoken Tamil and get precision advisories instantly.'}
        </p>
      </div>

      {/* Main Interactive Chatbot Interface */}
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] border border-stone-200 shadow-elevated overflow-hidden">
        {/* Chatbot Header */}
        <div className="bg-gradient-to-r from-purple-800 to-agri-800 text-white p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-2xl shadow-inner">
              🤖
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-lg leading-tight">
                  {language === 'ta' ? 'உழவனின் நண்பன் AI' : 'Uzhavan AI Advisor'}
                </h3>
                <span className="text-[10px] bg-emerald-400 text-emerald-950 font-bold px-2 py-0.5 rounded-full">
                  Online
                </span>
              </div>
              <p className="text-xs text-purple-200">
                {language === 'ta' ? 'தமிழ் மற்றும் ஆங்கிலத்தில் குரல் வழி வழிகாட்டல்' : 'Tamil & English Voice Enabled • 24/7 Live'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDownload}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            <span>Open Full Screen App</span>
          </button>
        </div>

        {/* Conversation Message Feed */}
        <div className="p-4 sm:p-6 bg-stone-50/70 min-h-[400px] max-h-[500px] overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-agri-700 text-white rounded-br-none'
                    : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'
                }`}
              >
                <div className="text-xs sm:text-sm whitespace-pre-line leading-relaxed font-medium">
                  {language === 'ta' ? msg.textTa : msg.textEn}
                </div>

                {/* Voice audio simulation button if AI message */}
                {msg.sender === 'ai' && msg.hasVoice && (
                  <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => handlePlayVoice(idx)}
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                        playingAudioIdx === idx
                          ? 'bg-purple-100 text-purple-800 animate-pulse'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>
                        {playingAudioIdx === idx
                          ? (language === 'ta' ? 'குரல் ஒலிக்கிறது...' : 'Playing Tamil Audio...')
                          : (language === 'ta' ? 'குரல் வழியே கேட்க' : 'Listen in Tamil')}
                      </span>
                    </button>
                    <span className="text-[10px] text-stone-400">{msg.time}</span>
                  </div>
                )}

                {msg.sender === 'user' && (
                  <div className="text-right text-[10px] text-agri-200 mt-1">{msg.time}</div>
                )}
              </div>
            </div>
          ))}

          {isAiTyping && (
            <div className="flex items-center space-x-2 text-stone-500 text-xs p-3 bg-white rounded-2xl w-fit border border-stone-200 animate-pulse">
              <Sparkles className="w-4 h-4 text-purple-600 animate-spin" />
              <span>{language === 'ta' ? 'AI ஆலோசனை உருவாக்குகிறது...' : 'AI Consultant is formulating verified advice...'}</span>
            </div>
          )}
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 sm:px-6 pt-3 pb-2 bg-white border-t border-stone-100">
          <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
            {language === 'ta' ? 'பரிந்துரைக்கப்பட்ட கேள்விகள்:' : 'Frequently Asked Farming Prompts:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((p, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(language === 'ta' ? p.qTa : p.qEn)}
                className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-purple-50 hover:text-purple-800 text-stone-700 text-xs font-semibold border border-stone-200 transition-all text-left"
              >
                {language === 'ta' ? p.labelTa : p.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 sm:p-6 bg-white border-t border-stone-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center space-x-2"
          >
            <button
              type="button"
              onClick={() => handleSendMessage(language === 'ta' ? "நெல் குலை நோய்க்கு என்ன மருந்து தெளிக்க வேண்டும்?" : "What is the organic spray for paddy blast disease?")}
              className="p-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-purple-700 transition-colors"
              title="Speak in Tamil / English"
            >
              <Mic className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                language === 'ta'
                  ? 'உங்கள் விவசாய சந்தேகத்தைத் தட்டச்சு செய்யவும் (எ.கா: தக்காளி இலைக்கருகல்)...'
                  : 'Ask about fertilizer dosage, pest remedy, sowing calendar...'
              }
              className="flex-1 px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
            />

            <button
              type="submit"
              className="p-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white shadow-md transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* 4 Core AI Pillars */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {language === 'ta' ? 'AI விவசாய உதவியாளரின் 4 முக்கிய அம்சங்கள்' : '4 Pillars of Uzhavanin Nanban AI'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl">
              🌾
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'துல்லிய உர அட்டவணை' : 'Fertilizer Calculator'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'பயிரின் வயது மற்றும் ஏக்கர் நிலத்திற்கு ஏற்ப அடி உரம், முதல் மற்றும் இரண்டாம் மேலுரத்தின் சரியான அளவுகள்.'
                : 'Calculate basals and split top-dressings based on crop growth stages, soil test values, and acreage.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
              🐛
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'பூச்சி எச்சரிக்கை அறிவிப்பு' : 'Predictive Pest Alerts'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'காற்றின் ஈரப்பதம் மற்றும் வெப்பநிலையைக் கொண்டு பூச்சி தாக்குதல் ஏற்படும் முன்பே முன்னெச்சரிக்கை.'
                : 'Proactive warnings when weather conditions favor brown plant hopper, fall armyworm, or mildew outbreaks.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              📅
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'தனிப்பயன் பயிர் காலண்டர்' : 'Personal Crop Calendar'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'விதைத்த நாளிலிருந்து அறுவடை நாள் வரை பாசனம், களையெடுப்பு, உரம் இடும் நாட்களுக்கான நினைவூட்டல்.'
                : 'Day-by-day milestone reminders synced with your actual sowing date for weeding, de-suckering, and harvesting.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl">
              🗣️
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'ta' ? 'தமிழ் குரல் வழி ஆதரவு' : 'Tamil Voice Interface'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {language === 'ta'
                ? 'எழுத்தறிவு இல்லாத முதிய விவசாயிகளும் மைக்கை அழுத்தி பேசி ஆடியோ வடிவிலேயே பதிலை கேட்கலாம்.'
                : '100% accessible to non-literate farmers with high-fidelity colloquial Tamil speech-to-text and voice playback.'}
            </p>
          </div>
        </div>
      </div>

      {/* Download Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-purple-50 border border-purple-200 text-center space-y-4">
        <h3 className="text-2xl font-bold text-purple-950">
          {language === 'ta' ? 'உங்கள் ஸ்மார்ட்போனில் 24/7 AI உதவியாளரைப் பெறுங்கள்' : 'Experience Voice AI Assistant on Your Smartphone'}
        </h3>
        <p className="text-sm text-purple-800 max-w-xl mx-auto">
          {language === 'ta'
            ? 'வயலில் இருக்கும்போதே மைக்கை அழுத்தி பேசி ஆலோசனைகளைப் பெற உழவனின் நண்பன் செயலியை உடனே பதிவிறக்குங்கள்.'
            : 'Download the app to speak your questions out loud directly in Tamil or English anytime, anywhere.'}
        </p>
        <button
          onClick={onOpenDownload}
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-md transition-all"
        >
          <Bot className="w-4 h-4" />
          <span>{language === 'ta' ? 'செயலியில் AI உதவியாளரைத் தொடங்க' : 'Download AI Agri App'}</span>
        </button>
      </div>

    </div>
  );
}

import React from 'react';
import {
  ScanSearch,
  CloudSunRain,
  Landmark,
  Bot,
  Flower2,
  Store,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  MapPin,
  Calendar,
  AlertTriangle,
  Send,
  Camera,
  Check,
  Phone,
  HelpCircle,
  Menu,
  X,
  Languages,
  ChevronDown
} from 'lucide-react';

export default function FeatureIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case 'ScanSearch':
      return <ScanSearch className={className} />;
    case 'CloudSunRain':
      return <CloudSunRain className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Bot':
      return <Bot className={className} />;
    case 'Flower2':
      return <Flower2 className={className} />;
    case 'Store':
      return <Store className={className} />;
    default:
      return <Leaf className={className} />;
  }
}

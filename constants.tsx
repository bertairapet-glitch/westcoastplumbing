
import React from 'react';
import {
  Droplets,
  Wrench,
  Flame,
  ShowerHead,
  Search,
  ShieldCheck,
  Clock,
  ThumbsUp,
  PhoneCall,
  Zap,
  Mail
} from 'lucide-react';
import { Service, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning services to clear clogs and maintain proper flow.',
    icon: 'Droplets'
  },
  {
    id: '2',
    title: 'Camera Inspection',
    description: 'Advanced camera inspection technology to diagnose plumbing issues inside pipes.',
    icon: 'Search'
  },
  {
    id: '3',
    title: 'Leak Detection',
    description: 'Advanced detection methods for hidden leaks to prevent water damage.',
    icon: 'Zap'
  },
  {
    id: '4',
    title: 'Hydro Jetting',
    description: 'High-pressure water jetting to clear tough clogs and clean pipe interiors.',
    icon: 'ShowerHead'
  },
  {
    id: '5',
    title: 'Copper Repairs',
    description: 'Expert repair and replacement of copper pipes and fittings.',
    icon: 'Wrench'
  },
  {
    id: '6',
    title: 'Commercial Plumbing',
    description: 'Complete plumbing services for commercial properties and businesses.',
    icon: 'ShieldCheck'
  },
  {
    id: '7',
    title: 'Gas Leaks',
    description: 'Safe detection and repair of gas leaks and gas line issues.',
    icon: 'Flame'
  },
  {
    id: '8',
    title: 'Residential Plumbing',
    description: 'Comprehensive plumbing services for homes and residential properties.',
    icon: 'Clock'
  },
  {
    id: '9',
    title: 'Sewer Repairs',
    description: 'Expert sewer line repair and replacement services.',
    icon: 'ThumbsUp'
  },
  {
    id: '10',
    title: 'Industrial Plumbing',
    description: 'Heavy-duty plumbing solutions for industrial facilities and warehouses.',
    icon: 'PhoneCall'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Mike Rodriguez',
    rating: 5,
    text: 'Fast response when my water heater failed. They were here within hours and had it running again. Professional and trustworthy.'
  },
  {
    id: 'r2',
    author: 'Jennifer Chen',
    rating: 5,
    text: 'Installed our Navien tankless water heater perfectly. Friendly crew and they double-checked everything before leaving.'
  },
  {
    id: 'r3',
    author: 'David Kim',
    rating: 5,
    text: 'Long-time customers here - they handle all our plumbing needs. Always professional and reliable service.'
  },
  {
    id: 'r4',
    author: 'Lisa Martinez',
    rating: 5,
    text: 'Emergency call for a leak, they responded quickly and fixed it right. Willing to come back and check their work.'
  },
  {
    id: 'r5',
    author: 'Robert Wilson',
    rating: 5,
    text: 'Great experience with water heater repair. Knowledgeable technicians and fair pricing for Burbank area.'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-8 h-8 text-cyan-500 drop-shadow-lg" />,
  Wrench: <Wrench className="w-8 h-8 text-orange-500 drop-shadow-lg" />,
  Flame: <Flame className="w-8 h-8 text-red-500 drop-shadow-lg" />,
  ShowerHead: <ShowerHead className="w-8 h-8 text-blue-400 drop-shadow-lg" />,
  Search: <Search className="w-8 h-8 text-green-500 drop-shadow-lg" />,
  Zap: <Zap className="w-8 h-8 text-yellow-500 drop-shadow-lg" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-purple-500 drop-shadow-lg" />,
  Clock: <Clock className="w-8 h-8 text-indigo-500 drop-shadow-lg" />,
  ThumbsUp: <ThumbsUp className="w-8 h-8 text-pink-500 drop-shadow-lg" />,
  PhoneCall: <PhoneCall className="w-8 h-8 text-teal-500 drop-shadow-lg" />,
  Mail: <Mail className="w-6 h-6 text-blue-500 drop-shadow-lg" />
};

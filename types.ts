
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

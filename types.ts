export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

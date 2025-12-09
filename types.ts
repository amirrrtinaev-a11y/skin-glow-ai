export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export enum SkinType {
  DRY = 'Сухая',
  OILY = 'Жирная',
  COMBINATION = 'Комбинированная',
  NORMAL = 'Нормальная',
}

export enum ProductType {
  CLEANSER = 'Очищение',
  TONER = 'Тоник',
  SERUM = 'Сыворотка',
  CREAM = 'Крем',
  SPF = 'SPF',
  MASK = 'Маска',
  OTHER = 'Другое',
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  type: ProductType;
  price: number;
  description: string;
  imageUrl: string;
}

export interface DiagnosticData {
  skinType: SkinType;
  concerns: string[];
  season: string;
  allergies: string;
  budget: string;
  description: string;
  photoBase64?: string;
}

export interface AIRecommendation {
  analysis: string;
  causes: string;
  strategy: string;
  routine: {
    morning: string;
    evening: string;
  };
  productIds: string[]; // IDs of products selected from inventory
  reasoning: { [productId: string]: string }; // Why each product was chosen
}

export interface SkincareBox {
  id: string;
  userId: string;
  createdAt: string;
  data: DiagnosticData;
  recommendation: AIRecommendation;
  products: Product[]; // Hydrated products
  totalPrice: number;
  status: 'created' | 'ordered';
}

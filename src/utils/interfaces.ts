export interface Dish {
  id: any;
  name: string;
  cost: number;
  thumnailUrl: any;
  intro: any;
  description: any;
  ingredients: any;
  timeCooking: string;
  kind: number;
  rating?: Array<Rating>;
}
export interface Rating {
  value: number;
  count: number;
}
export enum KindOfFood {
  Drinks = 1,
  MainDishes,
  Desserts,
}

export interface User {
  id?: string;
  token?: string;
  displayName?: string;
  thumnailUrl?: string;
  phone?: string;
  address?: string;
  email?: string;
  facebookUrl?: string;
}

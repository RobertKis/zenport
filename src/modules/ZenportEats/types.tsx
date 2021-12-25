import { FoodMenuItem } from './data/food-menu';

export interface FoodMenuOrderItem extends FoodMenuItem {
  itemCount: number;
}

export interface FoodOrder {
  name: string;
  id: number;
  items: FoodMenuOrderItem[];
}

export interface Order {
  numPeople: number;
  orders: FoodOrder[];
}

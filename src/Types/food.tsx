
export interface FoodItem {
  id: number;
  name: string;
  Category: string;
  spicy: string;
  rice: string;
  meat: string;
  price: number;
  description: string;
}

export interface Filters {
  spicy: string[];
  foodtype: string[];
  riceandnoodle: string[];
  typeofmeat: string[];
  averageprice: (number | string)[];
}

export interface FoodListProps {
  filters: Filters;
  searchKey: number;
}

import './App.css'
import { FilterableProductTable } from './FilterableProductTable';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Meat", price: "$3", stocked: false, name: "Chicken" },
  { category: "Meat", price: "$5", stocked: true, name: "T-Bone" },
  { category: "Meat", price: "$7", stocked: true, name: "Salmon" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
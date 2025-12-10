// components/MealCard.tsx
import styles from "../styles/MealCard.module.css";

type MealCardProps = {
  name: string;
  calories: number;
  protein: number;
  carbs?: number;
  fats?: number;
};

export default function MealCard({ name, calories, protein, carbs, fats }: MealCardProps) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Protein: {protein}g</p>
      {carbs !== undefined && <p>Carbs: {carbs}g</p>}
      {fats !== undefined && <p>Fats: {fats}g</p>}
    </div>
  );
}

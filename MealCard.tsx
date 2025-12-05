// Components/MealCard.tsx
import styles from "../styles/MealCard.module.css";

type MealProps = {
  meal: {
    id: string;
    name: string;
    calories: number;
    protein: number;
  };
};

export default function MealCard({ meal }: MealProps) {
  return (
    <div className={styles.card}>
      <h3>{meal.name}</h3>
      <p>Calories: {meal.calories}</p>
      <p>Protein: {meal.protein}g</p>
    </div>
  );
}

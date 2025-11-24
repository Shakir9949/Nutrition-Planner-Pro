import '../styles/MealCard.module.css';
import styles from '../styles/MealCard.module.css';

type MealCardProps = {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

const MealCard = ({ name, calories, protein, carbs, fats }: MealCardProps) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Protein: {protein}g | Carbs: {carbs}g | Fats: {fats}g</p>
    </div>
  );
};

export default MealCard;

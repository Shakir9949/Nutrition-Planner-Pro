import '../styles/Planner.module.css';
import styles from '../styles/Planner.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import { useUser } from '../context/UserContext';

export default function Planner() {
  const { user } = useUser();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h2>Meal Planner</h2>
        <div className={styles.userInfo}>
          <p>Age: {user.age || '-'}</p>
          <p>Weight: {user.weight || '-'}</p>
          <p>Height: {user.height || '-'}</p>
          <p>Activity: {user.activity || '-'}</p>
        </div>

        <div className={styles.meals}>
          <MealCard name="Oatmeal with Fruits" calories={350} protein={12} carbs={55} fats={10} />
          <MealCard name="Grilled Chicken Salad" calories={450} protein={35} carbs={30} fats={15} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// pages/planner.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import styles from "../styles/Planner.module.css";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";

export default function Planner() {
  const { user, meals, loadMeals } = useUserContext();

  useEffect(() => {
    if (user) {
      loadMeals(user.id);
    }
  }, [user, loadMeals]);

  if (!user) return <p>Loading user info...</p>;

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>{user.name}'s Meal Planner</h1>
        {meals.length === 0 ? (
          <p>No meals planned yet.</p>
        ) : (
          <div className={styles.cards}>
            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

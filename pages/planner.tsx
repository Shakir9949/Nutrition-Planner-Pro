import styles from '../styles/Planner.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import { useUser, Meal } from '../context/UserContext';
import { useState } from 'react';

export default function Planner() {
  const { user, addMeal } = useUser();

  // Form state for new meal
  const [newMealName, setNewMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');

  // Handler to add meal
  const handleAddMeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMealName) return;

    const meal: Meal = {
      id: Date.now().toString(), // simple unique ID
      name: newMealName,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fats: Number(fats),
    };

    addMeal(meal);

    // Reset form
    setNewMealName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFats('');
  };

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
          {user.meals && user.meals.length > 0 ? (
            user.meals.map(meal => (
              <MealCard key={meal.id} {...meal} />
            ))
          ) : (
            <>
              <MealCard name="Oatmeal with Fruits" calories={350} protein={12} carbs={55} fats={10} />
              <MealCard name="Grilled Chicken Salad" calories={450} protein={35} carbs={30} fats={15} />
            </>
          )}
        </div>

        <div className={styles.addMealForm}>
          <h3>Add a New Meal</h3>
          <form onSubmit={handleAddMeal} className={styles.form}>
            <input
              type="text"
              placeholder="Meal Name"
              value={newMealName}
              onChange={e => setNewMealName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={e => setCalories(e.target.value)}
            />
            <input
              type="number"
              placeholder="Protein (g)"
              value={protein}
              onChange={e => setProtein(e.target.value)}
            />
            <input
              type="number"
              placeholder="Carbs (g)"
              value={carbs}
              onChange={e => setCarbs(e.target.value)}
            />
            <input
              type="number"
              placeholder="Fats (g)"
              value={fats}
              onChange={e => setFats(e.target.value)}
            />
            <button type="submit" className={styles.primaryButton}>Add Meal</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

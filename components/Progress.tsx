// components/Progress.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Progress.module.css";
import { useUser, ProgressEntry } from "../context/UserContext";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Progress() {
  const { user, setUser } = useUser();
  const [day, setDay] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");

  const addProgressEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!day) return;

    const entry: ProgressEntry = {
      day,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fats: Number(fats),
    };

    setUser({
      ...user,
      progress: [...(user.progress || []), entry],
    });

    // Reset form
    setDay("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
  };

  const data = {
    labels: user.progress?.map((p) => p.day) || [],
    datasets: [
      {
        label: "Calories",
        data: user.progress?.map((p) => p.calories) || [],
        borderColor: "#7f39fb",
        backgroundColor: "rgba(127,57,251,0.2)",
      },
      {
        label: "Protein",
        data: user.progress?.map((p) => p.protein) || [],
        borderColor: "#ff6b6b",
        backgroundColor: "rgba(255,107,107,0.2)",
      },
      {
        label: "Carbs",
        data: user.progress?.map((p) => p.carbs) || [],
        borderColor: "#4ecdc4",
        backgroundColor: "rgba(78,205,196,0.2)",
      },
      {
        label: "Fats",
        data: user.progress?.map((p) => p.fats) || [],
        borderColor: "#ffe66d",
        backgroundColor: "rgba(255,230,109,0.2)",
      },
    ],
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h2>Progress Tracker</h2>

        <div className={styles.chartContainer}>
          {user.progress && user.progress.length > 0 ? (
            <Line data={data} />
          ) : (
            <p>No progress data yet. Add entries below!</p>
          )}
        </div>

        <div className={styles.addProgressForm}>
          <h3>Add Progress Entry</h3>
          <form onSubmit={addProgressEntry} className={styles.form}>
            <input
              type="text"
              placeholder="Day (e.g., 2025-12-10)"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
            <input
              type="number"
              placeholder="Protein (g)"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />
            <input
              type="number"
              placeholder="Carbs (g)"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />
            <input
              type="number"
              placeholder="Fats (g)"
              value={fats}
              onChange={(e) => setFats(e.target.value)}
            />
            <button type="submit" className={styles.primaryButton}>
              Add Entry
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
